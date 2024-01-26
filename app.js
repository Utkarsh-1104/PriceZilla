const url = "https://www.amazon.in/ZEBRONICS-Zeb-Storm-Microphone-Adjustable-Lightweight/dp/B084BVXCBF/"

const nightmare = require('nightmare')

priceChecker()
async function priceChecker() {
    try {
        const amazonPrice = await nightmare().goto(url)
                                    .wait('.a-price-whole')
                                    .evaluate(() => document.querySelector('.a-price-whole').innerText)
                                    .end()
        amazonPrice <= 450
        ? console.log('Buy it') : console.log('Wait for the price to drop')
    } catch (error) {
        console.log(error)
    }
}