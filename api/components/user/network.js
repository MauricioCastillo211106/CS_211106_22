// Dependencias
import { Router } from "express";

// Importaciones
import { success as _success } from "../../../network/response.js";
import { getData } from "../../../model/db.js";
import { getUsers } from "../../../model/users.js";

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

// Get
router.get("/list", async function (req, res) {
  console.log("Hola");
  const client = await getData();

  const query_request = {
    text: "select * from tbl_usersdb order by id",
  };
  client.query(query_request, (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

// Post
router.post("/register", async function (req, res) {
  // Realizar coneccion a db
  const client = await getConnection();

  let username = req.query.username;
  let email = req.query.email;
  let password = req.query.password;
  let phone_number = req.query.phone_number;

  const query_request = {
    text: "INSERT INTO tbl_usersdb (username, email, password, phone_number) VALUES ($1, $2 ,$3 ,$4)",
    values: [username, email, password, phone_number],
  };

  client
    .query(query_request)
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((e) => {
      _success(req, res, e, 200);
    });
});

// Delete
router.delete("/delete", async function (req, res) {
  console.log("id:" + req.query.id);
  const client = await getConnection();

  let id = req.query.id;

  const query_request = {
    text: "DELETE FROM tbl_usersdb WHERE id= $1",
    values: [id],
  };
  client
    .query(query_request)
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((e) => {
      _success(req, res, e, 200);
    });
});

// update user

router.patch("/update", async function (req, res) {
  const client = await getConnection();

  let id = req.query.id;
  let username = req.query.username;
  let email = req.query.email;
  let password = req.query.password;
  let phone_number = req.query.phone_number;
  const query_request = {
    text: "update tbl_usersdb set username=$2, email=$3 , password=$4 , phone_number=$5 where id=$1",
    values: [id, username, email, password, phone_number],
  };
  client
    .query(query_request)
    .then((r) => {
      _success(req, res, r, 200);
    })
    .catch((e) => {
      _success(req, res, e, 200);
    });
});

// Login
router.post("/login", function (req, res) {
  console.log(req.query);
  var username = req.query.username;
  res.send({
    username,
    token: "token",
    id_user: "id_user",
    success: "ok",
  });
});
//Get Sequelize
router.get("/all_users_orm", async function (req, res) {
  getUsers
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
router.delete("/delete_user_orm", async function (req, res) {
  let id = req.query.id;
  console.log("id:" + req.query.id);
  getUsers
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
router.put("/update_user_orm", async function (req, res) {
  let id = req.query.id;
  let newDatas = req.query;
  getUsers
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
router.post("/register_user_orm", async function (req, res) {
  getUsers
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
