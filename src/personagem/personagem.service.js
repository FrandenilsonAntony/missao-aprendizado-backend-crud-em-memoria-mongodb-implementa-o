const { getDatabase } = require("../db/database-connection")

function getColletion() {
  return getDatabase().collection('personagem')
}

function readAll() {
  //Acessamos a lista de personagens na collection do MongoDB
  return getColletion().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}
  
function deleteById() {
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}