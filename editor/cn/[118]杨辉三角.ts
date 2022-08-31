//给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
//
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
//
//
//
//
//
// 示例 1:
//
//
//输入: numRows = 5
//输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//
//
// 示例 2:
//
//
//输入: numRows = 1
//输出: [[1]]
//
//
//
//
// 提示:
//
//
// 1 <= numRows <= 30
//
//
// Related Topics 数组 动态规划 👍 828 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]
    if (numRows === 3) return [[1], [1, 1], [1, 2, 1]]
    const res: number[][] = [[1], [1, 1], [1, 2, 1]]
    for (let row = 3; row < numRows; row++) {
        res[row] = new Array(row + 1).fill(0)
        res[row][0] = 1
        res[row][row] = 1
        for (let i = 1; i < row; i++) {
            res[row][i] = res[row - 1][i - 1] + res[row - 1][i]
        }
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(generate(5))
