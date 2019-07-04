<template>
	<div id="main">
		<HeaderBar title="喵喵电影"></HeaderBar>
		<div id="content">
			<div class="movie_menu">
				<router-link tag="div" to="/movie/city" class="city_name">
					<span>大连</span><i class="iconfont icon-xiangxia"></i>
				</router-link>
				<div class="hot_switch">
					<router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
					<router-link tag="div" to="/movie/commingsoon" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry"><i class="iconfont icon-sousuo"></i></router-link>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<TabBar></TabBar>
	</div>
</div>
</template>
<script>
import HeaderBar from '@/components/Header'
import TabBar from '@/components/TabBar'
export default{
	name:'movie',
	components:{
	HeaderBar, TabBar
	}
}
</script>
<style scoped>
	#content .movie_menu{width: 100%; height: 45px; border-bottom: 1px solid #e6e6e6; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; justify-content: space-between;}
	.movie_menu .city_name{margin-left: 20px; height: 100%; line-height: 45px;}
	.movie_menu .city_name.active{color: #ef4238; border-bottom: 2px #ef4238 solid;}
	.movie_menu .hot_switch{display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; height: 100%; line-height: 45px;}
	.movie_menu .hot_item{font-size: 15px; color: #666; width: 80px; text-align: center;
		margin: 0 12px; font-weight: 700;}
	.movie_menu .hot_item.active{color: #ef4238; border-bottom:2px solid #ef4238;}
	.movie_menu .search_entry{ margin-right: 20px; height: 100%; line-height: 45px; }
	.movie_menu .search_entry.active{color: #ef4238; border-bottom:2px solid #ef4238;}
	.movie_menu .search_entry i{font-size: 24px; color: red;}
</style>