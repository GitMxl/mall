<template>
  <div>
    <nav-bar class="home-bar">
      <div slot="center">购物圈</div>
    </nav-bar>
    <main-swiper></main-swiper>
  </div>
</template>

<script>
import {getHomeData} from 'network/home'
import NavBar from 'components/common/navbar/NavBar'
import MainSwiper from 'components/common/swiper/MainSwiper'
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
</style>
