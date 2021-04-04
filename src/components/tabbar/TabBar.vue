<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>
<style lang="stylus" ref="stylesheet/stylus">
#tab-bar 
  background: #f6f6f6
  position: fixed
  left: 0
  right: 0
  bottom: 0
  box-shadow: 0 -1px 10px rgba(255, 0, 0, 0.1)
  display: flex
</style>