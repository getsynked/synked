/* eslint-disable @typescript-eslint/no-unused-vars */
import { IModelError } from './types';

export function minimum(
    value: number,
    minimum: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= minimum;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be greater than or equal to ${minimum}`,
        valid: test,
    };
}

export function maximum(
    value: number,
    maximum: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value <= maximum;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be less than or equal to ${maximum}`,
        valid: test,
    };
}

export function exclusiveMinimum(
    value: number,
    exclusiveMinimum: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value > exclusiveMinimum;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be greater than ${exclusiveMinimum}`,
        valid: test,
    };
}

export function exclusiveMaximum(
    value: number,
    exclusiveMaximum: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value < exclusiveMaximum;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be less than ${exclusiveMaximum}`,
        valid: test,
    };
}

export function multipleOf(
    value: number,
    multipleOf: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value % multipleOf === 0;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test ? undefined : `Value must be a multiple of ${multipleOf}`,
        valid: test,
    };
}

export function greaterThan(
    value: number,
    greaterThan: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value > greaterThan;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test ? undefined : `Value must be greater than ${greaterThan}`,
        valid: test,
    };
}

export function lessThan(
    value: number,
    lessThan: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value < lessThan;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test ? undefined : `Value must be less than ${lessThan}`,
        valid: test,
    };
}

export function greaterThanOrEqualTo(
    value: number,
    greaterThanOrEqualTo: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= greaterThanOrEqualTo;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be greater than or equal to ${greaterThanOrEqualTo}`,
        valid: test,
    };
}

export function lessThanOrEqualTo(
    value: number,
    lessThanOrEqualTo: number
): IModelError<true | false> {
    const test = typeof value === 'number' && value <= lessThanOrEqualTo;
    return {
        code: test ? undefined : 'CONDITION_ERROR',
        message: test
            ? undefined
            : `Value must be less than or equal to ${lessThanOrEqualTo}`,
        valid: test,
    };
}

export function isInteger(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && Number.isInteger(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be an integer`,
        valid: test,
    };
}

export function isFloat(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && !Number.isInteger(value);
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a float`,
        valid: test,
    };
}

export function isPositive(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value > 0;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be positive`,
        valid: test,
    };
}

export function isNegative(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value < 0;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be negative`,
        valid: test,
    };
}

export function isYear(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 0 && value <= 9999;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid year`,
        valid: test,
    };
}

export function isMonth(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 1 && value <= 12;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid month`,
        valid: test,
    };
}

export function isDay(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 1 && value <= 31;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid day`,
        valid: test,
    };
}

export function isHour(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 0 && value <= 23;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid hour`,
        valid: test,
    };
}

export function isMinute(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 0 && value <= 59;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid minute`,
        valid: test,
    };
}

export function isSecond(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 0 && value <= 59;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid second`,
        valid: test,
    };
}

export function isMillisecond(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test = typeof value === 'number' && value >= 0 && value <= 999;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid millisecond`,
        valid: test,
    };
}

export function isDate(
    value: number,
    unused: boolean
): IModelError<true | false> {
    try {
        const date = new Date(value);
        return {
            valid: true,
        };
    } catch (e) {
        return {
            code: 'FORMAT_ERROR',
            message: `Value must be a valid date`,
            valid: false,
        };
    }
}

export function isEpoch(
    value: number,
    unused: boolean
): IModelError<true | false> {
    const test =
        typeof value === 'number' && value >= 0 && value <= 253402300799999;
    return {
        code: test ? undefined : 'FORMAT_ERROR',
        message: test ? undefined : `Value must be a valid epoch`,
        valid: test,
    };
}
