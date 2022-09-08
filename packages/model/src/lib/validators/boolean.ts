/* eslint-disable @typescript-eslint/no-unused-vars */
import { IModelError } from './types';

export function isTrue(
    value: boolean,
    unused: boolean
): IModelError<true | false> {
    return {
        code: value === true ? undefined : 'FORMAT_ERROR  ',
        message:
            value === true
                ? undefined
                : `isTrue validation failed. Expected true, got ${value}`,
        valid: value === true,
    };
}

export function isFalse(
    value: boolean,
    unused: boolean
): IModelError<true | false> {
    return {
        code: value === false ? undefined : 'FORMAT_ERROR  ',
        message:
            value === false
                ? undefined
                : `isFalse validation failed. Expected false, got ${value}`,
        valid: value === false,
    };
}
