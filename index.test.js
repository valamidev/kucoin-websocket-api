/* eslint-disable no-undef */
"use strict"

jest.setTimeout(30000)

const Kucoin = require("./index")

const client = new Kucoin()

const symbols = [
  "ACAT-BTC",
  "ACAT-ETH",
  "ACT-BTC",
  "ACT-ETH",
  "ADA-BTC",
  "ADA-USDT",
  "ADB-BTC",
  "ADB-ETH",
  "AERGO-BTC",
  "AERGO-ETH",
  "AGI-BTC",
  "AGI-ETH",
  "AION-BTC",
  "AION-ETH",
  "AIX-BTC",
  "AIX-ETH",
  "ALGO-BTC",
  "ALGO-ETH",
  "ALGO-USDT",
  "AMB-BTC",
  "AMB-ETH",
  "ANKR-BTC",
  "ANKR-ETH",
  "AOA-BTC",
  "AOA-ETH",
  "ARPA-USDT",
  "ATOM-BTC",
  "ATOM-ETH",
  "ATOM-USDT",
  "AVA-BTC",
  "AVA-ETH",
  "AVA-NEO",
  "AVA-USDT",
  "AXPR-BTC",
  "AXPR-ETH",
  "BAX-BTC",
  "BAX-ETH",
  "BCD-BTC",
  "BCD-ETH",
  "BCHABC-BTC",
  "BCHABC-ETH",
  "BCHABC-USDT",
  "BCHSV-BTC",
  "BCHSV-ETH",
  "BCHSV-USDT",
  "BNB-BTC",
  "BNB-USDT",
  "BNTY-BTC",
  "BNTY-ETH",
  "BOLT-BTC",
  "BOLT-USDT",
  "BOS-BTC",
  "BOS-ETH",
  "BPT-BTC",
  "BPT-ETH",
  "BTC-DAI",
  "BTC-NUSD",
  "BTC-PAX",
  "BTC-TUSD",
  "BTC-USDC",
  "BTC-USDT",
  "BTM-BTC",
  "BTM-ETH",
  "BTT-BTC",
  "BTT-ETH",
  "BU-BTC",
  "BU-ETH",
  "CAG-BTC",
  "CAG-ETH",
  "CAN-BTC",
  "CAN-ETH",
  "CAPP-BTC",
  "CAPP-ETH",
  "CBC-BTC",
  "CBC-ETH",
  "CHP-BTC",
  "CHP-ETH",
  "CHR-BTC",
  "CHR-NUSD",
  "CHR-USDT",
  "CHSB-BTC",
  "CHSB-ETH",
  "CHZ-BTC",
  "CIX100-USDT",
  "COFI-BTC",
  "COFI-ETH",
  "COSM-BTC",
  "COSM-ETH",
  "COTI-BTC",
  "COTI-USDT",
  "COV-BTC",
  "COV-ETH",
  "CPC-BTC",
  "CPC-ETH",
  "CRO-BTC",
  "CRPT-BTC",
  "CRPT-ETH",
  "CS-BTC",
  "CS-ETH",
  "CS-KCS"
]

test("Get connection endpoint", async () => {
  let connection = await client.MarketMatches(symbols, () => {})

  expect(connection).toBeInstanceOf(Function)

  connection()
})

test("Get connection endpoint", async () => {
  let connection = await client.MarketLevel2(symbols, () => {})

  expect(connection).toBeInstanceOf(Function)

  connection()
})
