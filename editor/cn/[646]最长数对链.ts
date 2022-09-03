//给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。 
//
// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。 
//
// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。 
//
// 
//
// 示例： 
//
// 
//输入：[[1,2], [2,3], [3,4]]
//输出：2
//解释：最长的数对链是 [1,2] -> [3,4]
// 
//
// 
//
// 提示： 
//
// 
// 给出数对的个数在 [1, 1000] 范围内。 
// 
//
// Related Topics 贪心 数组 动态规划 排序 👍 315 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function findLongestChain(pairs: number[][]): number {
    let maxLength = 0
    pairs.sort((a, b) => a[1] - b[1])
    let current = Number.MIN_SAFE_INTEGER
    for (const pair of pairs) {
        if (current < pair[0]) {
            current = pair[1]
            maxLength += 1
        }
    }
    return maxLength
}

//leetcode submit region end(Prohibit modification and deletion)
// console.log(findLongestChain([[3, 4], [2, 3], [1, 2]]) === 2)
// console.log(findLongestChain([[-10, -8], [8, 9], [-5, 0], [6, 10], [-6, -4], [1, 7], [9, 10], [-4, 7]]) === 4)
console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]))
