<template>
	<div class="movie_body">
		<ul>
			<li>
				<div class="pic_show"><img src="/images/3.jpg"></div>
				<div class="info_list">
					<h2>他她他她</h2>
					<p>上映时间：2019-07-05</p>
					<p>主演：范文芳,李铭顺,戚玉武,姬他,卢洋洋,希童</p>
					<p>剧情介绍：三年前的一场车祸，改变了所有人的命运。随着车祸肇事者的出狱，所有当事人都不得不面对残酷的真相，并审视自己的内心。复仇还是救赎？善念还是贪欲？都在人性的一念之间。</p>
				</div>
				<div class="btn_pre">预售</div>
			</li>
			<li>
				<div class="pic_show"><img src="/images/4.jpg"></div>
				<div class="info_list">
					<h2>爱宠大机密2 （The Secret Life of Pets 2）</h2>
					<p>上映时间：2019-07-05</p>
					<p>主演：冯绍峰,帕顿·奥斯瓦尔特,陈佩斯,凯文·哈特,冯小刚,哈里森·福特,郭采洁,珍妮·斯蕾特,马丽,蒂凡尼·哈迪斯</p>
					<p>导演：克里斯·雷纳德 主演：冯绍峰,帕顿·奥斯瓦尔特,陈佩斯,凯文·哈特,冯小刚,哈里森·福特,郭采洁,珍妮·斯蕾特,马丽,蒂凡尼·哈迪斯 类型：动作,冒险,喜剧 制片国家/地区：美国 片长：86分钟 剧情介绍：《爱宠大机密2》将延续2016年夏天轰动一时的《爱宠大机密》的故事，讲述宠物在我们每天离家工作或上学后的生活。照明娱乐创始人兼首席执行官克里斯·梅勒丹德利和他长久以来的合作伙伴珍娜·海莉将共同制作这部续集。</p>
				</div>
				<div class="btn_pre">预售</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'commingsoon'
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