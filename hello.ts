import * as y from 'yup';
import { InferType } from 'yup';

const user = y.object({
    username: y.string().required()
})

console.log(user);

type User = InferType<typeof user>;

const user1: User = {
    username: 'Freewind'
}

// const user2: User = {
//     username: 123
// }

// pass
console.log(user.validateSync({ username: 'hello' }));
console.log(user.validateSync({ username: 111 }));

// throw errors if specified 'strict: true'
console.log(user.validateSync({ username: 111 }, {strict: true}));





