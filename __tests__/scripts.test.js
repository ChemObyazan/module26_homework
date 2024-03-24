import * as a from '../scripts.js';

test('sum', () => {
    expect(a.sum(6, 4)).toBe(10);
});

test('sub', () => {
    expect(a.sub(10, 1)).toBe(9);
});

test('multiply', () => {
    expect(a.multiply(2, 4)).toBe(8);
});

test('divide', () => {
    expect(a.divide(14, 2)).toBe(7);
});


test('even', () => {
    expect(a.isEven(6)).toBe(true);
});

test('not even', () => {
    expect(a.isEven(5)).toBe(false);
});

test('not odd', () => {
    expect(a.isOdd(4)).toBe(false);
});

test('odd', () => {
    expect(a.isOdd(3)).toBe(true);
});


test('power', () => {
    expect(a.power(10, 0)).toBe(1);
});


test('square root', () => {
    expect(a.squareRoot(4)).toBe(2);
});


