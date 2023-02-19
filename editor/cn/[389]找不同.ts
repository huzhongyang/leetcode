/**
 给定两个字符串 s 和 t ，它们只包含小写字母。
 
 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 
 请找出在 t 中被添加的字母。
 
 
 
 示例 1：
 
 
 输入：s = "abcd", t = "abcde"
 输出："e"
 解释：'e' 是那个被添加的字母。
 
 
 示例 2：
 
 
 输入：s = "", t = "y"
 输出："y"
 
 
 
 
 提示：
 
 
 0 <= s.length <= 1000
 t.length == s.length + 1
 s 和 t 只包含小写字母
 
 
 Related Topics 位运算 哈希表 字符串 排序 👍 380 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function findTheDifference(s: string, t: string): string {
    const countHash = new Map<string, number>()
    for (const char of s) {
        countHash.set(char,
            countHash.has(char)
            ? countHash.get(char) + 1
            : 1)
    }
    for (const char of t) {
        const count = countHash.get(char)
        if (count === 0 || count === undefined) {
            return char
        } else {
            countHash.set(char, count - 1)
        }
    }
}

//leetcode submit region end(Prohibit modification and deletion)

// console.log(findTheDifference('abcd', 'abcde'))
// console.log(findTheDifference('', 'y'))
console.log(findTheDifference('abcd', 'abcdd'))
