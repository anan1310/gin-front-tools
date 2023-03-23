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
  display: flex;
  .menu {
    background: #112f50;
  }
  .content {
    flex: 1;
    transition: all 0.3s;
    width: 100%;
    overflow: auto;

  }
  .isActive {
    margin-left: 64px;
  }
}
</style>