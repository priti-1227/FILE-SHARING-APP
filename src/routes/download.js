const router = require('express').Router();
const File = require('../models/file');
const path = require('path');
const fs = require('fs');


router.get('/:uuid',async(req , res) => {
    try {
    const file = await File.findOne({uuid: req.params.uuid})
    if(!file){
        return res.status(404).json({ error: 'Link has been expired' });
    }


    const filePath = `${__dirname}/../../${file.path}`;
    console.log('Attempting to download file from:', filePath);
    if (fs.existsSync(filePath)) {
        console.log('File exists, initiating download');
        res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
        return res.download(filePath);
    } else {
        console.log('File does not exist at the specified path');
        return res.status(404).json({ error: 'File not found on server' });
    }
} catch (err) {
    console.error('Error in download route:', err);
    return res.status(500).json({ error: 'Something went wrong' });
}
    
    
})
module.exports = router ;