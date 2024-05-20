const service = require('./personagem.service')

async function readAll(req, res) {
  //Acessamos a lista de personagens no service
  const items = await service.readAll()

  //Enviamos a lista de personagens como resultado
  res.send(items)
}

async function readById(req, res) {
  //Acessamos o parâmetro de rota pelo ID
  const id = req.params.id

  //Acessamos o personagem no service através Id
  const item = await service.readById(id)

  // Checamos se o item obtido é existente    
  if (!item) {
    return res.status(404).send('Item não encontrado.')
  }

  //Enviamos o item como resposta
  res.send(item)
}

async function create(req, res) {
  //Acessamos o Body da requisição
  const newItem = req.body

  // Checar se o ´nome´ está presente no body
  if (!newItem || !newItem.nome) {
    return res.status(400).send('Corpo da requesição deve conter a propriedade nome.')
  }

  //Adicionamos no Data Base através do Service 
  await service.create(newItem)

  //Exibimos uma mensagem de sucesso
  res.status(201).send(newItem)
}

async function updateById(req, res) {
   //Acessamos o ID dos parâmetros de rota 
   const id = req.params.id


   //Acessamos o Body da requisição 
   const newItem = req.body

   // Checar se o ´nome´ está presente no body
   if (!newItem || !newItem.nome) {
     return res.status(400).send('Corpo da requesição deve conter a propriedade nome.')
   }

    //Atualizamos no DB o newItem pelo ID, usando o Service
    await service.updateById(id, newItem)

   //Enviamos uma mensgem de sucesso
   res.send(newItem)
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