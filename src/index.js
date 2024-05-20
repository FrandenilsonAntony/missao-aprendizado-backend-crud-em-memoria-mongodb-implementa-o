require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')

//Declaramos a função main()
async function main() {
  //FIX: Ultiliar o connectToDatabase() e receber o DB
  await connectToDatabase()
  //const collection = db.collection('personagem')

  const app = express()
   //Middlewares
   //Sinalia para o Express que estamos usando o JSON no Body
   app.use(express.json())

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.use('/personagem', personagemRouter)
  //FIX: Mover isso para pasta ´personagem´
/*
 
  //Endpoint Read by ID [GET] /personagem/:id
  app.get('/personagem/:id', async function (req, res) {
    //Acessamos o parâmetro de rota pelo ID
    const id = req.params.id

    //Acessa o item na collection usando o ID
    const item = await collection.findOne({ _id: new ObjectId(id)})


    // Checamos se o item obtido é existente
    if (!item) {
      return res.status(404).send('Item não encontrado.')
    }

    //Enviamos o valor do item como resposta
    res.send(item)
  })

 
  //Endpoint Create [POST] /personagem
  app.post('/personagem', async function (req, res) {
    //Acessamos o Body da requisição
    const novoItem = req.body

    // Checar se o ´nome´ está presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requesição deve conter a propriedade nome.')
    }

    //Checa se o novoItem está na lista ou não.
    // if (lista.includes(novoItem)) {
    //   return res.status(409).send('Item duplicado! "Item ja existe na lista"')
    // }

    //Adicionamos na collection
    await collection.insertOne(novoItem)

    //Exibimos uma mensagem de sucesso
    res.status(201).send(novoItem)
  })

  //Endpoint Update [PUT] /personagem/:id
  app.put('/personagem/:id', async function (req, res) {
    //Acessamos o ID dos parâmetros de rota 
    const id = req.params.id

    // Checamos se o item do ID -1 está lista, exibindo
    // uma mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }

    //Acessamos o Body da requisição 
    const novoItem = req.body

    // Checar se o ´nome´ está presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requesição deve conter a propriedade nome.')
    }

    //Checa se o novoItem está na lista ou não.
    // if (lista.includes(novoItem)) {
    //   return res.status(409).send('Item duplicado! "Item ja existe na lista"')
    // }

    //Atualizamos na collection o novo Item pelo ID
    await collection.updateOne(
      { _id: new ObjectId(id)},
      { $set: novoItem}
    )

    //Enviamos uma mensgem de sucesso
    res.send(novoItem)
  })

  //Endpoint Delete [DELETE] /personagem/:id
  app.delete('/personagem/:id', async function (req, res) {
    //Acessamos o paramentro de rota
    const id = req.params.id

    // Checamos se o item do ID -1 está lista, exibindo
    // uma mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado.')
    // }


    //Remover o item da collection usando o ID
    await collection.deleteOne({ _id: new ObjectId(id)})

    //Mensagem de confirmação 
    res.send('Item excluido com sucesso: ' + id)
  })
*/
  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  })
}

//Executamos a função main()
main()