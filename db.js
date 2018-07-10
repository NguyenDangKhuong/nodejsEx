var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017/nodeEx'
MongoClient.connect(url, function (err, db) {
    if(err){
        console.log('Khong the ket noi vao database. Loi ket noi la:', err)
    }
    else {
        console.log('Ket noi thanh cong den', url)
        //do some work with the database



        db.close();
    }
})