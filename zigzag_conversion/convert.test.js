const convert = require('./convert')

test('Zigzag conversion test 1', () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
})

test('Zigzag conversion test 2', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
})

test('Zigzag conversion test 3', () => {
    expect(convert('A', 1)).toBe('A')
})

test('Zigzag conversion test 4', () => {
    expect(convert('AB', 1)).toBe('AB')
})

test('Zigzag conversion test 5', () => {
    expect(convert('AB', 2)).toBe('AB')
})

test('Zigzag conversion test 6', () => {
    expect(convert('ABCD', 2)).toBe('ACBD')
})