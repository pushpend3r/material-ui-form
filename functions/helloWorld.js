"use strict";
const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <bot@gmail.com>',
    to: "pushpend3r@gmail.com",
    subject: "Hello ✔",
    text: "Hello piyush?",
    html: "<b>Hello piyush?</b>",
  });
}

exports.handler = async (event, context, callback) => {
  main().catch(console.error);
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Welcome to your first function" }),
  };
};
