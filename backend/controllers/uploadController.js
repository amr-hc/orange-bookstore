
const multer = require("multer");
const fs = require('fs');
const crypto = require('crypto');



const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb)=>{
  if(file.mimetype.startsWith("image")){
    cb(null, true);
  }else{
    cb(new Error("Can upload images only"), false);
  }

};

const upload = multer({
  storage : multerStorage,
  fileFilter : multerFilter
});

exports.uploadPhoto = upload.single("photo");

const extension = (req)=>req.file.originalname.split('.').pop();
exports.extension = extension;

exports.saveImage =(folder,req,res,next)=>{
  req.body.photo = crypto.randomBytes(10).toString('hex') + Date.now() + '.' + extension(req);

  fs.writeFile(`images/${folder}/${req.body.photo}`, req.file.buffer, err => {

      if (err) 
        next(Error("Can't save your photo"));
    
  });
  }