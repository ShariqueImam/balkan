export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "recipientbot1213@gmail.com",
      pass: "wwikhudjvhfkjfpr",
    },
    secure: true,
  });
  // console.log(req.body)
  const mailData = {
    from: "recipientbot1213@gmail.com",
    to: req.body.Email,
    subject: `Message From My Mode Ride`,
    text: req.body.Name,
    html: `<div>Hi ${req.body.Name}. <br> My Model Ride has received your request. Our team will contact you soon <br> Thanks</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}

