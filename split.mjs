import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';
import fs from 'fs';
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
function formatTable(html) {
  const STATE = {
      NORMAL: 0,      // 普通文本状态
      TAG_START: 1,   // 标签开始状态 (<)
      TAG_NAME: 2,    // 标签名称状态
      TAG_ATTRS: 3,   // 标签属性状态
      TD_CONTENT: 4,  // td内容状态
  };

  let state = STATE.NORMAL;
  let result = '';
  let currentTag = '';
  let tdContent = '';
  let i = 0;

  while (i < html.length) {
      const char = html[i];

      switch (state) {
          case STATE.NORMAL:
              if (char === '<') {
                  state = STATE.TAG_START;
                  currentTag = '';
              }
              result += char;
              break;

          case STATE.TAG_START:
              if (char === '/') {
                  currentTag = '/';
              } else {
                  currentTag = char;
                  state = STATE.TAG_NAME;
              }
              result += char;
              break;

          case STATE.TAG_NAME:
              if (char === '>') {
                  if (currentTag === 'td') {
                      state = STATE.TD_CONTENT;
                      tdContent = '';
                  } else {
                      state = STATE.NORMAL;
                  }
              } else if (char === ' ') {
                  if (currentTag === 'td') {
                      state = STATE.TAG_ATTRS;
                  } else {
                      state = STATE.NORMAL;
                  }
              } else {
                  currentTag += char;
              }
              result += char;
              break;

          case STATE.TAG_ATTRS:
              if (char === '>') {
                  state = STATE.TD_CONTENT;
                  tdContent = '';
              }
              result += char;
              break;

          case STATE.TD_CONTENT:
              if (char === '<' && html.substring(i, i + 4) === '</td') {
                  result = result + '\n\n' + tdContent + '\n\n<';
                  state = STATE.NORMAL;
              } else {
                  tdContent += char;
              }
              break;
      }
      i++;
  }

  return result;
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



const result = await splitMarkdown(fs.readFileSync('.vitepress/p1.md', 'utf8'), './');