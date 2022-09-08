/* eslint-disable @typescript-eslint/no-unused-vars */
import { IModelError } from './types';

/**
 *
 * @param value
 * @param minLength
 * @returns IModelError<true | false>
 *
 * @description
 * This function checks if the length of the string is greater than or equal to the minLength value.
 *
 * @example
 * const value = 'hello';
 * const minLength = 5;
 * const result = minLength(value, minLength);
 * // result = {
 * //     code: undefined,
 * //     message: undefined,
 * //     valid: true,
 * // }
 *
 */
export function minLength(
    value: string,
    minLength: number
): IModelError<true | false> {
    return {
        code: value.length >= minLength ? undefined : 'CONDITION_ERROR',
        message:
            value.length >= minLength
                ? undefined
                : `minLength validation failed. Expected ${minLength}, got ${value.length}`,
        valid: value.length >= minLength,
    };
}

/**
 * 
 * @param value 
 * @param maxLength 
 * @returns IModelError<true | false>
 * 
 * @description
 * This function checks if the length of the string is less than or equal to the maxLength value.
 * 
 * @example
 * const value = 'hello';
 * const maxLength = 5;
 * const result = maxLength(value, maxLength);
 * // result = {
 * //     code: undefined,
 * //     message: undefined,
 * //     valid: true,
 * // }

 */
export function maxLength(
    value: string,
    maxLength: number
): IModelError<true | false> {
    return {
        code: value.length <= maxLength ? undefined : 'CONDITION_ERROR',
        message:
            value.length <= maxLength
                ? undefined
                : `maxLength validation failed. Expected ${maxLength}, got ${value.length}`,
        valid: value.length <= maxLength,
    };
}

/**
 *
 * @param value
 * @param pattern
 * @returns IModelError<true | false>
 *
 * @description
 * This function checks if the string matches the pattern.
 *
 * @example
 * const value = 'hello';
 * const pattern = /^[a-z]+$/;
 * const result = pattern(value, pattern);
 * // result = {
 * //     code: undefined,
 * //     message: undefined,
 * //     valid: true,
 * // }
 *
 * @example
 * const value = 'hello';
 * const pattern = /^[0-9]+$/;
 * const result = pattern(value, pattern);
 * // result = {
 * //     code: 'PATTERN_ERROR',
 * //     message: 'pattern validation failed. Expected /^[0-9]+$/, got hello',
 * //     valid: false,
 * // }
 *
 */

export function pattern(
    value: string,
    pattern: RegExp
): IModelError<true | false> {
    const test = typeof value === 'string' && pattern.test(value);
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `pattern validation failed. Expected ${pattern}, got ${value}`,
        valid: test,
    };
}

/**
 *
 * @param value
 * @param format
 * @returns IModelError<true | false>
 *
 * @description
 * This function checks if the string matches the format.
 *
 * @example
 * const value = 'hello';
 * const format = 'utf-8';
 * const result = format(value, format);
 * // result = {
 * //     code: undefined,
 * //     message: undefined,
 * //     valid: true,
 * // }
 */
export function checkFormat(
    value: string,
    format: 'BASE64' | 'ASCII' | 'UTF-8'
): IModelError<true | false> {
    // check if value is base64 encoded
    if (format === 'BASE64') {
        const test = typeof value === 'string' && btoa(atob(value)) === value;
        return {
            code: test ? undefined : 'FORMAT_ERROR',
            message: test
                ? undefined
                : `format validation failed. Expected ${format}, got ${value}`,
            valid: test,
        };
    }

    // check if value is utf-8 encoded
    if (format === 'UTF-8') {
        const test =
            typeof value === 'string' &&
            decodeURIComponent(escape(value)) === value;
        return {
            code: test ? undefined : 'FORMAT_ERROR',
            message: test
                ? undefined
                : `format validation failed. Expected ${format}, got ${value}`,
            valid: test,
        };
    }

    // check if value is ascii encoded
    if (format === 'ASCII') {
        // eslint-disable-next-line no-control-regex
        const test = typeof value === 'string' && /^[\x00-\x7F]*$/.test(value);
        return {
            code: test ? undefined : 'FORMAT_ERROR',
            message: test
                ? undefined
                : `format validation failed. Expected ${format}, got ${value}`,
            valid: test,
        };
    }
    return {
        code: 'FORMAT_ERROR',
        message: `format validation failed. Expected ${format}, got ${value}`,
        valid: false,
    };
}

