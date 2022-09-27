//给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。 
//
// 示例 1： 
//
// 输入: s1 = "abc", s2 = "bca"
//输出: true 
// 
//
// 示例 2： 
//
// 输入: s1 = "abc", s2 = "bad"
//输出: false
// 
//
// 说明： 
//
// 
// 0 <= len(s1) <= 100 
// 0 <= len(s2) <= 100 
// 
//
// Related Topics 哈希表 字符串 排序 👍 103 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function CheckPermutation(s1: string, s2: string): boolean {
    s2 = s2.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString()
    s1 = s1.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString()
    return s1 === s2
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(CheckPermutation('abc', 'bca'))
console.log(CheckPermutation('abc', 'bad'))
