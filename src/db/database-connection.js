const { MongoClient } = require('mongodb')

//Preparamos as informaçoes de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-implementacao'

async function connectToDatabase() {
  //Realizamos a conexão com DataBase
  const client = new MongoClient(dbUrl)
  console.log('Conectando ao Data Base: Nuvem')
  console.log('...............................')
  await client.connect()
  console.log('Data Base conectado com sucesso!')

  const db = client.db(dbName)

  //FIXME: Usar o DB de alguma forma
}

module.exports = {
  connectToDatabase
}