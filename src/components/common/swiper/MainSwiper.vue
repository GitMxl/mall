<template>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,i) in banners" :key="i">
        <img :src="item.image" class="swiper-slide-img" alt="" srcset="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
  export default {
    name:'MainSwiper',
    props:{
      banners:null
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return {
        swiperOptions: {
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    directives: {
      swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  };
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .swiper-slide-img
    width:100%
</style>
