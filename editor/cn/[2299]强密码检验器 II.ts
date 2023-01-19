/**
 如果一个密码满足以下所有条件，我们称它是一个 强 密码：
 
 
 它有至少 8 个字符。
 至少包含 一个小写英文 字母。
 至少包含 一个大写英文 字母。
 至少包含 一个数字 。
 至少包含 一个特殊字符 。特殊字符为："!@#$%^&*()-+" 中的一个。
 它 不 包含 2 个连续相同的字符（比方说 "aab" 不符合该条件，但是 "aba" 符合该条件）。
 
 
 给你一个字符串 password ，如果它是一个 强 密码，返回 true，否则返回 false 。
 
 
 
 示例 1：
 
 输入：password = "IloveLe3tcode!"
 输出：true
 解释：密码满足所有的要求，所以我们返回 true 。
 
 
 示例 2：
 
 输入：password = "Me+You--IsMyDream"
 输出：false
 解释：密码不包含数字，且包含 2 个连续相同的字符。所以我们返回 false 。
 
 
 示例 3：
 
 输入：password = "1aB!"
 输出：false
 解释：密码不符合长度要求。所以我们返回 false 。
 
 
 
 提示：
 
 
 1 <= password.length <= 100
 password 包含字母，数字和 "!@#$%^&*()-+" 这些特殊字符。
 
 
 Related Topics 字符串 👍 32 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function strongPasswordCheckerII(password: string): boolean {
    if (password.length < 8) return false
    const info = {
        lowerChar: 0,
        upperChar: 0,
        number: 0,
        flag: 0,
    }
    let preChar = ''
    for (const char of password) {
        if (preChar === char) return false
        if (/[a-z]/.test(char)) {
            info.lowerChar += 1
        } else if (/[A-Z]/.test(char)) {
            info.upperChar += 1
        } else if (/[0-9]/.test(char)) {
            info.number += 1
        } else if (/[!@#$%^&*()\-+]/.test(char)) {
            info.flag += 1
        }
        preChar = char
    }
    return info.lowerChar !== 0 && info.upperChar !== 0 && info.flag !== 0 && info.number !== 0
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(strongPasswordCheckerII('IloveLe3tcode!'))
console.log(strongPasswordCheckerII('Me+You--IsMyDream'))
