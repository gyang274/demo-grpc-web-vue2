<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout row wrap>
            <v-flex xs12><br><br></v-flex>
            <v-flex xs12>
              <apps-echo />
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Echo from '@/components/Echo.vue'

export default {
  name: 'home',
  components: {
    appsEcho: Echo
  }
}
</script>
