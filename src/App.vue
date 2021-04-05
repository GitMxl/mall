<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>
import MainTabBar from 'components/content/tabbar/MainTabBar'
export default {  
  name:'app',
  components:{
    MainTabBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import './assets/css/common.styl'  

</style>
