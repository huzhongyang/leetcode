/**
 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

 请实现 KthLargest 类：


 KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
 int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。




 示例：


 输入：
 ["KthLargest", "add", "add", "add", "add", "add"]
 [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 输出：
 [null, 4, 5, 5, 8, 8]

 解释：
 KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 kthLargest.add(3);   // return 4
 kthLargest.add(5);   // return 5
 kthLargest.add(10);  // return 5
 kthLargest.add(9);   // return 8
 kthLargest.add(4);   // return 8




 提示：


 1 <= k <= 10⁴
 0 <= nums.length <= 10⁴
 -10⁴ <= nums[i] <= 10⁴
 -10⁴ <= val <= 10⁴
 最多调用 add 方法 10⁴ 次
 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素





 注意：本题与主站 703 题相同： https://leetcode-cn.com/problems/kth-largest-element-in-a-
 stream/

 Related Topics 树 设计 二叉搜索树 二叉树 数据流 堆（优先队列） 👍 40 👎 0

 */

//leetcode submit region begin(Prohibit modification and deletion)
class KthLargest {
    #kthLargest = []
    readonly #k

    constructor(k: number, nums: number[]) {
        this.#k = k
        for (const num of nums) {
            if (this.#kthLargest.length < k) {
                if (this.#kthLargest.length === 0) {
                    this.#kthLargest.push(num)
                } else {
                    if (this.#kthLargest[0] >= num) {
                        this.#kthLargest.unshift(num)
                    } else if (this.#kthLargest.at(-1) <= num) {
                        this.#kthLargest.push(num)
                    } else {
                        this.#kthLargest.splice(this.#binarySearch(num) + 1, 0, num)
                    }
                }
            } else {
                if (this.#kthLargest[0] <= num && this.#kthLargest.at(-1) > num) {
                    this.#kthLargest.splice(this.#binarySearch(num) + 1, 0, num)
                    this.#kthLargest.shift()
                } else if (this.#kthLargest.at(-1) <= num) {
                    this.#kthLargest.push(num)
                    this.#kthLargest.shift()
                }
            }
        }
    }

    add(val: number): number {
        if (this.#kthLargest.length < this.#k) {
            this.#kthLargest.splice(this.#binarySearch(val) + 1, 0, val)
        } else {
            if (this.#kthLargest[0] <= val && this.#kthLargest.at(-1) > val) {
                this.#kthLargest.splice(this.#binarySearch(val) + 1, 0, val)
                this.#kthLargest.shift()
            } else if (this.#kthLargest.at(-1) <= val) {
                this.#kthLargest.push(val)
                this.#kthLargest.shift()
            }
        }
        return this.#kthLargest[0]
    }

    #binarySearch(val: number): number {
        let left = 0,
            right = this.#kthLargest.length - 1
        while (left <= right) {
            let mid = left + Math.floor(right - left >> 1)
            this.#kthLargest[mid] > val ?
            right = mid - 1 :
            left = mid + 1
        }
        return right
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
//leetcode submit region end(Prohibit modification and deletion)

// const k = new KthLargest(3, [4, 5, 8, 2])
// console.log(k.add(3))
// console.log(k.add(5))
// console.log(k.add(10))
// console.log(k.add(9))
// console.log(k.add(4))
// const k2 = new KthLargest(1, [])
// console.log(k2.add(-3))
// console.log(k2.add(-2))
// console.log(k2.add(-4))
// console.log(k2.add(0))
// console.log(k2.add(4))
// const k3 = new KthLargest(2, [0])
// console.log(k3.add(-1))
// console.log(k3.add(1))
// console.log(k3.add(-2))
// console.log(k3.add(-4))
// console.log(k3.add(3))
const k4 = new KthLargest(3, [1, 1])
console.log(k4.add(1))
console.log(k4.add(1))
console.log(k4.add(3))
console.log(k4.add(3))
console.log(k4.add(3))
console.log(k4.add(4))
console.log(k4.add(4))
console.log(k4.add(4))
