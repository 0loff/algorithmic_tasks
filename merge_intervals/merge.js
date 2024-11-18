function mergeIntervals(intervals) {
    if (intervals.length < 2) {
        return intervals
    }

    intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let interval of intervals) {
        let prev = result[result.length - 1]

        if (prev[prev.length - 1] >= interval[0]) {
            prev[0] = Math.min(prev[0], interval[0])
            prev[prev.length - 1] = Math.max(prev[prev.length - 1], interval[interval.length - 1])
        } else {
            result.push(interval)
        }
    }

    return result
}

module.exports = mergeIntervals;