const merge = require("./merge");

test('interval absorption 1', () => {
    expect(merge([[1, 3],[2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]]);
})

test('adjacent intervals', () => {
    expect(merge([[1, 4],[4, 5]])).toStrictEqual([[1, 5]]);
})

test('incoming interval', () => {
    expect(merge([[1, 4],[0, 4]])).toStrictEqual([[0, 4]]);
})

test('reversed intervals 1', () => {
    expect(merge([[1, 4],[0, 1]])).toStrictEqual([[0, 4]]);
})

test('reversed intervals 2', () => {
    expect(merge([[1, 4],[0, 0]])).toStrictEqual([[0, 0], [1, 4]]);
})

test('reversed intervals 2', () => {
    expect(merge([[1, 4],[0, 0]])).toStrictEqual([[0, 0], [1, 4]]);
})

test('interval absorption 2', () => {
    expect(merge([[1, 4],[1, 5]])).toStrictEqual([[1, 5]]);
})

test('interval absorption 3', () => {
    expect(merge([[1, 4],[0, 4]])).toStrictEqual([[0, 4]]);
})

test('multiple intervals', () => {
    expect(merge([[11, 12],[2, 3],[5, 7],[1, 4],[8, 10], [6, 8]])).toStrictEqual([[1, 4],[5, 10],[11, 12]]);
})