<template>
  <div>
    <NavDrawer :links='links' />
  </div>
</template>

<script>
import NavDrawer from '../components/NavDrawer.vue'
export default {
  name: 'Servers',
  components: {
    NavDrawer,
  },
  data: () => ({
  })

}
</script>

<style>

</style>