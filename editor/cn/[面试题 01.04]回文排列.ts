/**
 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
 
 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
 
 回文串不一定是字典当中的单词。
 
 
 
 示例1：
 
 输入："tactcoa"
 输出：true（排列有"tacocat"、"atcocta"，等等）
 
 
 
 
 Related Topics 位运算 哈希表 字符串 👍 104 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function canPermutePalindrome(s: string): boolean {
    const hash = new Map()
    for (const char of s) {
        if (!hash.has(char)) {
            hash.set(char, 1)
        } else {
            hash.set(char, hash.get(char) + 1)
        }
    }
    let odd = 0
    for (const value of hash.values()) {
        if (value % 2 === 1) odd += 1
        if (odd > 1) return false
    }
    return true
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(canPermutePalindrome('tactcoa'))
console.log(canPermutePalindrome('cw'))
