//给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答
//案。
//
// 
//
// 示例 1： 
//
// 
//输入：words = ["bella","label","roller"]
//输出：["e","l","l"]
// 
//
// 示例 2： 
//
// 
//输入：words = ["cool","lock","cook"]
//输出：["c","o"]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= words.length <= 100 
// 1 <= words[i].length <= 100 
// words[i] 由小写英文字母组成 
// 
//
// Related Topics 数组 哈希表 字符串 👍 295 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function commonChars(words: string[]): string[] {
    const res = []
    words.sort((a, b) => a.length - b.length)
    const source = words.shift()
    for (const char of source) {
        let flag = true
        words = words.map((word) => {
            const index = word.indexOf(char)
            if (index !== -1) {
                return word.replace(char, '')
            } else {
                flag = false
                return word
            }
        })
        if (flag) res.push(char)
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(commonChars(['cool', 'lock', 'cook']))
