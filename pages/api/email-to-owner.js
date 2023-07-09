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
    to: "v.tasev@sftdx.com",
    subject: `Message From My Mode Ride Bot`,
    text: req.body.Name,
    html: `<div>Hi Owner Name,  <br> ${req.body.Name} has placed a request on the website. <br> <strong> The details are: </strong><br> Name:  ${req.body.Name} <br>  Email:  ${req.body.Email}<br> Option:  ${req.body.Option}<br> Details:  ${req.body.Details}<br> Address : ${req.body.Address} <br> Thanks</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
