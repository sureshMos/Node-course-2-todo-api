const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }else{
        console.log('Connected to MongoDB server');
    }

    // deleteMany
    // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID("5bd5a9714f6c3d0c3b342388")}).then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    })


});