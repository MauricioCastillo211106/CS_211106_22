const response = require('../../../network/response.Js')
const express = require('express');

const router = express.Router();

//Selectdb


//Register
router.post('/register',function (req, res) {
    console.log(req.query);
    res.send({
        token:"token",
        id_user:"id_user",
        success:"ok",
    });
});

//Login
router.post('/login',function (req, res) {
    console.log(req.query);
    var username=req.query.username
    res.send({
        username,
        token:"token",
        id_user:"id_user",
        success:"ok",
    });
});

router.get('/succes1',function (req, res) {
    response.success(req, res, '', 200);
    // res.send({
    //     success:"succes 1",
    // });
});

module.exports = router;