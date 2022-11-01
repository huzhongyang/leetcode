//给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。 
//
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。 
//
// 
//
// 示例1: 
//
// 
//输入: pattern = "abba", s = "dog cat cat dog"
//输出: true 
//
// 示例 2: 
//
// 
//输入:pattern = "abba", s = "dog cat cat fish"
//输出: false 
//
// 示例 3: 
//
// 
//输入: pattern = "aaaa", s = "dog cat cat dog"
//输出: false 
//
// 
//
// 提示: 
//
// 
// 1 <= pattern.length <= 300 
// pattern 只包含小写英文字母 
// 1 <= s.length <= 3000 
// s 只包含小写英文字母和 ' ' 
// s 不包含 任何前导或尾随对空格 
// s 中每个单词都被 单个空格 分隔 
// 
//
// Related Topics 哈希表 字符串 👍 513 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function wordPattern(pattern: string, s: string): boolean {
    return parseToNumberStr(pattern, 'pattern') === parseToNumberStr(s, 's')
}

function parseToNumberStr(source: string, type: 'pattern' | 's'): string {
    let target: string | string[]
    const hash = []
    let flag = 1
    switch (type) {
        case 'pattern':
            target = source
            for (const item of source) {
                if (!(item in hash)) {
                    hash.push(item)
                    const regExp = new RegExp(`${item}`, 'g')
                    target = target.replace(regExp, `${flag}`)
                    flag += 1
                }
            }
            break
        case 's':
            target = source.split(' ')
            for (const item of source.split(' ')) {
                if (!(item in hash)) {
                    hash.push(item)
                    while (target.indexOf(item) !== -1) {
                        target.splice(target.indexOf(item), 1, `${flag}`)
                    }
                    flag += 1
                }
            }
            break
    }
    if (type === 's') target = (target as []).join('')
    console.log(target)
    return target as string
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(wordPattern('syys', 'a abc abc a'))
