const router = require('express').Router();
const File = require('../models/file')

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            return res.status(404).json({ error: 'Link has been expired.' });
        }

        res.json({
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            download: `${process.env.APP_BASED_URL}/files/download/${file.uuid}`
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error.' });
    }
        
});


module.exports = router;