/**
 *
 * @param value
 * @param unused
 * @returns IModelError<true | false>
 *
 * @description
 * This function checks if the string is uppercase.
 *
 * @example
 * const value = 'HELLO';
 * const unused = undefined;
 * const result = uppercase(value, unused);
 * // result = {
 * //     code: undefined,
 * //     message: undefined,
 * //     valid: true,
 * // }
 *
 */
export function isUppercase(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'string' && value === value.toUpperCase();
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `uppercase validation failed. Expected ${value.toUpperCase()}, got ${value}`,
        valid: test,
    };
}

export function isLowercase(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'string' && value === value.toLowerCase();
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `lowercase validation failed. Expected ${value.toLowerCase()}, got ${value}`,
        valid: test,
    };
}

export function isDataUri(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^data:.+\/(.+);base64,(.*)$/;
    const matches = regex.exec(value);
    const test = typeof value === 'string' && matches !== null;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `dataUri validation failed. Expected dataUri, got ${value}`,
        valid: test,
    };
}

export function isEmail(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',

        message: test
            ? undefined
            : `email validation failed. Expected email, got ${value}`,
        valid: test,
    };
}

export function isFQDN(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `fqdn validation failed. Expected fqdn, got ${value}`,
        valid: test,
    };
}

export function isHexColor(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `hexColor validation failed. Expected hexColor, got ${value}`,
        valid: test,
    };
}

export function isHexadecimal(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^[0-9a-fA-F]+$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `hexadecimal validation failed. Expected hexadecimal, got ${value}`,
        valid: test,
    };
}

export function isIP(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex =
        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `ip validation failed. Expected ip, got ${value}`,
        valid: test,
    };
}

export function isISBN(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex =
        /^(?:ISBN(?:-13)?:?●)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-●]){3})[-●0-9X]{13}$)97[89][-●]?(?:[0-9]+[-●]){2}[0-9]+[-●][0-9X]$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `isbn validation failed. Expected isbn, got ${value}`,
        valid: test,
    };
}

export function isISIN(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^(?:[A-Z]{2})?(?:[A-Z0-9]{9}[0-9])$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `isin validation failed. Expected isin, got ${value}`,
        valid: test,
    };
}

export function isAlpha(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^[a-zA-Z]+$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `alpha validation failed. Expected alpha, got ${value}`,
        valid: test,
    };
}

export function isAlphanumeric(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^[a-zA-Z0-9]+$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `alphanumeric validation failed. Expected alphanumeric, got ${value}`,
        valid: test,
    };
}

export function isISODateString(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `isoDateString validation failed. Expected isoDateString, got ${value}`,
        valid: test,
    };
}

export function isNumeric(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^[0-9]+$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `numeric validation failed. Expected numeric, got ${value}`,
        valid: test,
    };
}

export function isURLSafe(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^[a-zA-Z0-9_-]+$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `urlSafe validation failed. Expected urlSafe, got ${value}`,
        valid: test,
    };
}

export function isInList<T>(value: T, list: T[]): IModelError<true | false> {
    const test = list.includes(value);
    return {
        code: test ? undefined : 'INVALID_DATA',
        message: test
            ? undefined
            : `inList validation failed. Expected inList, got ${value}`,
        valid: test,
    };
}

export function isUUID(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    const test = typeof value === 'string' && regex.test(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `uuid validation failed. Expected uuid, got ${value}`,
        valid: test,
    };
}

export function isPort(
    value: string,
    unused: boolean
): IModelError<true | false> {
    const regex = /^([0-9]{1,5})$/;
    const test =
        typeof value === 'string' && regex.test(value) && +value < 65536;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test
            ? undefined
            : `port validation failed. Expected port, got ${value}`,
        valid: test,
    };
}
