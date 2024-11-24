/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let pattern = new RegExp('^' + p)
    let submatches = s.match(pattern)

    return submatches != null
        ? submatches[0] === s
        : false
};

module.exports = isMatch