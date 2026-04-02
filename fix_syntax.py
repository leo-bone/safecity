#!/usr/bin/env python3
import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 删除连续的空数组括号
content = re.sub(r'\s*\],\s*\]\s*,\s*', '],\n', content)

# 修复多个连续的右括号
content = re.sub(r'\s*\]\s*\]\s*,?\s*\}', ']\n    }', content)

# 删除多余的空括号
content = re.sub(r'\s*\[\s*\]\s*,?\s*', '', content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('已修复语法错误')
