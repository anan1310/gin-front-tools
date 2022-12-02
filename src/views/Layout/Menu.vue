<template>
  <div>
    <!-- background-color="#112f50" -->
    <!-- router :是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#112f50"
      active-text-color="#409EFF"
      router
      :collapse="isCollapse"
      unique-opened
    >
      <el-menu-item>
        <span slot="title">后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/tools" >
        <i class="el-icon-data-board"></i>
        <span slot="title">实用工具</span>
      </el-menu-item>
      <el-menu-item index="/configure">
        <i class="el-icon-setting"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>



        <i class="el-icon-data-board"></i>
        <span slot="title">个人中心</span>
   
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      // isCollapse:false
    };
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0;
  .is-active {
    background: #1e78bf !important;
    color: #fff !important;
  }
}
// .el-menu-vertical-demo{
//   background: #112f50;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// /deep/ .el-submenu{
//   .el-menu{
//     background: rgb(14, 35, 61);
//   }
// }
// /deep/ .el-menu-item:hover,.el-submenu:hover{
//     background: #0d2641;
// }
</style>