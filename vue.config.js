module.exports ={
pages:{
  index:{
    entry:"src/main.js"
  },
},
lintOnSave:false,
// 开启代理服务器(方式1)
// devServer: {
//   proxy: "http://localhost:5000"
//   }
// 开启代理服务器(方式2)
devServer: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      ws: true, //用于支持websocket
      pathRewrite: {"^/api":""},
      changeOrigin: true,    
},
    
    }
  }
}