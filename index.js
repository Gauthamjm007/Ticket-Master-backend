const express = require("express");
const startDB = require("./config/database");
const router = require("./config/router");
const app = express();
const port = 3038;
const nodemailer = require("nodemailer");

app.use(express.json());
app.use("/", router);
startDB();

app.listen(port, () => {
  console.log("listening at port 3038 .........");
});

// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing

//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "goutham.jm.1996@gmail.com",
//       pass: "xiaomimi321"
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: "goutham.jm.1996@gmail.com", // sender address
//     to: "j.mgautham15@gmail.com", // list of receivers
//     subject: "Hello Goutham jm ", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
