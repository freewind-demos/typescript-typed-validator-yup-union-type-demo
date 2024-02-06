import * as y from 'yup';
import { InferType } from 'yup';

const user = y.object({
    username: y.mixed()
    // NOTE: seems not working as expected
    //  in example they are concrete values: 
    //  .oneOf(['jimmy', 123]);
    .oneOf([y.string(), y.number()])
})


// type User = {
//     username?: AnyPresentValue | undefined;
// }
type User = InferType<typeof user>;

// Anything passes
const user1: User = {
    username: 'Freewind'
}

// Anything passes
const user2: User = {
    username: 123
}

// Anything passes
const user3: User = {
    username: true
}


// Will return error
//  ValidationError: username must be one of the following values: [object Object], [object Object]
console.log(user.validateSync({ username: 'hello' }));
