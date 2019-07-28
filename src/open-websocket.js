"user strict"

const WS = require("ws")

const ReconnectingWebSocket = require("reconnecting-websocket")

module.exports = (url) => {
  return new Promise(function(resolve, reject) {
    const connection = new ReconnectingWebSocket(url, undefined, {
      WebSocket: WS,
      connectionTimeout: 4000,
      debug: false,
      maxReconnectionDelay: 10000,
      maxRetries: Infinity,
      minReconnectionDelay: 4000
    })

    connection.onopen = function() {
      resolve(connection)
    }
    connection.onerror = function(err) {
      reject(err)
    }
  })
}
