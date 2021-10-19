let url;
const env = process.env.NODE_ENV;
// 生产环境
if (env === 'production') {
    url = 'http://192.168.0.72:3000/';
    // url = '/';
}  else if(env==='test'){
    // 测试环境
    url = '/';
}else{
    url = '/';
}

export default url;
