//给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。 
//
// 
//
// 示例 1： 
//
// 输入：n = 987
//输出："987"
// 
//
// 示例 2： 
//
// 输入：n = 1234
//输出："1.234"
// 
//
// 示例 3： 
//
// 输入：n = 123456789
//输出："123.456.789"
// 
//
// 示例 4： 
//
// 输入：n = 0
//输出："0"
// 
//
// 
//
// 提示： 
//
// 
// 0 <= n < 2^31 
// 
//
// Related Topics 字符串 👍 22 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function thousandSeparator(n: number): string {
    if (n < 1000) return n.toString()
    const res = []
    const len = String(n).length - 1
    let flag = 0
    for (let i = len; i >= 0; i--) {
        if (flag < 3) {
            flag += 1
            res.unshift(String(n)[i])
        } else {
            flag = 1
            res.unshift('.')
            res.unshift(String(n)[i])
        }
    }
    return res.join('')
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(thousandSeparator(987))
console.log(thousandSeparator(9872))
console.log(thousandSeparator(1234567890))
