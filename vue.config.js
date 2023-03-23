
const port = process.env.port  // 端口

// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
module.exports = {
  //build后的输出目录
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: false,
  // webpack-dev-server 相关配置
  /*
  devServer: {
    //获取port端口
    // host:'1.2.3.4',
    port: port,
    //如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        //代理的路径
         target: process.env.BASE_URL_REAR,
        changeOrigin: true,
        pathRewrite: { //重写路径
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  */
  devServer: {
    port: port,
    proxy: {
        '/wh-console': {
            target: 'http://124.204.36.139:9090',//
            ws: false,
            changeOrigin: true,
            pathRewrite:{//重写路径
                '^/wh-console':''
            }
        },
    },
}
};

