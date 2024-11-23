/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (!s.length) {
        return ''
    }

    if (isSinglePalindrome(s)) {
        return s
    }

    let longest = ''
    let i = 0

    while(i < s.length) {
        let current = getLongestPalindrome(s, i, i) // longest odd palindrome
        if (longest.length < current.length) {
            longest = current
        }

        current = getLongestPalindrome(s, i, i + 1) // longest even palindrome
        if (longest.length < current.length) {
            longest = current
        }
    
        i++
    }

    return longest
};

function getLongestPalindrome(str, start, end) {
    let longest = ''

    while(str[start] === str[end] && end < str.length) {
        if (str.slice(start, end + 1).length > longest.length) {
            longest = str.slice(start, end + 1)
        }

        start--
        end++
    }

    return longest;
}

function isSinglePalindrome(s) {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        if (s[start] !== s[end]) {
            return false
        }

        start++
        end--
    }

    return true
}

module.exports = longestPalindrome