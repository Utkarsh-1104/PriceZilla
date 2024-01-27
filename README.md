# PriceZilla

## Overview

PriceZilla is a simple Node.js script that helps you track prices of products on Amazon. It takes the Amazon product URL, your desired price, and your email as arguments. The script then crawls the provided URL, checks if the listed price is less than the specified amount, and sends you an email notification if a deal is found.

## Features

- Monitors Amazon product prices
- Sends email notifications for potential deals
- Alerts you in case of errors

## Prerequisites

Before using PriceZilla, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/PriceZilla.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PriceZilla
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To use PriceZilla, run the script with the following command:

```bash
node pricezilla.js <amazon_product_url> <desired_price> <your_email>
```

Replace `<amazon_product_url>`, `<desired_price>`, and `<your_email>` with the appropriate values.

Example:

```bash
node pricezilla.js https://www.amazon.com/product12345 50 john.doe@example.com
```

## License

This project is licensed under the MIT License
