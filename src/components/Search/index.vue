<template>
	<div class="search_body">
		<div class="search_input">
			<div class="search_input_wrapper">
				<i class="iconfont icon-sousuo"></i>
				<input type="text">
			</div>
		</div>
		<div class="search_result">
			<h3>电影/电视剧/综艺</h3>
			<ul>
				<li>
					<div class="img"><img src="/images/1.jpg"></div>
					<div class="info">
						<p><span>蜘蛛侠：英雄远征</span><span>8.5</span></p>
						<p>导演：乔·沃茨</p>
						<p>主演：汤姆·赫兰德,杰克·吉伦哈尔,塞缪尔·杰克逊,赞达亚·科尔曼,玛丽莎·托梅,迈克尔·基顿,雅各布·巴特朗</p>
					</div>
				</li>
				<li>
					<div class="img"><img src="/images/2.jpg"></div>
					<div class="info">
						<p><span>千与千寻 （千と千尋の神隠し</span><span>9.6</span></p>
						<p>导演：宫崎骏</p>
						<p>主演：周冬雨,柊瑠美,井柏然,入野自由,彭昱畅,中村彰男,田壮壮,菅原文太,王琳,夏木真理,内藤刚志</p>
					</div>
				</li>
				<li>
					<div class="img"><img src="/images/3.jpg"></div>
					<div class="info">
						<p><span>他她他她</span><span>未评分</span></p>
						<p>上映时间：2019-07-05</p>
						<p>主演：范文芳,李铭顺,戚玉武,姬他,卢洋洋,希童</p>
					</div>
				</li>
				<li>
					<div class="img"><img src="/images/4.jpg"></div>
					<div class="info">
					<p><span>爱宠大机密2</span><span>未评分</span></p>
					<p>上映时间：2019-07-05</p>
					<p>主演：冯绍峰,帕顿·奥斯瓦尔特,陈佩斯,凯文·哈特,冯小刚,哈里森·福特,郭采洁,珍妮·斯蕾特,马丽,蒂凡尼·哈迪斯</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
#content .search_body{flex:1; overflow: auto;}
	.search_body .search_input{padding: 8px 10px; background-color: #f5f5f5; border-bottom:1px solid #e5e5e5;}
	.search_body .search_input_wrapper{padding: 0 10px; border:1px solid #e6e6e6; border-radius: 5px; background: #fff; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; line-height: 33px;}
	.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
	.search_body .search_input_wrapper input{border:none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width: 100%;}
	.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6; }
	.search_body .search_result li{border-bottom: 1px dashed #c9c9c9; padding: 10px 15px; -webkit-box-sizing: border-box; 
	-moz-box-sizing: border-box; 
	box-sizing: border-box; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;}
	.search_body .search_result .img{width: 60px; float: left;}
	.search_body .search_result .img img{width: 100%;}
	.search_body .search_result .info{float: left; margin-left: 15px; flex:1;}
	.search_body .search_result .info p{height: 22px; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; line-height: 22px; font-size: 12px;}
	.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size: 18px; flex:1;}
	.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size: 16px; color: #fc7103;}
</style>