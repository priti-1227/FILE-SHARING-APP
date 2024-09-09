const router = require('express').Router();
const File = require('../models/file')

router.get('/:uuid', async(req, res) => {
    try {
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            // return res.render('download',{error: 'Link has been expired.'}); 
            return res.status(404).json({ error: 'Link has been expired.' });
        }

        // return res.render('download', {
        //     uuid: file.uuid,
        //     fileName: file.filename,
        //     fileSize: file.size,
        //     download: `${process.env.APP_BASED_URL}/files/download/${file.uuid}`
        //     //http://localhost:3000/files/download/frgrggg-gfgdfgfd
        // })
        return res.json({
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            download: `${process.env.APP_BASED_URL}/files/download/${file.uuid}`
        });
    } catch(err) {
        // return res.render('download',{error: 'Something went wrong.'});
        return res.status(500).json({ error: 'Something went wrong.' });
    }
        
});


module.exports = router;