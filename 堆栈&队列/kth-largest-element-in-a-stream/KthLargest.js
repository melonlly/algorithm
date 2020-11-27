/*
    维护一个长度为 k 的最大值数组
        1.初始化时，在传入的数值中找出最大的k个值
        2.对最大值数组降序排序（最大值在前，最小值在后）
        3.新值进入时，将该值与最大值数组中的最小值比较
            3.1 新值 ≤ 最小值，则当前第k大值为最小值
            3.2 新值 > 最小值，推出最小值，最大值数组重新排序，则当前第k大值为新数组的最小值
    
    Array.sort() 是基于原地算法实现
    快速排序算法几乎是目前所有排序算法最快的一种
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.max = [];
    nums.sort((a, b) => b - a); // 降序
    for (let i = 0; i < nums.length; i++) {
        if (this.max.length === k) {
            break
        }
        this.max.push(nums[i]);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.max.push(val);
    this.max.sort((a, b) => b - a); // 降序
    if (this.max.length > this.k) {
        this.max.pop();
    }
    return this.max[this.max.length - 1];
};
