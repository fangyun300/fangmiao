<template>
	<div id="main">
		<HeaderBar title="喵喵电影院"></HeaderBar>
		<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城<i class="iconfont icon-xiangxia"></i>
				</div>
				<div class="brand_switch">
					品牌<i class="iconfont icon-xiangxia"></i>
				</div>
				<div class="brand_switch">
					特色<i class="iconfont icon-xiangxia"></i>
				</div>
			</div>
			<CiList></CiList>
		</div>
		<TabBar></TabBar>
	</div>
</template>
<script>
	import HeaderBar from '@/components/Header'
	import TabBar from '@/components/TabBar'
	import CiList from '@/components/CiList'
	export default{
		name:'cinema',
		components: {
		HeaderBar, TabBar, CiList
		}
	}
</script>
<style scoped>
	#content .cinema_menu{width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; justify-content: space-around; align-items: center;}
</style>