/**
 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 
 请你返回字符串 s 的 能量。
 
 
 
 示例 1：
 
 
 输入：s = "leetcode"
 输出：2
 解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
 
 
 示例 2：
 
 
 输入：s = "abbcccddddeeeeedcba"
 输出：5
 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
 
 
 
 
 提示：
 
 
 1 <= s.length <= 500
 s 只包含小写英文字母。
 
 
 Related Topics 字符串 👍 109 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function maxPower(s: string): number {
    let max     = 0,
        count   = 0,
        current = ''
    for (const char of s) {
        if (char === current) {
            count += 1
        } else {
            count > max && (max = count)
            count = 1
            current = char
        }
    }
    return count > max ? count : max
}

//leetcode submit region end(Prohibit modification and deletion)
