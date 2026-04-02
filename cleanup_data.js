// 修复 data.js 中的语法错误

const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

// 备份
fs.writeFileSync('data.js.backup3', content);

// 模式：在 grades 的 } 后面有多余的 ], 和 ]
content = content.replace(
  /"grades": \{[^}]*\},\s*\],\s*\]\s*,?\s*}/g,
  (match) => {
    return match.replace(/,\s*\],\s*\]\s*,?\s*\}/, '\n    }');
  }
);

// 删除单独的 ], 和 ] 行
content = content.replace(/^\s*\],?\s*$/gm, '');

// 保存
fs.writeFileSync('data.js', content, 'utf8');
console.log('✓ 已清理语法错误');
