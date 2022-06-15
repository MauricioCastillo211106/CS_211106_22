import express from "express";


import { api } from "./config/config.js";
import user from "./router/user.js";

const app = express();

// ROUTERS
app.use("/api/user", user);


// Servidor activo
app.listen(api.port, () => {
  console.log(
    "Servidor corriendo en el puerto en el puerto =>",api.port
  );
  
});
