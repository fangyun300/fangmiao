<template>
	<div class="movie_body">
		<ul>
			<!-- <li>
				<div class="pic_show"><img src="/images/1.jpg"></div>
				<div class="info_list">
					<h2>蜘蛛侠：英雄远征 （Spider-Man: Far From Home）</h2>
					<p>导演：乔·沃茨</p>
					<p>主演：汤姆·赫兰德,杰克·吉伦哈尔,塞缪尔·杰克逊,赞达亚·科尔曼,玛丽莎·托梅,迈克尔·基顿,雅各布·巴特朗</p>
					<p>类型：动作,冒险,科幻</p>
				</div>
				<div class="btn_mall">购票</div>
			</li> -->
			<li v-for="(item, index) in movieList" :key="index">
				<div class="pic_show"><img :src="item.img | setWH('120.180')"></div>
				<div class="info_list">
					<h2>{{ item.nm }}<img v-if="item.version" src="@/assets/maxs.png"></h2>
					<p>观众评分:<span class="grade">{{ item.sc }}</span></p>
					<p>主演：{{ item.star }}</p>
					<p>{{ item.showInfo }}</p>
				</div>
				<div class="btn_mall">购票</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'nowplaying',
		data(){
				return {
					movieList:[]
				}
		},
		mounted(){
			this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
				var msg = res.data.msg
				if(msg === 'ok'){
						this.movieList = res.data.data.movieList
				}
			});
		}
	}
</script>
<style scoped>
	.movie_body ul{ margin: 0 12px; overflow: hidden; }
	.movie_body ul li{margin-top: 12px; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; align-items: center;; border-bottom: 1px #e6e6e6 sllid;padding-bottom: 10px;}
	.movie_body .pic_show{ width: 64px; height: 90px; }
	.movie_body .pic_show img{width: 100%;}
	.movie_body .info_list{margin-left: 10px; flex:1; position: relative;}
	.movie_body .info_list h2{font-size: 17px; line-height: 24px; width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
	.movie_body .info_list p{font-size: 13px; color: ##666; line-height: 22px; width: 200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
	.movie_body .info_list .grade{font-weight: 700; color: #faaf00; font-size: 15px;}
	.movie_body .info_list img{width: 50px; position: absolute; right: 10px; top: 5px;}
	.movie_body .btn_mall, 	.movie_body .btn_pre{width: 47px; height: 27px; line-height: 28px; text-align: center; background: #f03d37; color: #fff; border-radius:4px;font-size: 12px; cursor: pointer;}
	.movie_body .btn_pre{background: #3c9fe6;}
</style>