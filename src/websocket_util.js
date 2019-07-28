"use strict"

const util = {
  ping: () => {
    return JSON.stringify({
      id: Date.now(),
      type: "ping",
      response: true
    })
  },

  /*
  Topics:

  /market/match:{symbol},{symbol}...
  /market/ticker:{symbol},{symbol}...
  /market/snapshot:{symbol},{symbol}...
  /market/level2:{symbol},{symbol}...
  
  */

  subscribe: (topic, symbols) => {
    return JSON.stringify({
      id: Date.now(),
      type: "subscribe",
      topic: topic + symbols.join(","),
      response: true
    })
  }
}

module.exports = util
