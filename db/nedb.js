var Datastore = require("nedb");
const { props } = require("../config");

module.exports.users = new Datastore({
  filename: props.dbPath + "/users.db",
  autoload: true,
});
