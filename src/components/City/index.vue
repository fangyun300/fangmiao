<template>
	<div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="(item, index) in hotList" :key="index">{{item.nm}}</li>
				</ul>
			</div>
			<div class="city_sort" ref="city_sort">
				<div v-for="(item, index) in cityList" :key="index">
					<h2>{{item.index}}</h2>
					<ul>
						<li v-for="(Nitem, Nindex) in item.list" :key="Nindex">{{Nitem.nm}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li v-for="(item, index) in cityList" :key="index" @touchstart="handleToIndex(index)">{{item.index}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'city',
		data(){
			return {
				cityList:[],
				hotList:[]
			}
		},
		mounted(){
			this.axios.get('/api/cityList').then((res)=>{
				var msg = res.data.msg;
				if(msg === 'ok'){
					//[{index:'A', list:[{nm:'北京', id:12}]}]
					var cities = res.data.data.cities;
					var{cityList, hotList} = this.formatCityList(cities);
					this.cityList = cityList;
					this.hotList = hotList;
				}
			});
		},
		methods:{
			formatCityList(cities){
				var cityList = []
				var hotList = []

				//取出热门城市列表
				for(let i=0; i<cities.length; i++){
					if(cities[i].isHot === 1){
						hotList.push(cities[i])
					}
				}

				for(let i=0; i<cities.length; i++){
					var firstLetter = cities[i].py.substring(0,1).toUpperCase()
					if(toCom(firstLetter)){			//新添加index
						cityList.push({index:firstLetter, list:[{nm:cities[i].nm, id:cities[i].id}]});
					}else{											//添加到已有index中
						for(let j=0; j<cityList.length; j++){
							if(cityList[j].index === firstLetter){
								cityList[j].list.push({nm:cities[i].nm, id:cities[i].id});
							}
						}
					}
				}

				cityList.sort((n1,n2) => {
					if(n1.index > n2.index){
						return 1
					}else if(n1.index < n2.index){
						return -1
					}else{
						return 0
					}
				});

				function toCom(firstLetter){
					for(let i=0; i<cityList.length; i++){
						if(cityList[i].index === firstLetter){
							return false
						}
					}
					return true
				}
				return {
					cityList, hotList
				}
			},
			handleToIndex(index){
				var h2 = this.$refs.city_sort.getElementsByTagName('h2');
				//this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
				document.body.scrollTop = h2[index].offsetTop
			}
		}
	}
</script>
<style scoped>
	.clearfix{overflow: hidden;}
	#content .city_body {display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; margin-top: 45px; /*position: absolute;*/ width: 100%; top: 0; bottom:0;}
	.city_body .city_list{flex:1; overflow: auto; background: #fff5f0;}
	.city_body .city_list::-webkit-scrollbar{ background-color: transparent; width: 0; }
	.city_body .city_hot{margin-top: 20px;}
	.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background: #f0f0f0; font-weight: normal; }
	.city_body .city_hot ul li{float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border:1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center;-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;}
	.city_body .city_sort div{margin-top: 20px;}
	.city_body .city_sort h2{padding-left: 15px; line-height: 30px; font-size: 14px; background: #f0f0f0; font-weight: 700;}
	.city_body .city_sort ul{padding-left: 10px; margin-top: 10px;}
	.city_body .city_sort ul li{line-height: 30px;}
	.city_body .city_index{width: 20px; display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex; flex-direction:column; text-align:center; border-left:1px solid #e6e6e6; position: fixed; right:0; height: 100%;} 
</style>