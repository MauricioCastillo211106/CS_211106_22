import express from "express";


import { api } from "./config/config.js";
import imag from "./router/Images.js";
import profile from "./router/profile.js";
import father from "./router/fathers.js";
import soon from "./router/soons.js";
import user from "./router/user.js";

const app = express();

// ROUTERS
app.use("/models/imagen",imag);
app.use("/models/profile", profile);
app.use("/models/father", father);
app.use("/models/soon", soon);
app.use("/models/user", user);




// Servidor activo
app.listen(api.port, () => {
  console.log(
    "Servidor corriendo en el puerto en el puerto =>",api.port
  );
  
});
