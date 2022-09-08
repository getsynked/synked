import { ERROR_TYPES } from './errors';

export interface IModelError<T extends boolean> {
    valid: T;
    message?: T extends true ? never : string;
    code?: T extends true ? never : ERROR_TYPES | string;
}

export type SyncValidator = (args: unknown[]) => IModelError<true | false>;

export type AsyncValidator = (
    args: unknown[]
) => Promise<IModelError<true | false>>;

export type STRING_DEFINITION_PROPERTIES = {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    format?: string;
    isUppercase?: boolean;
    isLowercase?: boolean;
    isDataUri?: boolean;
    isEmail?: boolean;
    isFQDN?: boolean;
    isHexColor?: boolean;
    isHexadecimal?: boolean;
    isIP?: boolean;
    isISBN?: boolean;
    isISIN?: boolean;
    isAlpha?: boolean;
    isAlphanumeric?: boolean;
    isISODateString?: boolean;
    isNumeric?: boolean;
    isURLSafe?: boolean;
    isInList?: string[];
};

export type NUMBER_DEFINITION_PROPERTIES = {
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    greaterThan?: number;
    lessThan?: number;
    greaterThanOrEqualTo?: number;
    lessThanOrEqualTo?: number;
    isInteger?: boolean;
    isFloat?: boolean;
    isPositive?: boolean;
    isNegative?: boolean;
    isInList?: number[];
    isYear?: boolean;
    isMonth?: boolean;
    isDay?: boolean;
    isHour?: boolean;
    isMinute?: boolean;
    isSecond?: boolean;
    isMillisecond?: boolean;
    isDate?: boolean;
    isEpoch?: boolean;
};

export type BOOLEAN_DEFINITION_PROPERTIES = {
    isTrue?: boolean;
    isFalse?: boolean;
};
