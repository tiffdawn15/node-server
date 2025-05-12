const knex = require("knex");
const knexfile = require("./knexfile");

// TODO: in prod use dependecy injection to create next instance 

// in prod don't access knexfile.development directy but use env vars which config to use 
const db = knex(knexfile.development);
module.exports = db;