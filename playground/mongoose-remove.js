const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'5bdaaef4c6d3a89da6819003'}).then((todo) => {

});

Todo.findByIdAndRemove('5bdaaef4c6d3a89da6819003').then((todo) => {
    console.log(todo);
});