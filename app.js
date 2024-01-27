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
        const amazonPriceInt = parseInt(amazonPrice.replace(',', ''))
        amazonPriceInt <= idealPrice ? console.log(`Buy it ; Price dropped to ${amazonPriceInt}`) : console.log(`Don't but it ; Price is still ${amazonPriceInt}`) 
    } catch (error) {
        console.log(error.message)
    }
}