function mergeIntervals(intervals) {
    if (intervals.length < 2) {
        return intervals
    }

    intervals.sort((a, b) => a[0] - b[0])

    let index = 0
    let result = [intervals[0]]

    while(index < intervals.length) {
        if (result[result.length - 1][result[result.length - 1].length - 1] >= intervals[index][0]) {
            if (result[result.length - 1][0] > intervals[index][0]) {
                result[result.length - 1][0] = intervals[index][0]
            }

            if (result[result.length - 1][result[result.length - 1].length - 1] < intervals[index][intervals[index].length - 1]) {
                result[result.length - 1][result[result.length - 1].length - 1] = intervals[index][intervals[index].length - 1]
            }
        } else {
            result.push(intervals[index])
        }

        ++index
    }

    return result
}

module.exports = mergeIntervals;