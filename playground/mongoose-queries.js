const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bda6f1dbcf5b2681184e3d2';

// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By id',todo);
// }).catch((e) => console.log(e));


var userId = '5bd9e88750adde121bb8c18f'
User.findById(userId).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('User By id',user);
}).catch((e) => console.log(e));