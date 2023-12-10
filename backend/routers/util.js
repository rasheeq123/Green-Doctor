const multer = require("multer");
const router = require("express").Router();
const nodemailer = require('nodemailer');   
require('dotenv').config();

const generatedOTP = {}

const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const transporter = nodemailer.createTransport(mailconfig);
const generateOTP = () =>{
    const otp = Math.floor(Math.random() * 1000000)
    console.log(otp);
    return otp;
}

const myStorage = multer({ storage: mystorage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

router.post('/sendotp',(req,res)=>{
    const otp = generateOTP();
    generatedOTP[req.body.email]=otp;
    transporter.sendMail({
        from: 'omkarsharma9548@gmail.com',
        to: req.body.email,
        subject: 'OTP for Reset Password',
        html: `<p>OTP for Reset Password is <b>${otp}</b></p>`
    });
})
.then((info) => {
    return res.status(201).json({
        msg: "OTP Sent",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
    }).catch((err) =>{
        return res.status(500).json({msg: err});
    });
})
module.exports = router;