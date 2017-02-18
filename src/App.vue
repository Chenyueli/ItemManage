<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <iheader></iheader> -->
    <!-- <isidebar></isidebar> -->
    <!-- <login></login> -->
      <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import iheader from './components/iHeader'
// import isidebar from './components/iSidebar'
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    // Hello,iHeader
    // iHeader
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.hidden{
  display: none;
}
</style>
