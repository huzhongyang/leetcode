//请你编写一个程序来计算两个日期之间隔了多少天。
//
// 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。
//
//
//
// 示例 1：
//
// 输入：date1 = "2019-06-29", date2 = "2019-06-30"
//输出：1
//
//
// 示例 2：
//
// 输入：date1 = "2020-01-15", date2 = "2019-12-31"
//输出：15
//
//
//
//
// 提示：
//
//
// 给定的日期是 1971 年到 2100 年之间的有效日期。
//
// Related Topics 数学 字符串 👍 47 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function (date1, date2) {
    const dif = new Date(date2) - new Date(date1)
    console.log(dif / 60 / 60 / 60 / 1000)
    return 0
}
//leetcode submit region end(Prohibit modification and deletion)

daysBetweenDates('2019-06-29', '2019-06-30')
console.log(new Date('2019-06-29'))
console.log(new Date('2019/06/29'))
