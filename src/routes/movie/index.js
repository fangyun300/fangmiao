export default{
	path: '/movie',
	name:'movie',
	component:() => import('@/views/Movie'),
	children:[
		{
			path: 'city',
			component:() => import('@/components/City')
		},
		{
			path: 'nowplaying',
			component:() => import('@/components/NowPlaying')
		},
		{
			path: 'commingsoon',
			component:() => import('@/components/CommingSoon')
		},
		{
			path: 'search',
			component:() => import('@/components/Search')
		},
		{
			path:'detail/1/:movieId',
			components:{
				default:() => import('@/components/NowPlaying'),
				detail:() => import('@/views/Movie/detail')
			},
			props:{
				detail:true
			}
		},
		{
			path:'detail/2/:movieId',
			components:{
				default:() => import('@/components/CommingSoon'),
				detail:() => import('@/views/Movie/detail')
			},
			props:{
				detail:true
			}
		},
		{
			path:'/movie',
			redirect:'/movie/nowplaying'
		}
	]
}