const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
//Preparamos as informaçoes de acesso ao banco de dados
const dbUrl = 'mongodb+srv://admin:bhVmqUkLbeHhaOrk@cluster0.cxt5ufa.mongodb.net'
const dbName = 'mongodb-implementacao'

//Declaramos a função main()
async function main() {
  //Realizamos a conexão com DataBase
  const client = new MongoClient(dbUrl)
  console.log('Conectando ao Data Base: Nuvem')
  console.log('...............................')
  await client.connect()
  console.log('Data Base conectado com sucesso!')
  
  const db = client.db(dbName)
  const collection = db.collection('personagem')

  const app = express()

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  const lista = ['Java', 'Kotlin', 'Android']

  //Endpoint Read All [GET] /personagem
  app.get('/personagem', async function (req, res) {
    //Acessamos a lista de itens na collection do MongoDb
    const itens = await collection.find().toArray()
    //enviamos a lista de itens como resultado
    res.send(itens)
  })

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

  //Sinalia para o Express que estamos usando o JSON no Body
  app.use(express.json())

  //Endpoint Create [POST] /personagem
  app.post('/personagem', async function (req, res) {
    //Acessamos o Body da requisição
    const novoItem = req.body

    // Checar se o ´nome´ está presente no body
    if (!novoItem || novoItem.nome) {
      return res.status(400).send('Corpo da requesição deve conter a propriedade ´nome´.')
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
      return res.status(400).send('Corpo da requesição deve conter a propriedade ´nome´.')
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
  app.delete('/personagem/:id', function (req, res) {
    //Acessamos o paramentro de rota
    const id = req.params.id

    // Checamos se o item do ID -1 está lista, exibindo
    // uma mensagem caso não esteja
    if (!lista[id - 1]) {
      return res.status(404).send('Item não encontrado.')
    }


    //Remover o item da lista usando o ID -1
    delete lista[id - 1]

    //Mensagem de confirmação 
    res.send('Item excluido com sucesso: ' + id)
  })

  app.listen(3000)
}

//Executamos a função main()
main()