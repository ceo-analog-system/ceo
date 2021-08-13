const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = (app)=>{
      app.use(createProxyMiddleware("/api",{
          target:"http://120.79.147.32:8089",
          changeOrigin:true,
          pathRewrite:{
              "^/api":"/"
            },
      }))
}