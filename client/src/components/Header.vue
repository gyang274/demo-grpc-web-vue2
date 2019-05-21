<template>
  <v-content>
    <!--head toolbar-->
    <v-toolbar fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs1>
        <router-link to="/">
          <v-chip>
            <v-icon class="grey--text">whatshot</v-icon>
          </v-chip>
          <strong class="black--text">&nbsp;Home</strong>
        </router-link>
      </v-flex>
      <v-flex xs1>
        <router-link to="/about">
          <v-chip>
            <v-icon class="grey--text">description</v-icon>
          </v-chip>
          <strong class="black--text">&nbsp;About</strong>
        </router-link>
      </v-flex>
    </v-toolbar>
  </v-content>
</template>

<script>
export default {
  name: 'apps-header',
  data: () => (
    {
      // head toolbar
      title: "Echo Web Client",
    }
  )
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
