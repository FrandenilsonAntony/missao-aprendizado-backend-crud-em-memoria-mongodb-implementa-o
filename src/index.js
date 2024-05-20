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

  //Endpoint Delete [DELETE] /personagem/:id
  app.delete('/personagem/:id', async function (req, res) {
    
*/
  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  })
}

//Executamos a função main()
main()