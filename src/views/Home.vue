<template>
  <div style="height: 100%">
    <Menu/>
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.query.sp === 'true') {
      app.classList.add('sp')
      app.classList.add('white')
      app.classList.remove('zm')
      app.classList.remove('sd')
    } else if (this.$route.query.sd === 'true') {
      app.classList.add('sd')
      app.classList.add('white')
      app.classList.remove('zm')
      app.classList.remove('sp')
    }
  }
}
</script>

