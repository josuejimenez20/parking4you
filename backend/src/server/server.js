const express = require('express');
const cors = require('cors');
const fileUpload = require("express-fileupload");
const { dbConnection } = require("../database/config");

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.principalPath = "/api/v1";
    this.corsOptions = {
      origin: "http://127.0.0.1:5173",
      optionsSuccessStatus: 200,
    };

    this.conectarDB();

    // Middlawares
    this.middlewares();

    // routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors(this.corsOptions));

    // Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'))

    // FileUpload Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
      })
    );
  }

  async conectarDB() {
    try {
      dbConnection();
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