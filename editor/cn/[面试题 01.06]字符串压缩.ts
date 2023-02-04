/**
 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变
 短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 
 示例1:
 
 
 输入："aabcccccaaa"
 输出："a2b1c5a3"
 
 
 示例2:
 
 
 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
 
 
 提示：
 
 
 字符串长度在[0, 50000]范围内。
 
 
 Related Topics 双指针 字符串 👍 157 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function compressString(S: string): string {
    let res     = S.charAt(0),
        count   = 0,
        preChar = S.charAt(0)
    for (const char of S) {
        if (char === preChar) {
            count += 1
        } else {
            preChar = char
            res += count + preChar
            count = 1
        }
    }
    res += count
    return res.length < S.length ? res : S
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(compressString('aabcccccaaa'))
console.log(compressString('abbccd'))
console.log(compressString('bb'))
