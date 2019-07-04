<template>
	<div id="main">
		<HeaderBar title="我的喵喵"></HeaderBar>
		<div id="content">
			<Login></Login>
		</div>
		<TabBar></TabBar>
	</div>
</template>
<script>
import HeaderBar from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default{
	name:'mine',
	components:{
	HeaderBar, TabBar, Login
	}
}
</script>
<style>
	
</style>