import { IDataModelClass, PRIMITIVES } from './interfaces';
import 'reflect-metadata';
import { IModelError } from './validators/types';
import { validatePrimitive } from './validators/primitives';

export function Model<T extends PRIMITIVES>(
    decoratorDefinition: IDataModelClass<T>
): ClassDecorator {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target: Function) => {
        const _original = target;
        const _newObject = _original.prototype;
        const _validationResults: IModelError<true | false>[] = [];
        _newObject.dataClassification = decoratorDefinition.dataClassification;
        _newObject.primitive = decoratorDefinition.dataPrimitive;
        const _isDelayedThrowable =
            !!_newObject.throw && typeof _newObject.throw === 'function';

        /** Handle data definition properties for primitives */
        const _dataDefinition = decoratorDefinition.dataDefinition;
        if (decoratorDefinition.dataDefinition) {
            _validationResults.push(
                ...validatePrimitive(_dataDefinition, _newObject.value)
            );
        }

        /** Process custom validators at object creation */
        if (decoratorDefinition.syncValidators) {
            decoratorDefinition.syncValidators.forEach((validator) => {
                const validationResult = validator(_newObject);
                if (!validationResult.valid) {
                    _validationResults.push(validationResult);
                }
            });
        }

        /** If not delayed throwable, throw errors immediately */
        if (!_isDelayedThrowable) {
            const isError = _validationResults.some((result) => !result.valid);
            if (isError) {
                throw new Error(
                    `Invalid ${_original.name}: ${_validationResults
                        .map((result) => `${result.code}: ${result.message}`)
                        .join(', ')}`
                );
            }
        }
        return _newObject;
        /* const inputData = Reflect.getMetadata('design:paramtypes', target); */
    };
}
