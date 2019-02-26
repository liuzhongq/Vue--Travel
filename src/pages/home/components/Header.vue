<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe615;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  //@import--样式引用样式不能直接用import，需加@
  //~@-- @符表示src目录，在css中引入其它css需加~
  @import '~styles/varibles.styl'
  .header
    display flex
    // 1rem = html font-size,相对大小
    line-height : .86rem
    background :$bgColor
    color : #fff
    .header-left
      width : .64rem
      float :left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height : .64rem
      line-height : .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius :.1rem
      color: #ccc
    .header-right
      width : 1.24rem
      float :right
      text-align center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
