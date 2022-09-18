//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个
//整数，判断数组中是否含有该整数。 
//
// 
//
// 示例: 
//
// 现有矩阵 matrix 如下： 
//
// 
//[
//  [1,   4,  7, 11, 15],
//  [2,   5,  8, 12, 19],
//  [3,   6,  9, 16, 22],
//  [10, 13, 14, 17, 24],
//  [18, 21, 23, 26, 30]
//]
// 
//
// 给定 target = 5，返回 true。 
//
// 给定 target = 20，返回 false。 
//
// 
//
// 限制： 
//
// 0 <= n <= 1000 
//
// 0 <= m <= 1000 
//
// 
//
// 注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/ 
//
// Related Topics 数组 二分查找 分治 矩阵 👍 791 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    // if (matrix.length === 0) return false
    // for (let i = 0, len = matrix.length; i < len; i++) {
    //     for (const sub of matrix[i]) {
    //         if (sub === target) return true
    //     }
    // }
    // return false
    
    // 从右上开始
    if (matrix.length === 0 || matrix[0].length === 0) return false
    const row = matrix.length - 1,
        column = matrix[0].length - 1
    let i = column, j = 0
    while (i >= 0 && j <= row) {
        if (matrix[j][i] > target) i--
        else if (matrix[j][i] < target) j++
        else if (matrix[j][i] === target) return true
    }
    return false
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]], 20))

console.log(findNumberIn2DArray([
    [5],
    [6]], 5))

console.log(findNumberIn2DArray([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]],
    19))
