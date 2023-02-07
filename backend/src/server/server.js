const express = require('express');
const cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        this.principalPath = "/api/v1"

        // Middlawares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))
    }

    async conectarDB() {
        try {
          dbConnection();
          console.log("DB connected");
        } catch (error) {
          throw new Error(error);
        }
      }

    routes() {
        this.app.use(this.principalPath, require("../routes/indexRoutes"));
      }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening port', this.port);
        });
    }

}

module.exports = Server;