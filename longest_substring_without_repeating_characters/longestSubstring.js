/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    if (!s.length) {
        return 0
    }

    let start = 0
    let end = 0
    let result = 0

    while(end < s.length) {
        let current = s.slice(start, end)

        if (current.includes(s[end])) {
            if (result < current.length) {
                result = current.length
            }
            start++
        } else {
            end++
        }

        if (s[end] === undefined) {
            if (result < s.slice(start, end).length) {
                result = s.slice(start, end).length
            }
        }
    }
    
    return result
}

module.exports = lengthOfLongestSubstring