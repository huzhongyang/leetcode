//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。 
//
// 示例 1: 
//
// 
//输入：s = "abaccdeff"
//输出：'b'
// 
//
// 示例 2: 
//
// 
//输入：s = "" 
//输出：' '
// 
//
// 
//
// 限制： 
//
// 0 <= s 的长度 <= 50000 
//
// Related Topics 队列 哈希表 字符串 计数 👍 275 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function firstUniqChar(s: string): string {
    const hash = new Map()
    for (const i in s.split('')) {
        if (hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1)
        } else {
            hash.set(s[i], 1)
        }
    }
    for (const [char, count] of hash.entries()) {
        if (count === 1) {
            return char
        }
    }
    return ' '
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(firstUniqChar('abaccdeff'))
console.log(firstUniqChar('a'))
console.log(firstUniqChar('aabb'))
console.log(firstUniqChar(''))
