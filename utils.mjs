export function formatTable(html) {
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
              if (char === '/' && html[i + 1] === '>') {
                  // 处理自闭合标签
                  state = STATE.NORMAL;
                  result += '/>';
                  i++;
                  break;
              } else if (char === '>') {
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


if (import.meta.url === `file://${process.argv[1]}`) {
// console.log( formatTable('<table><tr><td rowspan="2">$p > 0 0 < 0$</td><td>指数 $x$</td><td>幂 ${a}^{x}$</td></tr></table>'));
// console.log(formatTable('<table><tr><td colspan="2"/><td/><td>a</td></tr></table>'));
}