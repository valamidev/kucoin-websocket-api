"use strict"

const util = require("./websocket_util")
const openWebSocket = require("./open-websocket")

const openMarketMatches = async (BASE, symbols, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000)

      // Subscribe
      w.send(util.subscribe("/market/match:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}

const openMarketLevel2 = async (BASE, symbols, cb) => {
  const w = await openWebSocket(`${BASE}`)

  w.onmessage = (msg) => {
    let msg_data = JSON.parse(msg.data)

    if (msg_data.type == "error") {
      //console.log("Error!", msg)
    }
    // Connect or Reconnect fire the subscribe!
    if (msg_data.type == "welcome") {
      //Add heartbeat
      setInterval(() => {
        w.send(util.ping())
      }, 20000)

      // Subscribe
      w.send(util.subscribe("/market/level2:", symbols))
    }

    if (msg_data.type == "message") {
      cb(msg_data.data)
      // console.log("On message data", msg_data)
    }
  }

  return () => {
    w.close(1000, "Close handle was called", { keepClosed: true })
  }
}
module.exports = { openMarketMatches, openMarketLevel2 }
