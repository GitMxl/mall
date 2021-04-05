<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-txt"></slot></div>
  </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props:{
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? { color : this.activeColor } : {}
    }
  },
  methods: {
    itemClick(){
      console.log(this.path)
      this.$router.push(this.path)
    }
  },
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
.tab-bar-item 
  height: 49px
  flex: 1
  text-align: center
  font-size:14px
.tab-bar-item
  img 
    width:24px
    height:24px
    vertical-align:middle
.active
  color:rgb(234,2,2)
</style>