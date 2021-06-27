const knex = require("../db/connection");

const create = (newObservation) => {
  return knex("observations").insert(newObservation).returning("*");
}

const list = async () => {
  return knex("observations").select("*");
}

module.exports = {
  create,
  list,
};