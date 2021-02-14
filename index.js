const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const { users } = require("./db/nedb");
// var Datastore = require("nedb");
// let db = new Datastore();

const app = express();
const port = 3000;
let id = 0;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:19006" }));

//Insert Mock Data
users.insert([{ id: ++id }, { id: ++id }, { id: ++id }], (err, doc) => {
  console.log("inserted");
});

app.get("/", (req, res) => {
  db.find({}, function (err, docs) {
    res.send(docs);
  });
});

app.get("/users", (req, res) => {
  users.find({}, (err, docs) => {
    res.send(docs);
  });
});

app.post("/newUser", (req, res) => {
  let { data } = req.body;
  console.log(data);
  // console.log(req.body);
  users.insert({ id: data }, (err, doc) => {
    if (err) console.log(err);
    console.log("hahaha");
    console.log(doc);
  });
  res.send(req.body);
});

app.get("/deleteAllUser", (req, res) => {
  // Removing all documents with the 'match-all' query
  let n = 0;
  users.remove({}, { multi: true }, function (err, numRemoved) {
    console.log(numRemoved);
    // n = numRemoved;
  });
  res.send(`done`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
