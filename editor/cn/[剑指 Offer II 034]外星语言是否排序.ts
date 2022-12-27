/**
 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。




 示例 1：


 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 输出：true
 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。

 示例 2：


 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 输出：false
 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。

 示例 3：


 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 输出：false
 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是
 空白字符，定义为比任何其他字符都小（更多信息）。




 提示：


 1 <= words.length <= 100
 1 <= words[i].length <= 20
 order.length == 26
 在 words[i] 和 order 中的所有字符都是英文小写字母。





 注意：本题与主站 953 题相同： https://leetcode-cn.com/problems/verifying-an-alien-
 dictionary/

 Related Topics 数组 哈希表 字符串 👍 34 👎 0

 */

//leetcode submit region begin(Prohibit modification and deletion)
function isAlienSorted(words: string[], order: string): boolean {
    const hash = new Map()
    let index = 1
    for (const char of order) {
        hash.set(char, index)
        index += 1
    }
    let preWord = words[0],
        charIndex = 0,
        equal = false
    for (let i = 1, len = words.length; i < len; i++) {
        const minIndex = Math.min(preWord.length, words[i].length)
        while (charIndex <= minIndex) {
            if (preWord[charIndex] !== words[i][charIndex]) {
                if (hash.get(preWord[charIndex]) > hash.get(words[i][charIndex])) return false
                break
            }
            charIndex += 1
            if (charIndex === minIndex) equal = true
        }
        if (preWord.length > words[i].length && equal) return false
        charIndex = 0
        preWord = words[i]
    }
    return true
}

//leetcode submit region end(Prohibit modification and deletion)

// console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
// console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'))
// console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'))
// console.log(isAlienSorted(['kuvp', 'q'], 'ngxlkthsjuoqcpavbfdermiywz'))
console.log(isAlienSorted(['apap', 'app'], 'abcdefghijklmnopqrstuvwxyz'))
