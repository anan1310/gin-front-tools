<template>
  <div class="layout">
    <!-- 左侧导航区域 -->
   <Menu class="menu"></Menu>
    <!-- 右侧内容区域 -->
    <Content class="content"></Content>
  </div>
</template>

<script>
import  Menu  from "./Menu.vue";
import  Content  from "./Content.vue";
export default {
 components:{
 Menu,
 Content
 }
}
</script>

<style lang='less' scoped>
.layout {
  .menu {
    background: #112f50;
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 200px;
    transition: all 0.3s;
  }
  .isActive {
    margin-left: 64px;
  }
}
</style>