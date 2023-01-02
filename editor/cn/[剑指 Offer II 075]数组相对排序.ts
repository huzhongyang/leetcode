/**
 给定两个数组，arr1 和 arr2，


 arr2 中的元素各不相同
 arr2 中的每个元素都出现在 arr1 中


 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。




 示例：


 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 输出：[2,2,2,1,4,3,3,9,6,7,19]




 提示：


 1 <= arr1.length, arr2.length <= 1000
 0 <= arr1[i], arr2[i] <= 1000
 arr2 中的元素 arr2[i] 各不相同
 arr2 中的每个元素 arr2[i] 都出现在 arr1 中





 注意：本题与主站 1122 题相同：https://leetcode-cn.com/problems/relative-sort-array/

 Related Topics 数组 哈希表 计数排序 排序 👍 42 👎 0

 */

//leetcode submit region begin(Prohibit modification and deletion)
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const hash = new Map()
    for (const num1 of arr1) {
        if (hash.has(num1)) {
            hash.set(num1, hash.get(num1) + 1)
        } else {
            hash.set(num1, 1)
        }
    }
    const res = []
    for (const num2 of arr2) {
        for (let i = 0, len = hash.get(num2); i < len; i++) {
            res.push(num2)
        }
        hash.delete(num2)
    }
    for (const num3 of Array.from(hash.keys()).sort((a, b) => a - b)) {
        for (let i = 0, len = hash.get(num3); i < len; i++) {
            res.push(num3)
        }
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
