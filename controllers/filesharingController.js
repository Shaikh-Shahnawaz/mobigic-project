const { upload } = require("../utils/fileUpload");
const {v4:uuid4} = require('uuid');
const { response } = require("express");
const fileSharing = require("../models/filesharingModel");

const HOST = process.env.HOST
const PORT = process.env.PORT

exports.uploadFile = async (req,res)=>{
console.log('file body ==>>',req.body)
console.log('file upload ==>>',req.file)
    try {
        const file = await new fileSharing({
            filename: req.file.filename,
            path: req.file.path,
            uuid: uuid4(),
            size: req.file.size,
          }).save();
      
          res.json({
            message: "File upload Successfully",
            data: file,
            file: `${HOST}:${PORT}/files/${file.uuid}`,
          });
    
    } catch (error) {
        console.log('Error in file upload',error)
    }

    
}

exports.showFile = async (req, res) => {
    try {
      // first check wheter file of that params are available or not
      const file = await fileSharing.findOne({ uuid: req.params.uuid });
  
      if (!file) {
        return res.render("download", { error: "Link has been expired." });
      }
  
      return res.json({
        uuid: file.uuid,
        fileName: file.filename,
        fileSize: file.size,
        // downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
      });
    } catch (error) {
      console.log(error);
      // throw new Error(error)
      return res.render("download", { error: "Something went wrong" });
    }
  };

