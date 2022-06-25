// Dependencias
import { Router } from "express";

// Importaciones
import {getProfile} from "../models/Profile.js"
// import {getProfile} from "./models/Profile.js";

// Inicialización dependencias
const router = Router();

var allow = ["http://localhost:3001"];
var corsOp = function (req, callback) {
  var corsOpt;
  if (allow.indexOf(req.header("origin")) !== -1) {
    corsOpt = {
      origin: true,
    };
  } else {
    corsOpt = { origin: false };
  }
  callback(null, corsOpt);
};


//Get Sequelize
router.get("/all_Profile_orm", async function (req, res) {
    getProfile
    .findAll({
      attributes: ["id", "username"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
//Delete Using Sequelize
router.delete("/delete_Profile_orm", async function (req, res) {
  let id = req.query.id;
  console.log("id:" + req.query.id);
  getProfile
    .destroy({
      where: {
        id: id,
      },
    })
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((e) => {
      _success(req, res, e, 200);
    });
});

//update using Sequelize
router.put("/update_profile_orm", async function (req, res) {
  let id = req.query.id;
  let newDatas = req.query;
  getProfile
    .findOne({ where: { id: id } })
    .then((r) => {
      r.update(newDatas);
      _success(req, res, r, 200);
      console.log("simon");
    })
    .catch((e) => {
      _success(req, res, e, 400);
      console.log("mal");
    });
});

//post Sequelize
router.post("/register_profile_orm", async function (req, res) {
    getProfile
    .create({
      id: req.query.id,
      username: req.query.username,

    })
    .then((r) => {
      _success(req, res, r, 200);
      console.log("simon");
    })
    .catch((e) => {
      _success(req, res, e, 400);
    });
});

export default router;