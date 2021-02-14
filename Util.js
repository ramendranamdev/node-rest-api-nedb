var Datastore = require("nedb");
const { db } = require("./db/nedb");

module.exports.insert = (doc) => {
  return new Promise((resolve, reject) => {
    db.insert(doc, (err, doc) => {
      if (err) reject(err);
      resolve(doc);
    });
  });
};
