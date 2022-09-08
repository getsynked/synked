// jest spec file for ./number.ts

import { isFloat, isInteger, isPositive } from '../../lib/validators/number';

describe('number validators', () => {
    describe('isInteger', () => {
        it('should return true for an integer', () => {
            expect(isInteger(1, true).valid).toBe(true);
        });

        it('should return false for a float', () => {
            expect(isInteger(1.1, true).valid).toBe(false);
        });
    });

    describe('isFloat', () => {
        it('should return false for an integer', () => {
            expect(isFloat(1, true).valid).toBe(false);
        });

        it('should return true for a float', () => {
            expect(isFloat(1.1, true).valid).toBe(true);
        });
    });

    describe('isPositive', () => {
        it('should return true for a positive number', () => {
            expect(isPositive(1, true).valid).toBe(true);
        });

        it('should return false for a negative number', () => {
            expect(isPositive(-1, true).valid).toBe(false);
        });
    });
});
