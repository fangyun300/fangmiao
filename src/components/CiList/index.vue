<template>
	<div class="cinema_body">
		<ul>
			<li>
				<div>
					<span>徐氏杜比MAX影城</span>
					<span class="q"><span class="price">34.9</span>元起</span>
				</div>
				<div class="address">
					<span>婺城区八一南街与环城南路交叉口印象城大润发三楼徐氏影城</span>
					<span>联系电话：0579-82583571</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
			<li>
				<div>
					<span>金华时代国际影城</span>
					<span class="q"><span class="price">33.4</span>元起</span>
				</div>
				<div class="address">
					<span>婺城区李渔路888号世贸中心B座5楼（兰溪街步行街观光电梯直达5楼）</span>
					<span>联系电话：0579-89161788</span>
				</div>
				<div class="card">
					<div>小吃</div>
					<div>折扣卡</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'cilist'
	}
</script>
<style scoped>
	#content .cinema_body{ flex:1; overflow: auto; }
	.cinema_body ul{padding: 20px;}
	.cinema_body li{border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
	.cinema_body div{margin-bottom: 10px;}
	.cinema_body .q{font-size: 11px; color: #f03d37;}
	.cinema_body .price{font-size: 18px;}
	.cinema_body .address{font-size: 13px; color: #666;}
	.cinema_body .address span:nth-of-type(2){float: right;}
	.cinema_body .card{display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;}
	.cinema_body .card div{padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border:1px solid #f90; font-size: 13px;}
	.cinema_body .card div.or{color: #f90; border:1px solid #f90;}
	.cinema_body .card div.bl{color: #589daf; border:1px solid #589daf;}
</style>