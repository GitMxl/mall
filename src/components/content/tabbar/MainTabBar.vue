<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/image/tabbar/11.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/12.png" alt="">
        <div slot="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="yellow">
        <img slot="item-icon" src="~assets/image/tabbar/21.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/22.png" alt="">
        <div slot="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="yellow">
        <img slot="item-icon" src="~assets/image/tabbar/31.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/32.png" alt="">
        <div slot="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="yellow">
        <img slot="item-icon"  src="~assets/image/tabbar/41.png" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/42.png" alt="">
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "component_name",
  components:{
    TabBar,
    TabBarItem
  },
  data () {
    return {

    };
  }
}

</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>
