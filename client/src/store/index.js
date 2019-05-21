import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const messages = require('./proto/echo_pb')
const services = require('./proto/echo_grpc_web_pb')

export default new Vuex.Store({
  state () {
    // const client = new services.EchoServiceClient('/enovy')
    const client = new services.EchoServiceClient('http://127.0.0.1:9090')
    return {
      client: client
    }
  },
  getters: {
    // eslint-disable-next-line
    client: (state, getters) => {
      return state.client
    }
  },
  mutations: {

  },
  actions: {
    async doEchoService (context, payload) {
      return new Promise (
        (resolve, reject) => {

          console.log(
            'echo_web_client|doEchoService|send query to server:', payload
          )

          const request = new messages.EchoRequest()
          
          request.setQuery(payload)

          // const metadata = {'content-type': 'application/grpc-web-text'};

          context.state.client.echo(
            request, {}, (error, response) => {
              if (error) {
                console.log(
                  'echo_web_client|doEchoService|error:', error
                )
                reject(new Error('echo_web_client|doEchoService|error:' + error))
              } else {
                console.log(
                  'echo_web_client|doEchoService|receive reply from server:', response.getReply()
                )
                resolve(response.getReply())
              }
            }
          )
        }
      )
    },
    doEchoServiceWithCallback (context, payload) {
      
      console.log(
        'echo_web_client|doEchoServiceWithCallback|send query to server:', payload
      )

      const request = new messages.EchoRequest()
      
      request.setQuery(payload)

      context.state.client.echo(
        request, {}, (error, response) => {
          if (error) {
            console.log(
              'echo_web_client|doEchoServiceWithCallback|error:', error
            )
          } else {
            console.log(
              'echo_web_client|doEchoServiceWithCallback|receive reply from server:', response.getReply()
            )
          }
        }
      )
    }
  }
})
