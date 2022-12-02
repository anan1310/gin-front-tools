<template>
  <div class="tools">
    <!-- 1、搜索区域 -->
    <div class="header">
     
  <div class="search"> 
      <el-input  style="width: 280px"  placeholder="请输入服务名称" v-model="inputcontent">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
  </div>
    <div class="search">
      <el-input style="width: 280px"  placeholder="请输入Ip" v-model="ipcontent">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
      <el-button type="primary">查看</el-button>
      <el-button type="primary">新增</el-button>
    </div>
    <!-- 2、表格区域展示数据 -->
    <div class="wrapper">
      <el-table :data="tableData" 
      border 
      style="width: 100%">
      <!-- 实现多选 -->
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 3、分页展示 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputcontent: "",
      ipcontent:'',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script >

<style lang="less" scoped>
.tools {
  margin: 20px;
}
.search{
  margin-left: 20px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
  .el-form-item {
    margin-bottom: 0;
    width: 100%;
  }
}
.wrapper {
  margin: 20px 0;
}
</style>