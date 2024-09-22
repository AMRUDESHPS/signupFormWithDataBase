var express = require('express');
var { MongoClient } = require('mongodb')
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/submit', function (req, res, next) {

  console.log(req.body)

  const url = "mongodb://127.0.0.1:27017";
  const dbName = "database_name";
  const client = new MongoClient(url)
  client.connect()
  client.db(dbName).collection("collection_name").insertOne(req.body)
  res.send("sented");
})

module.exports = router;