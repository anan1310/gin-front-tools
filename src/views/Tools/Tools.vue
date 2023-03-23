<template>
  <div class="tools">
    <!-- 1、搜索区域 -->
    <div class="header">
      <div class="search">
        <el-input
          style="width: 280px"
          placeholder="请输入服务名称"
          v-model="inputcontent"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="search">
        <el-input
          style="width: 280px"
          placeholder="请输入Ip"
          v-model="ipcontent"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <el-button type="primary">查看</el-button>
      <el-button type="primary">新增</el-button>
    </div>
    <!-- 2、表格区域展示数据 -->
    <div class="wrapper">
      
      <el-table :data="tableData"  style="width: 100%">

        <el-table-column prop="aliasName" label="别名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="hostIp" label="主机名称" width="180" align="center">
        </el-table-column>
        <el-table-column prop="user" label="用户" width="180" align="center">
        </el-table-column>
        <el-table-column prop="hostPort" label="端口" width="180" align="center">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="180" align="center">
        </el-table-column>
        <el-table-column prop="describe" label="描述" width="190" align="center" >
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
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
      <template>

</template>

    </div>
    <!-- 3、分页展示 -->
    <Pagination :total="total" :page-size="pageSize" :current-page="currentPage" @page-change="onPageChange" />
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";
import {getTerminal,cardSave} from "../../api/terminal.js";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      inputcontent: "",
      ipcontent: "",
      total: 0,
      pageSize: 10,
      currentPage: 1,
      data: [],
    };
  },
  methods: {
    getBankCards() {
      getTerminal({"projectName":"","size":this.pageSize,"page":this.currentPage,}).then( res => {
       this.data=res.data
       this.total=res.total
     }).catch(err =>{
       console.log("err",err)
     })
    },
    onPageChange(currentPage) {
      this.currentPage = currentPage;
      // 加载数据
      this.getBankCards(); //获取到的数据列表
    }
  },
  created() {
    this.getBankCards();
  },
  computed: {
    tableData() {
      return this.data
    }
  },
};
</script >

<style lang="less" scoped>
.tools {
  margin: 20px;
  
}
.search {
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
  margin: 20px 0px;
}
</style>

