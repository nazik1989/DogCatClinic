const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const ObjectId = require('mongodb').ObjectID;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const dbUrl = 'mongodb://127.0.0.1:27017/AnimalHospital';
const dbName = 'AnimalHospital';

app.get('/newpacient', function (req, res) {
    MongoClient.connect(dbUrl, {useNewUrlParser: true},function (err, client) {
        if (err) throw err

        var db = client.db('AnimalHospital')

        db.collection('newPacients').find().toArray(function (err, result) {
            if (err) throw err

            res.send(result);
        })
    })

})
app.get('/our_pacients', function (req, res) {
    MongoClient.connect(dbUrl,{ useNewUrlParser: true },function (err, client)  {
        if (err) throw err

        var db = client.db('AnimalHospital')

        db.collection('pacients').find().toArray(function (err, result) {
            if (err) throw err

            res.send(result);
            res.end();
        })
    })

})



app.post('/delete_pacient', function (req, res) {
    var id = req.body.id;

    MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
        if (err) throw err

        var db = client.db(dbName)
        var myquery = { _id: ObjectId(id) };
        db.collection('newPacients').deleteOne(myquery, function(err,res) {
            if (err) throw err
            console.log("1 document deleted");
            client.close();
        });
    });
    var respaone = {id:id};
    res.send(respaone);

})

app.post('/create_patients', function (req, res) {
MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
    if (err) throw err

    var db = client.db("AnimalHospital")
    var myobj = req.body;
    db.collection("newPacients").insertOne(myobj, function(err, res) {
        if (err) throw err
        console.log("1 document inserted");
        console.log(req.body);
        client.close();
    });
});
    res.end();
})

app.post('/our_patients', function (req, res) {
    MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
        if (err) throw err

        var db = client.db("AnimalHospital")
        var myobj = req.body;
        db.collection("pacients").insertOne(myobj, function(err, res) {
            if (err) throw err
            console.log("1 document inserted");
            console.log(req.body);
            client.close();
        });
    });
    res.send(req.body.owner);

})


app.post('/update_pacientInformation', function(req, res){
    console.log('req.body.id ',req.body._id)

    MongoClient.connect('mongodb://127.0.0.1:27017/AnimalHospital', { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        var db = client.db("AnimalHospital")
        // var myquery =
        var newvalues = {
            vaccine_name: req.body.vaccine_name,
            vaccine_date: req.body.vaccine_date,
            second_vaccine_name: req.body.second_vaccine_name,
            second_vaccine_date: req.body.second_vaccine_date,
            disease: req.body.disease,
            prescription: req.body.prescription
        };



        db.collection("pacients").updateOne(
            { _id: ObjectId(req.body._id) },
            { $push: { "anketa": newvalues }}
        );

        // {$mod: {<field>: ...}}

        // db.collection("pacients").updateOne(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     client.close();
        // });
    });
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})