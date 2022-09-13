export const BASE32_MAP: { [key: string]: string } = {
    0: '00000',
    1: '00001',
    2: '00010',
    3: '00011',
    4: '00100',
    5: '00101',
    6: '00110',
    7: '00111',
    8: '01000',
    9: '01001',
    A: '01010',
    B: '01011',
    C: '01100',
    D: '01101',
    E: '01110',
    F: '01111',
    G: '10000',
    H: '10001',
    J: '10010',
    K: '10011',
    M: '10100',
    N: '10101',
    P: '10110',
    Q: '10111',
    R: '11000',
    S: '11001',
    T: '11010',
    V: '11011',
    W: '11100',
    X: '11101',
    Y: '11110',
    Z: '11111',
} as const;

export const BASE32_MAP_INVERSE: { [key: string]: string } = {
    '00000': '0',
    '00001': '1',
    '00010': '2',
    '00011': '3',
    '00100': '4',
    '00101': '5',
    '00110': '6',
    '00111': '7',
    '01000': '8',
    '01001': '9',
    '01010': 'A',
    '01011': 'B',
    '01100': 'C',
    '01101': 'D',
    '01110': 'E',
    '01111': 'F',
    '10000': 'G',
    '10001': 'H',
    '10010': 'J',
    '10011': 'K',
    '10100': 'M',
    '10101': 'N',
    '10110': 'P',
    '10111': 'Q',
    '11000': 'R',
    '11001': 'S',
    '11010': 'T',
    '11011': 'V',
    '11100': 'W',
    '11101': 'X',
    '11110': 'Y',
    '11111': 'Z',
} as const;
