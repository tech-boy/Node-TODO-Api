//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

   //findOneAndUpdate

//    db.collection('Todos').findOneAndUpdate({_id: new ObjectID     ('5bba030eb58cdf035271b9b1')
//     }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//         console.log(result);
//    }, (err) => {
//         if(err)
//             console.log('Unable to update the TODO');
//    });

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5bb94871051132e6600331d4')
   }, {
       $set: {
           name: 'Darshak'
       }, 
       $inc: {
           age: 1
       }
   }, {
       returnOriginal: false
   }).then((result) => {
        console.log(result);
   }, (err) => {
       if(err)
            console.log('Unable to update Todo');
   });

    client.close();
});