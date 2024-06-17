import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.MONGO_URI);

let documentosColecao;
let usuariosColecao;

try {
  await cliente.connect();
  const db = cliente.db(process.env.MONGO_DB_NAME);
  documentosColecao = db.collection(process.env.MONGO_DOCUMENTS_COLLETCION_NAME);
  usuariosColecao = db.collection(process.env.MONGO_USERS_COLLETCION_NAME);

  console.log("Conectado ao banco de dados com sucesso");

} catch (err) {
  console.log(err);
}

export { documentosColecao, usuariosColecao };
