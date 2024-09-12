const router = require('express').Router();
const File = require('../models/file');
const path = require('path');


router.get('/:uuid',async(req , res) => {
    const file = await File.findOne({uuid: req.params.uuid})
    if(!file){
        return res.render('download',{ error : 'Link has been expired'})
    }


    const filePath = `${__dirname}/../../${file.path}`;
    console.log('Attempting to download file from:', filePath);
    res.download(filePath);
    
})
module.exports = router ;