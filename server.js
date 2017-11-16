var express = require('express')
var path = require ('path')
var multer = require('multer')
var app = express()
var upload = multer({dest: 'uploads/'})
var size = 0;
var type = upload.single('file');
app.post('/upload',type,function (req, res, next) {
 	size = req.file.size
 	res.redirect('/getfilesize');
})
app.get('/getfilesize',function(req,res){
	res.json({filesize: size})
})
app.use(express.static(path.resolve(__dirname, "public")))
app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html')
})
app.listen(3000)