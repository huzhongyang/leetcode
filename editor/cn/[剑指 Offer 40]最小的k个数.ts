//输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。 
//
// 
//
// 示例 1： 
//
// 输入：arr = [3,2,1], k = 2
//输出：[1,2] 或者 [2,1]
// 
//
// 示例 2： 
//
// 输入：arr = [0,1,2,1], k = 1
//输出：[0] 
//
// 
//
// 限制： 
//
// 
// 0 <= k <= arr.length <= 10000 
// 0 <= arr[i] <= 10000 
// 
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 500 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function getLeastNumbers(arr: number[], k: number): number[] {
    return sorted(arr).slice(0, k)
}

function sorted(arr: number[]): number[] {
    if (arr.length < 2) return arr
    const flag = arr[0]
    const left  = [],
          right = []
    for (const num of arr.slice(1)) {
        num < flag
        ? left.push(num)
        : right.push(num)
    }
    return sorted(left).concat(flag, sorted(right))
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(sorted([1, 3, 2, 4, 6, 7, 1, 2]))
