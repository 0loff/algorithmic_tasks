/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let i = 0
    let buffer = []

    while(i < s.length) {
        if (isOpened(s[i])) {
            buffer.push(s[i])
        }

        if (isClosed(s[i])) {
            if (buffer[buffer.length - 1] === mapper(s[i])) {
                buffer.pop()
            } else {
                return false
            }
        }

        i++
    }

    if (buffer.length) {
        return false
    }

    return true
};

function isOpened(s) {
    return ['(', '[', '{'].includes(s)
}

function isClosed(s) {
    return [')', ']', '}'].includes(s)
}

function mapper(s) {
    switch (s) {
        case ')': return '('        
        case ']': return '['        
        case '}': return '{'        
    }
}

module.exports = isValid