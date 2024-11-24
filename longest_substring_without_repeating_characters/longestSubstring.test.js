const lengthOfLongestSubstring = require('./longestSubstring')

test('Get longest substring length test 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

test('Get longest substring length test 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

test('Get longest substring length test 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})

test('Get longest substring length test 4', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1)
})

test('Get longest substring length test 5', () => {
    expect(lengthOfLongestSubstring('p')).toBe(1)
})

test('Get longest substring length test 6', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})