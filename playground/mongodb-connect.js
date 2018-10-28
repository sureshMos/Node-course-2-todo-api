const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
       return console.log('Unable to connect Mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // },(err,result) => {
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'Andrew',
    //     age : 25,
    //     location : 'Philadelphia'
    // },(err,result) => {
    //     if(err){
    //         console.log('Unable to insert user',err);
    //     }
    // });
    
    // db.collection('Todos').find({
    //     _id : new ObjectID('5bd5a42123a8d6112d9411cd')
    // }).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('Unable to fetch Todos',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count:${count}`);
    // },(err) => {
    //     console.log('Unable to fetch Todos',err);
    // });

    db.collection('Users').find({name : 'Andrew'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    });

    // db.close();
});