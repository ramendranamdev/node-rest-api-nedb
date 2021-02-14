const express = require("express");
var bodyParser = require("body-parser");
const { users, db } = require("./db/nedb");
// var Datastore = require("nedb");
// let db = new Datastore();

const app = express();
const port = 3000;
let id = 0;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var doc = {
  hello: "world",
  n: 5,
  today: new Date(),
  nedbIsAwesome: true,
  notthere: null,
  notToBeSaved: undefined, // Will not be saved
  fruits: ["apple", "orange", "pear"],
  infos: { name: "nedb" },
};

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
  users.insert({ id: data }, (err, doc) => {
    if (err) console.log(err);
    console.log(doc);
  });
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
