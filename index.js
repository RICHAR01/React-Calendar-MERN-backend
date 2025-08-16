const path = require("path");
const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const cors = require("cors");

// Crear el servidor de express
const app = express();

// Database
dbConnection();

//Cors
app.use(cors());

// Middleware Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.use("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
);

//Rutas
// TODO: auth // crear, login, renew
// TODO: CRUD: Eventos
// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
