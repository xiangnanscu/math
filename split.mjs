import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';
import fs from 'fs';
import { formatTable } from './utils.mjs';

// 规范化标题为文件名
function normalizeTitle(title) {
  return title
      .trim()
      // 移除标题前的序号和空格
      .replace(/^[\d\.]+\s*/, '')
      .replace(/\s/g,'')
      .replaceAll('${n}$', 'n')
      .replaceAll('$\\','')
      .replaceAll('$','')
      // 移除汉字之间的空格
      // .replace(/([\u4e00-\u9fa5])\s+([\u4e00-\u9fa5])/g, '$1$2')
      // 汉字和数字之间的空格替换为连字符
      // .replace(/(\d)\s+(?=[\u4e00-\u9fa5])/g, '$1-$2');
}

// 获取标题的层级
function getHeaderLevel(line) {
    const match = line.match(/^#{1,6}\s/);
    return match ? match[0].trim().length : 0;
}

// 解析标题的序号和内容
function parseHeader(line) {
    const level = getHeaderLevel(line);
    const content = line.replace(/^#+\s*/, '');
    const numberMatch = content.match(/^([\d\.]+)\s*(.*)/);

    if (numberMatch) {
        return {
            level,
            number: numberMatch[1],
            title: numberMatch[2],
            full: content
        };
    }

    return {
        level,
        number: '',
        title: content,
        full: content
    };
}

const makeMathJaxCompatible = (content) => {
  return content.replace(/^## [^第]/g, '$1').replace('](images', '](/images').replace(' {€',' \text{€}{')
  .replace(/<table>[\s\S]*?<\/table>/g, (match) => {
    return formatTable(match);
  })
  // .replaceAll('">', '">\n\n')
  // .replaceAll('<td>', '<td>\n\n')
  // .replaceAll('</td>', '\n\n</td>');
}
// 解析文档结构
function parseDocument(content) {
    const lines = content.split('\n');
    const sections = [];
    let currentSection = null;
    let path = [];

    for (const line of lines) {
        const level = getHeaderLevel(line);

        if (level >= 2 && level <= 5) {
            const header = parseHeader(line);

            // 更新路径数组
            while (path.length >= level - 1) {
                path.pop();
            }
            path[level - 2] = header;

            // 如果是四级标题(####)，创建新的section
            if (level === 4) {
                currentSection = {
                    path: [...path],
                    content: [`# ${header.full}`],
                };
                sections.push(currentSection);
            }
            // 如果是五级标题(#####)，添加到当前section
            else if (level === 5 && currentSection) {
                currentSection.content.push(`## ${header.full}`);
            }
        } else if (currentSection) {
            // 修改这里：添加所有行到当前section，包括空行
            currentSection.content.push(makeMathJaxCompatible(line));
        }
    }

    return sections;
}

// 生成文件路径
function generateFilePath(section) {
    const parts = section.path.slice(0, 3).map(header => {
      if (header.number) {
        return `${header.number}-${normalizeTitle(header.title)}`;
      } else {
        return normalizeTitle(header.title)
      }

    });

    return parts.join('/') + '.md';
}

// 主函数：分割并保存文件
export async function splitMarkdown(content, outputDir = '.') {
    const sections = parseDocument(content);

    for (const section of sections) {
        // 生成完整的文件路径
        const filePath = `${outputDir}/${generateFilePath(section)}`;
        const fileContent = section.content.join('\n');

        // 创建目录
        await mkdir(dirname(filePath), { recursive: true });

        // 写入文件
        await writeFile(filePath, fileContent);
    }

    return sections.map(section => generateFilePath(section));
}



const result = await splitMarkdown(fs.readFileSync('.vitepress/p2.md', 'utf8'), './');