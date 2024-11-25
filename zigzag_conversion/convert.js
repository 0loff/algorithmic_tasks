const config = {
    direct: true,
    numRows: 0,
    currentRow: 0
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( !s.length ) {
        return s
    }

    config.direct = true
    config.numRows = numRows
    config.currentRow = 0

    let result = Array(numRows).fill('')
    let i = 0
    let row = 0

    while(i < s.length) {
        if (config.direct) {
            result[config.currentRow] = result[config.currentRow].concat(s[i])
            config.currentRow++     
        } else {            
            config.currentRow--    
            result[config.currentRow] = result[config.currentRow].concat(s[i])
        }

        handleDirection(config)

        i++
    }

    return result.join('')
};

function handleDirection(obj) {
    if (obj.direct && obj.currentRow === obj.numRows) {
        obj.direct = !obj.direct
        obj.currentRow--
    }

    if (!obj.direct && obj.currentRow < 2) {
        obj.direct = !obj.direct
        obj.currentRow = 0
    }
}

module.exports = convert