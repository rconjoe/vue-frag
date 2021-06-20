<template>
  <v-app>
    <v-app-bar
      app
      color="red darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="FRAGADELPHIA"
          class="shrink mr-1"
          contain
          src="https://pbs.twimg.com/profile_images/1181671648480632833/F6ffwnWL_400x400.jpg"
          transition="scale-transition"
          width="50"
        />

        <h2> frag 15</h2>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        rounded
        text
        to='/'
      > HOME
      </v-btn>
      <v-btn
        rounded
        text
        to='/events'
      > EVENTS
      </v-btn>
      <!-- <v-btn
        rounded
        text
        to='/servers'
      > SERVERS
      </v-btn> -->
      <v-btn
        href="https://github.com/rconjoe/vue-frag"
        target="_blank"
        text
      >
        <span class="mr-2">repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
      <v-alert
        class='errorMessage'
        dismissible
        id='alert'
        outlined
        :icon='alert.icon'
        :color='alert.color'
        v-model='alert.show'
        type='warning'
        >
        {{ alert.message }}
      </v-alert>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: mapState({
    alert: state => state.alert
  })
};
</script>

<style scoped>
.errorMessage {
  position: fixed !important;
  width: 50vw;
  left: 25vw;
  z-index: 5;
  background-color: black !important;
}
</style>