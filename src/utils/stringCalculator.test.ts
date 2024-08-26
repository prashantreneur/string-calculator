import { add } from './stringCalculator';

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(add('5')).toBe(5);
});

test('returns the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('handles new lines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('throws error for negative numbers', () => {
  expect(() => add('1,-2')).toThrow('Negative numbers not allowed: -2');
});

test('handles new lines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('4\n5\n6')).toBe(15);
  expect(add('7,8\n9')).toBe(24);
});

test('supports custom delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//|\n4|5|6')).toBe(15);
  expect(add('//#\n7#8#9')).toBe(24);
});

test('handles custom delimiters with new lines', () => {
  expect(add('//;\n1;2\n3')).toBe(6);
  expect(add('//|\n4|5\n6')).toBe(15);
  expect(add('//#\n7#8\n9')).toBe(24);
});

