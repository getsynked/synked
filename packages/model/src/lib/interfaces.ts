import {
    BOOLEAN_DEFINITION_PROPERTIES,
    NUMBER_DEFINITION_PROPERTIES,
    STRING_DEFINITION_PROPERTIES,
    SyncValidator,
    AsyncValidator,
} from './validators/types';

export type PRIMITIVES =
    | 'string'
    | 'signedNumber'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'timestamp';

export type MODEL_TYPES = 'PRIMITIVE' | 'COMPOSITE' | 'TOP_LEVEL';

export type IDataModelClass<T extends PRIMITIVES> = {
    dataClassification:
        | 'PII'
        | 'NICI'
        | 'APPLICATION'
        | 'SENSITIVE'
        | 'PCI'
        | 'PCIPIN';
    dataPrimitive: T;
    /**
     * @description
     * A list of synchronous validators to be run on the model. These are custom
     * validators that are required on top of the data definition for a primitive
     * and the property decorators for an aggregate data model.
     */
    syncValidators?: SyncValidator[];
    /**
     * @notimplemented
     * Async validators in the system are not currently supported.
     * Please highlight if there is a specific usecase for these so that
     * we can prioritize their implementation.
     */
    asyncValidators?: AsyncValidator[];
    dataDefinition: T extends 'string'
        ? STRING_DEFINITION_PROPERTIES
        : T extends 'signedNumber'
        ? NUMBER_DEFINITION_PROPERTIES
        : T extends 'number'
        ? NUMBER_DEFINITION_PROPERTIES
        : T extends 'boolean'
        ? BOOLEAN_DEFINITION_PROPERTIES
        : never;
};
