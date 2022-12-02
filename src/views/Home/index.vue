<template>
  <div class="home">
    <!-- 顶部区域 -->
    <div class="header">
      <div class="item">
        <!-- 总销售额 -->
        <div class='num'>726,520</div>
        <div class="bottom">今日销售额：3,442</div>
      </div>
      <div class="item">访问量
        <div class='num'>836,175</div>
         <div class="bottom">今日访问量：3,442</div>
      </div>
      <div class="item">访问量
        <div class='num'>126,878</div>
         <div class="bottom">今日销售额：3,442</div>
      </div>
      <div class="item">支付量
        <div class='num'>6,402</div>
         <div class="bottom">今日支付量：3,442</div>
      </div>
    </div>
<!--     
    <div style="display:flex;">
      <div style="width:200px;height:200px;background:pink" id='box11'></div>
      <div style="width:200px;height:200px;background:pink" id='box12'></div>
    </div>
    <div class="header" >
      <div class="item" v-for="item in totalData" :key="item.id">
        {{ item.title }}
        <div class="num">{{ item.total }}</div>
        <div class="bottom">今日销售额: {{ item.current }}</div>
      </div>
    </div>

    !-- 访问时长 -->
    <!-- <div class="content">
      <div class="time-info" id='box13'>
        <div class="title">月销售额</div>
        <div id="charts" style="width: 100%; height: 360px"></div>
      </div>
      <div class="area" id="box1">地区分布</div>
    </div> -->

    <!-- 最新内容 -->
    <!-- <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最新内容</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增产品</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary">产品管理</el-button>
          <el-button>消息管理</el-button>
          <el-button>内容管理</el-button>
        </div>
      </el-card>
    </div> -->
  </div> 
</template>

<script>

</script>

<style lang='less' scoped>

.home {
  margin: 10px;
}
.header {
  display: flex;
  padding-right: 30px;
  .item {
    flex: 1;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    color: #fff;
    // text-align: center;
    position: relative;
    .num {
      font-size: 22px;
      margin: 10px;
      color: #fff;
    }
    .bottom {
      position: absolute;
      border-top: 1px solid rgb(246, 245, 245);
      padding: 10px 20px;
      bottom: 0;
      right: 0;
      left: 0;
      color: #fff;
      font-weight: normal;
    }
  }
  .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
  }
  .item:nth-child(2) {
    background-image: linear-gradient(#409eff, #2e556e);
  }
  .item:nth-child(3) {
    background-image: linear-gradient(#b54fa8, #713c7a);
  }
  .item:nth-child(4) {
    background-image: linear-gradient(#1cd2f1, #39717a);
  }
}
.content {
  margin: 20px;
  display: flex;
  height: 400px;
  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }
  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }
}
.home-footer {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
  .box-card {
    flex: 1;
    margin-right: 30px;
    span {
      font-weight: 600;
    }
  }
}
</style>