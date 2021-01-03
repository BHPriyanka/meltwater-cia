const multer = require('multer');

const { fileUpload, maskContent } = require('../src/api/controllers/files');

const DIR = './public/uploads';

let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

let upload = multer({ storage: storage });

const fileRoutes = (app) => {
	app.post('/api/file/fileUpload', upload.single(''), fileUpload);
	app.get('/api/file/maskContent', maskContent);
};
module.exports = fileRoutes;
