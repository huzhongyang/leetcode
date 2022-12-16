//给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。 
//
// 本题中，将空字符串定义为有效的 回文串 。 
//
// 
//
// 示例 1: 
//
// 
//输入: s = "A man, a plan, a canal: Panama"
//输出: true
//解释："amanaplanacanalpanama" 是回文串 
//
// 示例 2: 
//
// 
//输入: s = "race a car"
//输出: false
//解释："raceacar" 不是回文串 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 2 * 10⁵ 
// 字符串 s 由 ASCII 字符组成 
// 
//
// 
//
// 
// 注意：本题与主站 125 题相同： https://leetcode-cn.com/problems/valid-palindrome/ 
//
// Related Topics 双指针 字符串 👍 37 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    let [left, right] = [0, s.length - 1]
    let flag = true
    while (left <= right && flag) {
        while (s[left] === ' ' || !/[a-z0-9]/.test(s[left])) {
            left += 1
        }
        while (s[right] === ' ' || !/[a-z0-9]/.test(s[right])) {
            right -= 1
        }
        if (s[left] === s[right]) {
            left += 1
            right -= 1
        } else {
            flag = !flag
        }
    }
    return flag
}

//leetcode submit region end(Prohibit modification and deletion)
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('0P'))
