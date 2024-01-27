// const url = "https://www.amazon.in/ZEBRONICS-Zeb-Storm-Microphone-Adjustable-Lightweight/dp/B084BVXCBF/"
require('dotenv').config()
const nightmare = require('nightmare')
const nodemailer = require('nodemailer')

const args = process.argv.slice(2)
const url = args[0]
const idealPrice = args[1]
const HOST = process.env.HOST
const EMAIL_ID = process.env.EMAIL_ID
const PASS = process.env.PASS

var transporter = nodemailer.createTransport({
  host: HOST,
  port: 587,
  auth: {
    user: EMAIL_ID,
    pass: PASS,
  },
});

const sendEmail = async (sub, body) => {
  await transporter.sendMail({
    from: EMAIL_ID,
    to: "hackrgpv@gmail.com",
    subject: sub,
    text: body
  })
} 


priceChecker()
async function priceChecker() {
    try {
        const amazonPrice = await nightmare().goto(url)
                                    .wait('.a-price-whole')
                                    .evaluate(() => document.querySelector('.a-price-whole').innerText)
                                    .end()
        const amazonPriceInt = parseInt(amazonPrice.replace(',', ''))
        if (amazonPriceInt <= idealPrice) {  
          await sendEmail('Buy it', `Price dropped to ${amazonPriceInt}`)
          console.log('email sent')
        } 
    } catch (error) {
        await sendEmail('PriceZilla internal error occured', error.message)
    }
}