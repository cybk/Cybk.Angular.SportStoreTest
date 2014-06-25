var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var bSon = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('SportsStore', server);

db.open(function (err, db){
    if (!err){
        console.log('Connected to "SportsStore" database');
        db.collection('Products', {string:true}, function (err, collection) {
            if (err){
                    console.log('The "Products" collection does not exist');
                }
          });
    }
});

exports.findAll = function(req, res){
    db.collection('Products', function(err, collection){
       collection.find().toArray(function (err, items){
           res.send(items);
       }) 
    });
}