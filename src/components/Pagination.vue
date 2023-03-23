<template>
    <div class="pagination">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        :prev-text="prevText"
        :next-text="nextText"
        @current-change="changePage"
        layout="prev, pager, next, jumper, ->, total"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
        required: true
      },
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      },
      prevText: {
        type: String,
        default: "上一页"
      },
      nextText: {
        type: String,
        default: "下一页"
      }
    },
    methods: {
      changePage(currentPage) {

        this.$emit("page-change", currentPage); 
        //$.emit用于父子间通行的一种方式，自组件可以向父组件发出自定义事件，父组件监听事件并响应
        //父组件通过v-on 或者@监听自定义事件，并且可以接受子组件传递的参数
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  </style>
  