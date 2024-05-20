const service = require('./personagem.service')

async function readAll(req, res) {
  const items = await service.readAll()
  res.send(items)
}

function readById(req, res) {
  res.send('Read By ID')
}

function create(req, res) {
  res.send('Arquivo criado')
}

function updateById(req, res) {
  res.send('Update')
}

function deleteById(req, res) {
  res.send('Delete')
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}