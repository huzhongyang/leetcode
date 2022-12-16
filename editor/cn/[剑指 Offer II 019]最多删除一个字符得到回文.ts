//给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。 
//
// 
//
// 示例 1: 
//
// 
//输入: s = "aba"
//输出: true
// 
//
// 示例 2: 
//
// 
//输入: s = "abca"
//输出: true
//解释: 可以删除 "c" 字符 或者 "b" 字符
// 
//
// 示例 3: 
//
// 
//输入: s = "abc"
//输出: false 
//
// 
//
// 提示: 
//
// 
// 1 <= s.length <= 10⁵ 
// s 由小写英文字母组成 
// 
//
// 
//
// 
// 注意：本题与主站 680 题相同： https://leetcode-cn.com/problems/valid-palindrome-ii/ 
//
// Related Topics 贪心 双指针 字符串 👍 57 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function validPalindrome(s: string): boolean {
    let [left, right] = [0, s.length - 1]
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return check(s.slice(left + 1, right + 1)) || check(s.slice(left, right))
        }
        right -= 1
        left += 1
    }
    return true
}

function check(s: string): boolean {
    let [left, right] = [0, s.length - 1]
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return false
        }
        left += 1
        right -= 1
    }
    return true
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
console.log(validPalindrome('abc'))
console.log(validPalindrome('eeccccbebaeeabebccceea'))
