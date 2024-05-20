const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getColletion() {
  return getDatabase().collection('personagem')
}

function readAll() {
  //Acessamos a lista de personagens na collection do MongoDB
  return getColletion().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  //Retorna o item na collection usando o ID
  return getColletion().findOne({ _id: new ObjectId(id)})
}

function create(newItem) {
  //Adicionamos na collection
  return getColletion().insertOne(newItem)
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