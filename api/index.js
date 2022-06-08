import express from "express";


import { api } from "../config.js";
import user from "./components/user/network.js";

const app = express();

// ROUTERS
app.use("/api/user", user);


// Servidor activo
app.listen(api.port, () => {
  console.log(
    "Servidor corriendo en el puerto en el puerto =>",api.port
  );
  
});
