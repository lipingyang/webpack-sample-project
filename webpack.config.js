module.exports = {
	devtool:'eval-source-map',

	entry: __dirname + "/app/main.js",//唯一入口文件
	output:{
		path:__dirname + "/public",//打包后文件的存放地址
		filename:"bundle.js"//打包后输出的文件名
	},
    
    module:{
    	loaders:[
          {
          	test:/\.json$/,
          	loader:"json"
          },
          {
          	test:/\.js$/,
          	exclude:/node_modules/,
          	loader:'babel',//在webpack的module部分的loader里进行配置即可
          	query:{
          		presets:['es2015','react']
          	}
          },
          {
          	test:/\.css$/,
          	loader:'style!css?modules'//添加对样式表的处理
          }
    	]
    },

	devServer:{
		contentBase:"./public",//本地服务器所加载的页面所在的目录
		colors:true,//终端中输出结果为彩色
		historyApiFallback:true,//不跳转
		inline:true//实时刷新
	}
}