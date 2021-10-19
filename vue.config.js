// 生产环境特殊配置
module.exports = {
    //反向代理
    devServer: {
         proxy: 'http://192.168.0.72:3000'
       // proxy: 'http://192.168.1.3:3000'
    },
    publicPath:process.env.NODE_ENV==='production'?'http://localhost:3000/public/dist':'/'

}