import { PRIMITIVES } from '../interfaces';
import {
    BOOLEAN_DEFINITION_PROPERTIES,
    IModelError,
    NUMBER_DEFINITION_PROPERTIES,
    STRING_DEFINITION_PROPERTIES,
} from './types';

import { isFalse, isTrue } from './boolean';
import {
    isDate,
    isEpoch,
    maximum,
    minimum,
    exclusiveMaximum,
    exclusiveMinimum,
    multipleOf,
    isInteger,
    isFloat,
    isPositive,
    isNegative,
    isYear,
    isMonth,
    isDay,
    isHour,
    isMinute,
    isSecond,
    isMillisecond,
} from './number';
import {
    minLength,
    maxLength,
    pattern,
    checkFormat,
    isUppercase,
    isLowercase,
    isAlpha,
    isAlphanumeric,
    isDataUri,
    isEmail,
    isFQDN,
    isHexColor,
    isHexadecimal,
    isIP,
    isISBN,
    isISIN,
    isISODateString,
    isInList,
    isNumeric,
    isPort,
    isURLSafe,
    isUUID,
} from './string';

export function validatePrimitive<T extends PRIMITIVES>(
    dataDefinition: T extends 'string'
        ? STRING_DEFINITION_PROPERTIES
        : T extends 'signedNumber'
        ? NUMBER_DEFINITION_PROPERTIES
        : T extends 'number'
        ? NUMBER_DEFINITION_PROPERTIES
        : T extends 'boolean'
        ? BOOLEAN_DEFINITION_PROPERTIES
        : never,
    value: string | number | boolean
): IModelError<true | false>[] {
    const _dataDefinitionKeys = Object.keys(dataDefinition);
    const _errors: IModelError<true | false>[] = [];
    for (const key of _dataDefinitionKeys) {
        const _value = dataDefinition[key as keyof typeof dataDefinition];
        switch (key) {
            case 'minLength':
                _errors.push(minLength(value as string, _value as number));
                break;
            case 'maxLength':
                _errors.push(maxLength(value as string, _value as number));
                break;
            case 'minimum':
                _errors.push(minimum(value as number, _value as number));
                break;
            case 'maximum':
                _errors.push(maximum(value as number, _value as number));
                break;
            case 'exclusiveMinimum':
                _errors.push(
                    exclusiveMinimum(value as number, _value as number)
                );
                break;
            case 'exclusiveMaximum':
                _errors.push(
                    exclusiveMaximum(value as number, _value as number)
                );
                break;
            case 'isTrue':
                _errors.push(isTrue(value as boolean, _value as boolean));
                break;
            case 'isFalse':
                _errors.push(isFalse(value as boolean, _value as boolean));
                break;
            case 'isDate':
                _errors.push(isDate(value as number, _value as boolean));
                break;
            case 'isEpoch':
                _errors.push(isEpoch(value as number, _value as boolean));
                break;
            case 'multipleOf':
                _errors.push(multipleOf(value as number, _value as number));
                break;
            case 'isInteger':
                _errors.push(isInteger(value as number, _value as boolean));
                break;
            case 'isFloat':
                _errors.push(isFloat(value as number, _value as boolean));
                break;
            case 'isPositive':
                _errors.push(isPositive(value as number, _value as boolean));
                break;
            case 'isNegative':
                _errors.push(isNegative(value as number, _value as boolean));
                break;
            case 'isYear':
                _errors.push(isYear(value as number, _value as boolean));
                break;
            case 'isMonth':
                _errors.push(isMonth(value as number, _value as boolean));
                break;
            case 'isDay':
                _errors.push(isDay(value as number, _value as boolean));
                break;
            case 'isHour':
                _errors.push(isHour(value as number, _value as boolean));
                break;
            case 'isMinute':
                _errors.push(isMinute(value as number, _value as boolean));
                break;
            case 'isSecond':
                _errors.push(isSecond(value as number, _value as boolean));
                break;
            case 'isMillisecond':
                _errors.push(isMillisecond(value as number, _value as boolean));
                break;
            case 'pattern':
                _errors.push(pattern(value as string, _value as RegExp));
                break;
            case 'format':
                _errors.push(
                    checkFormat(
                        value as string,
                        _value as 'BASE64' | 'UTF-8' | 'ASCII'
                    )
                );
                break;
            case 'isUppercase':
                _errors.push(isUppercase(value as string, _value as boolean));
                break;
            case 'isLowercase':
                _errors.push(isLowercase(value as string, _value as boolean));
                break;
            case 'isAlpha':
                _errors.push(isAlpha(value as string, _value as boolean));
                break;
            case 'isAlphanumeric':
                _errors.push(
                    isAlphanumeric(value as string, _value as boolean)
                );
                break;
            case 'isDataUri':
                _errors.push(isDataUri(value as string, _value as boolean));
                break;
            case 'isEmail':
                _errors.push(isEmail(value as string, _value as boolean));
                break;
            case 'isFQDN':
                _errors.push(isFQDN(value as string, _value as boolean));
                break;
            case 'isHexColor':
                _errors.push(isHexColor(value as string, _value as boolean));
                break;
            case 'isHexadecimal':
                _errors.push(isHexadecimal(value as string, _value as boolean));
                break;
            case 'isIP':
                _errors.push(isIP(value as string, _value as boolean));
                break;
            case 'isISBN':
                _errors.push(isISBN(value as string, _value as boolean));
                break;
            case 'isISIN':
                _errors.push(isISIN(value as string, _value as boolean));
                break;
            case 'isISODateString':
                _errors.push(
                    isISODateString(value as string, _value as boolean)
                );
                break;
            case 'isInList':
                _errors.push(isInList(value as string, _value as string[]));
                break;
            case 'isNumeric':
                _errors.push(isNumeric(value as string, _value as boolean));
                break;
            case 'isPort':
                _errors.push(isPort(value as string, _value as boolean));
                break;
            case 'isURLSafe':
                _errors.push(isURLSafe(value as string, _value as boolean));
                break;
            case 'isUUID':
                _errors.push(isUUID(value as string, _value as boolean));
                break;
            default:
        }
    }
    return _errors;
}
