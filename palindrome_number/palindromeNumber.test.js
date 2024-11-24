const isPalindromeNumber = require('./palindromeNumber')

test('Is palindrome number test 1', () => {
    expect(isPalindromeNumber(121)).toBeTruthy();
})

test('Is palindrome number test 2', () => {
    expect(isPalindromeNumber(-121)).toBeFalsy();
})

test('Is palindrome number test 3', () => {
    expect(isPalindromeNumber(10)).toBeFalsy();
})