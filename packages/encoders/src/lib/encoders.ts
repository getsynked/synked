import { BASE64_CHARACTER_MAP, BASE64_CHARACTER_MAP_INVERSE } from './base64';
import { BASE32_MAP, BASE32_MAP_INVERSE } from './base32';

export function binaryToBase64(input: string): string {
    if (!/^[01]*$/.test(input)) throw new Error('Input is not a binary string');

    const length = input.length;
    const closestMultipleOfSix = Math.ceil(length / 6) * 6;

    const paddedInput = '0'.repeat(closestMultipleOfSix - length) + input;

    const chunks = paddedInput.match(/.{1,6}/g) || [];

    const base64Characters = chunks.map((chunk) => BASE64_CHARACTER_MAP[chunk]);

    return base64Characters.join('');
}

export function base64ToBinary(input: string): string {
    if (!/^[A-Za-z0-9_/-]$/.test(input))
        throw new Error('Input is not a base64 string');

    const binaryStrings = input.split('').map((character) => {
        const binaryString = BASE64_CHARACTER_MAP_INVERSE[character];
        if (!binaryString) throw new Error('Invalid base64 character');
        return binaryString;
    });

    return binaryStrings.join('');
}

export function binaryToBase32(input: string): string {
    if (!/^[01]*$/.test(input)) throw new Error('Input is not a binary string');

    const length = input.length;
    const closestMultipleOfFive = Math.ceil(length / 5) * 5;

    const paddedInput = '0'.repeat(closestMultipleOfFive - length) + input;
    const chunks = paddedInput.match(/.{1,5}/g) || [];

    const base32Characters = chunks.map((chunk) => BASE32_MAP_INVERSE[chunk]);

    return base32Characters.join('');
}

export function base32ToBinary(input: string): string {
    if (!/^[A-Z0-9]$/.test(input))
        throw new Error('Input is not a base32 string');

    const binaryStrings = input.split('').map((character) => {
        const binaryString = BASE32_MAP[character];
        if (!binaryString) throw new Error('Invalid base32 character');
        return binaryString;
    });

    return binaryStrings.join('');
}
