import { expect } from 'expect';
import { sumToN, countVowels, reverseArray } from '../index.js';

describe('Loop Practice Tests', () => {
  // Test sumToN function
  describe('sumToN', () => {
    it('should return the correct sum for positive numbers', () => {
      expect(sumToN(5)).toBe(15);
      expect(sumToN(3)).toBe(6);
      expect(sumToN(1)).toBe(1);
    });

    it('should return 0 for input 0', () => {
      expect(sumToN(0)).toBe(0);
    });
  });

  // Test countVowels function
  describe('countVowels', () => {
    it('should correctly count vowels in lowercase strings', () => {
      expect(countVowels('hello')).toBe(2);
      expect(countVowels('javascript')).toBe(3);
      expect(countVowels('aeiou')).toBe(5);
    });

    it('should correctly count vowels in mixed case strings', () => {
      expect(countVowels('hEllO')).toBe(2);
      expect(countVowels('JAVASCRIPT')).toBe(3);
    });

    it('should return 0 for strings with no vowels', () => {
      expect(countVowels('rhythm')).toBe(0);
    });
  });

  // Test reverseArray function
  describe('reverseArray', () => {
    it('should reverse arrays of numbers', () => {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
      expect(reverseArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should reverse arrays of strings', () => {
      expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });

    it('should return empty array for empty input', () => {
      expect(reverseArray([])).toEqual([]);
    });
  });
}); 