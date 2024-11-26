const findMedianSortedArrays = require('./findMedianSortedArrays')

test('Find median of sorted arrays test 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2.00000)
})

test('Find median of sorted arrays test 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toStrictEqual(2.50000)
})

test('Find median of sorted arrays test 3', () => {
    expect(findMedianSortedArrays([100000], [100001])).toStrictEqual(100000.50000)
})

test('Find median of sorted arrays test 4', () => {
    expect(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toStrictEqual(9.00000)
})