const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { addCollection, updateCollection, deleteCollection, getCollection } = require('../controller/adminController');
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    },
});
// Add this middleware before your route handlers
router.use((req, res, next) => {
    console.log('Request payload size:', req.headers['content-length']);
    next();
});

router.use(bodyParser.json({ limit: '100mb' }));
router.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));


const upload = multer({
    storage: storage,
   limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB
    fieldSize: 100 * 1024 * 1024, // 100 MB
},
});

router.post('/addCollection', upload.single('image'), addCollection);
router.post('/updateCollection', updateCollection);
router.post('/deleteCollection', deleteCollection);
router.post('/getCollection', getCollection);

module.exports = router;
