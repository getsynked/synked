import { isTrue, isFalse } from '../../lib/validators/boolean';

describe('boolean validators', () => {
    describe('isTrue', () => {
        it('should return true for true', () => {
            expect(isTrue(true, true).valid).toBe(true);
        });

        it('should return false for false', () => {
            expect(isTrue(false, true).valid).toBe(false);
        });
    });

    describe('isFalse', () => {
        it('should return false for true', () => {
            expect(isFalse(true, true).valid).toBe(false);
        });

        it('should return true for false', () => {
            expect(isFalse(false, true).valid).toBe(true);
        });
    });
});
