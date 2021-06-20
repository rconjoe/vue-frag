<template>
  <v-navigation-drawer
        v-if="!$vuetify.breakpoint.mobile"
        v-model="drawer"
        width="250px"
        permanent
        absolute
        expand-on-hover
        class="navDrawer"
      >
        <v-list class="navList">
          <v-item-group>
            <v-item
              v-for="link in links"
              :key="link.icon"
              class="pb-6 pt-4"
            >
              <div>
                <v-btn activeClass="activeTab" class="dashBtn" text block  :input-value="active" @click="routeTo(link.text)">
                      <v-icon>{{ link.icon }}</v-icon>
                    <span class="pl-4 linkText"> {{ link.text }} </span>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      {
        text: 'Philly',
        icon: 'mdi-alpha-p',
      },
      {
        text: 'STL',
        icon: 'mdi-alpha-s',
      },
      {
        text: 'Denver',
        icon: 'mdi-alpha-d',
      },
      {
        text: 'Oceanside',
        icon: 'mdi-alpha-o',
      },
      {
        text: 'Philly',
        icon: 'mdi-alpha-p-box',
      },
    ]
  }),
  methods: {
    routeTo(route) {
      this.$router.push(`event?event=${route}`)
    }
  }
}
</script>

<style scoped>
.avatarBorder{
  margin-top:80px;
  margin-bottom: 40px;
  border: 4px solid #FB4B6A;
}
.navDrawer{
background-color: #1c1c1cb2 ;
height:100%;}
.navList{
  height:100%;

}
.dashBtn.v-btn{
text-transform: none;
white-space: normal;
}
.dashBtn.v-btn span.v-btn__content{
padding-top:150px;
}
.linkText {
  font: normal 500 1vw Poppins;
}
.activeTab{
  background-color: #FA4B6B;
 color: #121212;
}
.v-btn::before{
  opacity: 0;
}



</style>