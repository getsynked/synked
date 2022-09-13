import {
    base32ToBinary,
    base64ToBinary,
    binaryToBase32,
    binaryToBase64,
} from '../lib/encoders';

describe('base64 Encoding/Decoding', () => {
    test('binaryToBase64', () => {
        expect(binaryToBase64('000000')).toBe('A');
        expect(binaryToBase64('000001')).toBe('B');
        expect(binaryToBase64('000010')).toBe('C');
        expect(binaryToBase64('000011')).toBe('D');
        expect(binaryToBase64('000100')).toBe('E');
        expect(binaryToBase64('000101')).toBe('F');
        expect(binaryToBase64('000101011')).toBe('Ar');
    });

    test('base64ToBinary', () => {
        expect(base64ToBinary('A')).toBe('000000');
        expect(base64ToBinary('F')).toBe('000101');
    });
});

describe('base32 Encoding/Decoding', () => {
    test('binaryToBase32', () => {
        expect(binaryToBase32('00000')).toBe('0');
        expect(binaryToBase32('00001')).toBe('1');
        expect(binaryToBase32('00010')).toBe('2');
        expect(binaryToBase32('00011')).toBe('3');
        expect(binaryToBase32('00100')).toBe('4');
        expect(binaryToBase32('00101')).toBe('5');
        expect(binaryToBase32('000101011')).toBe('1B');
    });

    test('base32ToBinary', () => {
        expect(base32ToBinary('A')).toBe('01010');
        expect(base32ToBinary('F')).toBe('01111');
    });
});
