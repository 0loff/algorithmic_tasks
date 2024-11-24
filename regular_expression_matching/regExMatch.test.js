const isMatch = require('./regExMatch')

test('Regular expression match 1', () => {
    expect(isMatch("aa", "a")).toBeFalsy();
})

test('Regular expression match 2', () => {
    expect(isMatch("aa", "a*")).toBeTruthy();
})

test('Regular expression match 3', () => {
    expect(isMatch("ab", ".*")).toBeTruthy();
})