<template>
  <v-layout row wrap>
    <!-- inputs message -->
    <v-flex xs12>
      <v-text-field
        prepend-icon="style" label="Query"
        v-model="msg"
        @keyup.native.enter="getMsgs(msg)"
      ></v-text-field>
    </v-flex>
    <!-- main send button -->
    <v-flex xs12>
      <v-btn 
        block 
        class="primary white--text"
        @click.native="getMsgs(msg)"
      >
        <v-icon dark>send</v-icon>&nbsp;&nbsp;
        Send Message To GRPC Echo Service
      </v-btn>
    </v-flex>
    <!-- output message -->
    <v-flex>
      <v-timeline>
        <v-timeline-item
          v-for="(ikmsgs, index) in msgs"
          :key="index"
          color="primary"
          large
        >
          <template v-slot:opposite>
            <span>Echo Server</span>
          </template>
          <v-card class="elevation-2">
            <v-card-text>
              {{ ikmsgs }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script>
  // eslint-disable-next-line
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'echo',
    props: {
      
    },
    data: () => ({
      msg: '',
      msgs: []
    }),
    methods: {
      ...mapActions({
        doEchoService: 'doEchoService',
        doEchoServiceWithCallBack: 'doEchoServiceWithCallback',
      }),
      getMsgs (msg) {
        this.doEchoService(
          msg
        ).then(
          response => {
            this.msgs.push(response)
          }
        ).catch(
          error => {
            this.msgs.push('Error:' + error)
          }
        )
        // this.doEchoServiceWithCallBack(msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
