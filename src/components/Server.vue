<template>
  <div>
    <NavDrawer />
  </div>
</template>

<script>
import NavDrawer from '../components/NavDrawer.vue'
export default {
  name: 'Server',
  components: {
    NavDrawer,
  },
  props: ['server']

}
</script>

<style>

</style>