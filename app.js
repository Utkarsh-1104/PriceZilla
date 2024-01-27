// const url = "https://www.amazon.in/ZEBRONICS-Zeb-Storm-Microphone-Adjustable-Lightweight/dp/B084BVXCBF/"
require('dotenv').config()
const nightmare = require('nightmare')
const nodemailer = require('nodemailer')

const args = process.argv.slice(2)
const url = args[0]
const idealPrice = args[1]
EMAIL_ID = process.env.EMAIL_ID
EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: EMAIL_ID,
  to: "hackrgpv@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

priceChecker()
async function priceChecker() {
    try {
        const amazonPrice = await nightmare().goto(url)
                                    .wait('.a-price-whole')
                                    .evaluate(() => document.querySelector('.a-price-whole').innerText)
                                    .end()
        const amazonPriceInt = parseInt(amazonPrice.replace(',', ''))
        amazonPriceInt <= idealPrice ? console.log(`Buy it ; Price dropped to ${amazonPriceInt}`) : console.log(`Don't but it ; Price is still ${amazonPriceInt}`) 
    } catch (error) {
        console.log(error.message)
    }
}