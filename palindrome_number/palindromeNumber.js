/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindromeNumber(x) {
    if (x < 0) {
        return false
    }

    x = x.toString()

    let start = 0
    let end = x.length - 1

    while(start <= end) {
        if (x[start] != x[end]) {
            return false
        }

        start++
        end--
    }

    return true
}

module.exports = isPalindromeNumber