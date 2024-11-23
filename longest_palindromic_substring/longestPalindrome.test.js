const longestPalindrome = require('./longestPalindrome')

test('Get palindrome 1', () => {
    expect(longestPalindrome('babad')).toBe('bab');
})

test('Get palindrome 2', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
})

test('Get palindrome 3', () => {
    expect(longestPalindrome('ab')).toBe('a');
})

test('Get palindrome 4', () => {
    expect(longestPalindrome('a')).toBe('a');
})

test('Get palindrome 5', () => {
    expect(longestPalindrome('')).toBe('');
})

test('Get palindrome 6', () => {
    expect(longestPalindrome('aaaa')).toBe('aaaa');
})

test('Get palindrome 7', () => {
    expect(longestPalindrome('abcba')).toBe('abcba');
})

test('Get palindrome 8', () => {
    expect(longestPalindrome('bcacbdb')).toBe('bcacb');
})

test('Get palindrome 9', () => {
    expect(longestPalindrome('caaaaa')).toBe('aaaaa');
})

test('Get palindrome 10', () => {
    expect(longestPalindrome('aacabdkacaa')).toBe('aca');
})

test('Get palindrome 11', () => {
    expect(longestPalindrome('xaabacxcabaaxcabaax')).toBe('xaabacxcabaax');
})

// // 119 / 142
test('Get palindrome 12', () => {
    expect(longestPalindrome('babaddtattarrattatddetartrateedredividerb')).toBe('ddtattarrattatdd');
})

test('Get palindrome 13', () => {
    expect(longestPalindrome('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')).toBe('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc');
})