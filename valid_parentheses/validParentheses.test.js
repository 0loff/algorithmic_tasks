const isValid = require('./validParentheses')

test('Valid parentheses test 1', () => {
    expect(isValid('()')).toBeTruthy()
})

test('Valid parentheses test 2', () => {
    expect(isValid('()[]{}')).toBeTruthy()
})

test('Valid parentheses test 3', () => {
    expect(isValid('(]')).toBeFalsy()
})

test('Valid parentheses test 4', () => {
    expect(isValid('([])')).toBeTruthy()
})

test('Valid parentheses test 1', () => {
    expect(isValid('((')).toBeFalsy()
})