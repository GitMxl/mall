<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>
import MainTabBar from 'components/content/MainTabBar'
export default {  
  name:'app',
  components:{
    MainTabBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope="this api replaced by slot-scope in 2.5.0+">
  @import './assets/css/common.styl'  

</style>
