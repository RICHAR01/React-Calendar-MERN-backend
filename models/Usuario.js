const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usuario = model("Usuario", usuarioSchema);

module.exports = Usuario;
