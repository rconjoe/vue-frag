<template>
  <NavDrawer />
</template>

<script>
import NavDrawer from './NavDrawer.vue'
export default {
  name: 'Event',
  props: ['event'],
  components: {
    NavDrawer,
  },
  data: () => ({

  })
}
</script>

<style>

</style>