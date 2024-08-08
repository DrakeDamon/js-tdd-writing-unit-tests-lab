import { isPalindrome } from '../utils';

test('returns true for a palindrome word', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('returns false for a non-palindrome word', () => {
  expect(isPalindrome('car')).toBe(false);
});

test('returns true for a palindrome sentence with spaces and punctuation', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});

test('returns true for a palindrome with different cases', () => {
  expect(isPalindrome('RaceCar')).toBe(true);
});

test('returns true for an empty string', () => {
  expect(isPalindrome('')).toBe(true);
});
