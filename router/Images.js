import { Router } from "express";
import { getImg } from "../models/image.js";
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/img')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null,`${file.fieldname}.${ext}`)
    }
})

const upload = multer({ storage:storage })

router.post('/upload',upload.single('name'),async function(req,res){
    getImg.create({
        name: req.file.originalname
    },{
        fields: ['name']
    })
    .then(img=>{res.send(img)})
    .catch(err=>{
        console.log(err)
    })
})

router.get('/get_all', async function (req, res) {
    getImg.findAll({ exclude: [] })
        .then(img => {
            res.send(img)
        })
        .catch(err => {
            console.log(err)
        })
});

export default router;