# models

The models library forms the basis of data models. These help in the processing of
information, the transmission and also the necessary layers for the storage and 
encryption. A map and categorisation of the different layers of the model is also
generated at runtime, which can be used for auditing purposes

## Data Model Structure

### Primitive Model

A primitive model is one that extends on the primitive data types of `string` | `number` | `boolean`.

Classes are used for encapsulating primitive primarily to 

* maintain immutability
* rely on all the decorator goodness


```typescript
import { Model, DataModel } from '@synked/models';

@Model({
    dataClassification: 'PII',
    primitive: 'string',
    dataDefinition: {
        isEmail: true
    }
})
export class Email extends DataModel {
    constructor(value: number) {}
}
```

### Composite/Top Level Model

A composite/top level model is one that build on top of `object` | `array`. The difference between a 
composite and a top level model lies in the presence of an id field. The ID field allows the data object
to be referenced through it. A composite model is one without the ID field. 

The ID decorator can only be prefixed to properties that are called `id`. This is to enable other functionality
via the id property. An error is thrown at runtime if this is not followed. Presence of the Id decorator in a 
model makes it a top level model, meaning it has its own collection in the data store.

Data classigication is another property that is validated based on the constituent properties. If any of the
individual property is classified as a PII, the resulting composite/top level model is also classified as PII

```typescript
import { Model, DataModel, Id, Property } from '@synked/models';
import { Uid } from '@synked/uid';
import { FirstName, Email }  from '../primitives';

@Model({
    dataClassification: 'PII',
    primitive: 'object',
})
export class Person extends DataModel {
    constructor() {}

    @Id()
    id: Uid;

    @Property({mandatory: true})
    firstName: FirstName;

    @Property({mandatory: true})
    email: Email;
}
```