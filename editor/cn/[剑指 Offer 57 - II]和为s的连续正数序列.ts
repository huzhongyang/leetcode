//输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。 
//
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。 
//
// 
//
// 示例 1： 
//
// 输入：target = 9
//输出：[[2,3,4],[4,5]]
// 
//
// 示例 2： 
//
// 输入：target = 15
//输出：[[1,2,3,4,5],[4,5,6],[7,8]]
// 
//
// 
//
// 限制： 
//
// 
// 1 <= target <= 10^5 
// 
//
// 
//
// Related Topics 数学 双指针 枚举 👍 493 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
function findContinuousSequence(target: number): number[][] {
    const end = Math.ceil(target >> 1)
    let star = 1
    const res = []
    while (star <= end) {
        let sum = star,
            left = star
        const temp = []
        while (sum <= target) {
            temp.push(left)
            left += 1
            sum += left
            if (sum === target) {
                res.push(temp)
            }
        }
        star += 1
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

findContinuousSequence(9)
findContinuousSequence(15)
