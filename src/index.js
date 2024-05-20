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
  

  //Endpoint Update [PUT] /personagem/:id
  app.put('/personagem/:id', async function (req, res) {
   

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