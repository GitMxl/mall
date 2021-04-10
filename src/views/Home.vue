<template>
  <div id="home-page">
    <nav-bar class="home-bar">
      <div slot="center">购物圈</div>
    </nav-bar>
    <main-swiper :banners=banners></main-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import MainSwiper from 'components/common/swiper/MainSwiper'
import {getHomeData} from 'network/home'
export default {
  name: "Home",
  components:{
    NavBar,
    MainSwiper
  },
  data () {
    return {
      banners:Array,
      recommends:Array
    };
  },
  created(){
    getHomeData()
    .then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }

}

</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .home-bar
    background : #f6f
    color : #fff
    text-align : center
  .swiper-slide-img
    width:100%
</style>
