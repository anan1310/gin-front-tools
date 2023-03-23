<template>
  
  <div>
  <div style="min-width: 1100px" > 
    <div class="header">
    导航条
    </div>
    <div class="content">
      <!-- 路由出口 -->
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
}

</style>