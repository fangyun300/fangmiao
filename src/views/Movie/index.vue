<template>
    <div id="main">
        <HeaderBar title="喵喵电影"></HeaderBar>
        <div id="content">
            <ul class="movie_menu">
                <router-link tag="li" to="/movie/city" class="city_name">
                    <span>{{this.$store.state.city.nm}}</span><i class="iconfont icon-xiangxia"></i>
                </router-link>
                <router-link tag="li" to="/movie/nowplaying">正在热映</router-link>
                <router-link tag="li" to="/movie/commingsoon">即将上映</router-link>
                <router-link tag="li" to="/movie/search"><i class="search iconfont icon-sousuo"></i></router-link>
            </ul>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import HeaderBar from '@/components/Header'
import TabBar from '@/components/TabBar'
import {messageBox} from '@/components/JS'

export default {
    name: 'movie',
    components: {
        HeaderBar,
        TabBar
    },
    mounted(){
        setTimeout(() => {
            this.axios.get('/api/getLocation').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){
                    var nm = res.data.data.nm;
                    var id = res.data.data.id;

                    if(this.$store.state.city.id == id) return
                    messageBox({
                        title:'定位',
                        content:nm,
                        cancel:'取消',
                        ok:'切换城市',
                        handleOk:function(){
                            window.localStorage.setItem('nowNm', nm);
                            window.localStorage.setItem('nowId', id);
                            window.location.reload(); //刷新页面
                        }
                    })
                }
            });

        }, 3000)
        
        /*messageBox({
            title:'定位',
            content:'北京',
            cancel:'取消',
            ok:'切换城市',
            handleCancel:function(){
                console.log(1)
            },
            handleOk:function(){
                console.log(2)
            }
        })*/
    }
}
</script>
<style scoped>
#content{    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 1;}
#content .movie_menu {
    overflow: hidden;
    position: fixed;
    top: 40px;
    left: 0;
    height: 40px;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    overflow: hidden;

}
#content .movie_menu li{
	  float: left;
    width: 25%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #444;
    font-weight: 500;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
}
#content .movie_menu li.search{
	font-size: 30px;
        color: red;
      }
    .router-link-active {
      color: red;
      border-bottom: 2px solid red;
    }
</style>