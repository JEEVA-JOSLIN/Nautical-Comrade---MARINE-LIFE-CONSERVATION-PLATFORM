const express =require('express');
const cors = require('cors');
const app=express();
const port =8000;
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function (req, file, cb) {
        cb(null, './uploads'); // Specify the destination folder for file uploads
      },
    filename: function(req,file,cb)
    {
        cb(null,file.originalname);
    }
})

const upload =multer({storage:storage})
app.use(cors());
app.post('/',upload.single('file'),(req,res)=>{})
app.listen(port,()=>console.log(`listening on port ${port}`))