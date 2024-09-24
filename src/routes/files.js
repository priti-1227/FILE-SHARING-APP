const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file');
const {v4: uuid4} = require('uuid')

let storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, 'uploads/'), 
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`
        cb(null, uniqueName);
    }
})

let upload = multer({
    storage,
    limit: {fileSize: 1000000 * 100}
}).single('myfile');


//recevice post request
router.post('/', (req , res) => {
   

    //store file in db
    upload(req, res, async(err) => {
         //validate request
    if(!req.file){
        return res.json({error : 'All fields are required.'});
    }
        if(err) {
            return res.status(500).send({error: err.message})
        }
  
        console.log(req.file.path)
    //Store into Database
    const file = new File({
        filename: req.file.filename,
        uuid: uuid4(),
        path: req.file.path,
        size: req.file.size
        
    });

    //Response -> Link
    const response =  await file.save();
    return res.json({file: `${process.env.APP_BASED_URL}/files/${response.uuid}`} , );
   // "http://localhost:3000/files/c4eba3a9-9076-4a30-a91a-a12f855cb2fa"
})
})




module.exports = router;