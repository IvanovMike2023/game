import { SamuraiNumberUtility } from './samurai-number-utility.js';

describe('SamuraiNumberUtility', () => {
    let samuraiUtility;

    beforeEach(() => {
        samuraiUtility = new SamuraiNumberUtility();
    });

    test('should throw an error if fromInclusive is greater than or equal to toExclusive', () => {
        expect(() => samuraiUtility.getRandomInteger(5, 5)).toThrow('The "fromInclusive" value must be less than "toExclusive".');
        expect(() => samuraiUtility.getRandomInteger(10, 5)).toThrow('The "fromInclusive" value must be less than "toExclusive".');
    });

    test('should return a value between fromInclusive and toExclusive-1', () => {
        const randomValue = samuraiUtility.getRandomInteger(1, 10);
        expect(randomValue).toBeGreaterThanOrEqual(1);
        expect(randomValue).toBeLessThan(10);
    });

    test('should work with very small range (e.g., fromInclusive = 1, toExclusive = 2)', () => {
        const randomValue = samuraiUtility.getRandomInteger(1, 2);
        expect(randomValue).toBe(1);  // Should always return 1 because it's the only possible value
    });

    test('should handle a range with only one possible value', () => {
        const randomValue = samuraiUtility.getRandomInteger(100, 101);
        expect(randomValue).toBe(100);  // Should always return 100
    });

    test('should handle negative ranges correctly', () => {
        const randomValue = samuraiUtility.getRandomInteger(-10, -5);
        expect(randomValue).toBeGreaterThanOrEqual(-10);
        expect(randomValue).toBeLessThan(-5);
    });

    test('should return random value for large ranges', () => {
        const randomValue = samuraiUtility.getRandomInteger(1, 1000000);
        expect(randomValue).toBeGreaterThanOrEqual(1);
        expect(randomValue).toBeLessThan(1000000);
    });

    test('should return the correct result when the range is 0 to 1', () => {
        const randomValue = samuraiUtility.getRandomInteger(0, 1);
        expect(randomValue).toBe(0);  // Since the range is [0, 1), the only possible value is 0
    });
    test('should return the correct result when the range is 5 to 6', () => {
            const from = 5;
            const to = 6;
        const randomValue = samuraiUtility.getRandomInteger(from, to);
        expect(randomValue).toBe(from);  // Since the range is [0, 1), the only possible value is 0
    });

    test('should generate different values on multiple calls', () => {
        const results = new Set();
        for (let i = 0; i < 1000; i++) {
            results.add(samuraiUtility.getRandomInteger(1, 10));
        }
        // There should be at least 1, 2, 3, ..., 9 in the results, so we expect the size of the set to be at least 9
        expect(results.size).toBeGreaterThanOrEqual(9);
    });
});
