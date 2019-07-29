const Kucoin = require("./index")

const client = new Kucoin()

// Maximum 100 Symbol / Connection!
const symbols = ["BTC-USDT", "ETH-BTC"]

let test = async () => {
  let connection = await client.MarketLevel2(symbols, (e) => {
    console.log(e)
  })

  // With calling connection() it close the socket
  setTimeout(() => {
    // Close socket
    console.log("Close socket!")
    connection()
  }, 10000)
}

// Start
test()
