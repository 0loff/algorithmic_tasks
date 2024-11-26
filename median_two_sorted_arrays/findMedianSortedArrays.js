/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = 0
    let mid = 0
    let isEven = true

    let arr = nums1.concat(nums2)
    arr = arr.sort((a, b) => a - b)

    isEven = arr.length % 2 === 0
    mid = arr.length / 2

    res = isEven
        ? (arr[mid] + arr[mid - 1]) / 2
        : arr[parseInt(mid)]

    return parseFloat(res.toFixed(6))
};

module.exports = findMedianSortedArrays