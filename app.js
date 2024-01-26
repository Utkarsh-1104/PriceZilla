// const url = "https://www.amazon.in/ZEBRONICS-Zeb-Storm-Microphone-Adjustable-Lightweight/dp/B084BVXCBF/"

const nightmare = require('nightmare')

const args = process.argv.slice(2)
const url = args[0]
const idealPrice = args[1]

priceChecker()
async function priceChecker() {
    try {
        const amazonPrice = await nightmare().goto(url)
                                    .wait('.a-price-whole')
                                    .evaluate(() => document.querySelector('.a-price-whole').innerText)
                                    .end()
        amazonPrice >= idealPrice ? console.log('Buy it') : console.log('Wait for the price to drop')
    } catch (error) {
        console.log(error)
    }
}