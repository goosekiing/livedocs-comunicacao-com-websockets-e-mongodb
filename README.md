# LiveDocs: Real-time Document Collaboration with WebSockets and MongoDB

This project was developed as part of the "APIs with Node.js and Express" training at Alura, which can be accessed at [Alura](https://cursos.alura.com.br/formacao-node-js-express).

This repository contains the LiveDocs project, part of the final assignment for the "APIs with Node.js and Express" training at Alura. LiveDocs is a web application where two users can authenticate and access an online document (in this case, a text box) that can be edited simultaneously by both users in real-time. Updates are instantly reflected for all logged-in users with access to the document.

## Project Objectives
The project aims to achieve the following objectives:
- Implement real-time communication using WebSockets protocol.
- Utilize the Socket.IO library for easier development and WebSocket management.
- Integrate Front-end and Back-end components of the project.
- Explore different forms of client-server communication, leveraging features like Rooms and Socket.IO recognition.
- Integrate the project with MongoDB, a NoSQL database.
- Implement user registration and authentication with Socket.IO.
- Understand and apply the login flow, JWT storage, and authorization.
- Implement middlewares for server access control.
- Use namespaces to group connections.
- Manage socket information locally on the server.

## Technologies Used
- Node.js
- Express
- Socket.IO
- MongoDB
- JavaScript (ES6+)

## Environment Variables
Before running the project, create a `.env` file in the root directory of the project and define the following variables:
```
SEGREDO_JWT=your_jwt_secret
MONGO_URI=your_mongodb_connection_uri
MONGO_DB_NAME=your_mongodb_database_name
MONGO_DOCUMENTS_COLLECTION_NAME=your_mongodb_documents_collection_name
MONGO_USERS_COLLECTION_NAME=your_mongodb_users_collection_name
```

Replace `your_jwt_secret`, `your_mongodb_connection_uri`, `your_mongodb_database_name`, `your_mongodb_documents_collection_name`, and `your_mongodb_users_collection_name` with your actual values.

## Project Structure
The directory structure of the project is as follows:
```
livedocs-comunicacao-com-websockets-e-mongodb/
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── .eslintrc.json
├── public/
│   ├── index.html
│   ├── index.js
│   ├── socket-front-index.js
│   ├── cadastro/
│   │   ├── index.html
│   │   ├── cadastro.js
│   │   └── socket-front-cadastro.js
│   ├── documento/
│   │   ├── index.html
│   │   ├── documento.js
│   │   └── socket-front-documento.js
│   └── login/
│       ├── index.html
│       ├── login.js
│       └── socket-front-login.js
└── servidor/
    ├── servidor.js
    ├── socket-back.js
    ├── db/
    │   ├── dbConnect.js
    │   ├── documentosDb.js
    │   └── usuariosDb.js
    ├── middlewares/
    │   └── autorizarUsuario.js
    ├── registrarEventos/
    │   ├── cadastro.js
    │   ├── documento.js
    │   ├── inicio.js
    │   └── login.js
    └── utils/
        ├── autenticarUsuario.js
        ├── conexoesDocumentos.js
        ├── criaHashESalSenha.js
        └── gerarJwt.js
```

## How to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/goosekiing/livedocs-comunicacao-com-websockets-e-mongodb.git
   ```
2. Navigate to the project directory:
   ```sh
   cd livedocs-comunicacao-com-websockets-e-mongodb
   ```
3. Create a `.env` file in the root directory with the defined environment variables.
4. Install dependencies:
   ```sh
   npm install
   ```
5. Start the server:
   ```sh
   node servidor/socket-back.js
   ```
6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Learn More
To learn more about Node.js, Express, Socket.IO, and MongoDB, visit the respective documentation:
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [Socket.IO Documentation](https://socket.io/docs/v4/)
- [MongoDB Documentation](https://docs.mongodb.com/)

Feel free to explore, modify, and use this project for your real-time document collaboration needs!