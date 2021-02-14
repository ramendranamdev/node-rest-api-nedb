var Datastore = require("nedb");
const { props } = require("../config");
module.exports.db = new Datastore({ filename: "db.db", autoload: true });
module.exports.users = new Datastore({ filename: "users.db", autoload: true });
module.exports.tweets = new Datastore({
  filename: "tweets.db",
  autoload: true,
});
module.exports.messages = new Datastore({
  filename: "messages.db",
  autoload: true,
});

module.exports.demo = new Datastore({
  filename: props.dbPath + "/demo.db",
  autoload: true,
});
