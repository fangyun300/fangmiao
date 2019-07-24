<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading"></Loading>
        <BScroll v-else :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd'>
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
                <li class="pullDown">{{message}}</li>
                <li v-for="(item, index) in movieList" :key="index">
                    <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('120.180')"></div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(item.id)">{{ item.nm }}<img v-if="item.version" src="@/assets/maxs.png"></h2>
                        <p>观众评分:<span class="grade">{{ item.sc }}</span></p>
                        <p>主演：{{ item.star }}</p>
                        <p>{{ item.showInfo }}</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
            </ul>
        </BScroll>
    </div>
</template>
<script>
export default {
    name: 'nowplaying',
    data() {
        return {
            movieList: [],
            message: '',
            isLoading:true,
            preCityId:-1
        }
    },
    activated() {
        var cityId = this.$store.state.city.id

        if(this.preCityId === cityId) return

        this.axios.get('/api/movieOnInfoList?cityId='+ cityId).then((res) => {
            var msg = res.data.msg
            if (msg === 'ok') {
                this.movieList = res.data.data.movieList
                this.isLoading = false
                this.preCityId = cityId
/*                this.$nextTick(() => {
                    var scroll = new BScroll(this.$refs.movie_body, {
                        tap: true,
                        probeType: 1
                    });

                    scroll.on('scroll', (pos) => {
                        if (pos.y > 30) {
                            this.message = '加载中...'
                        }
                    });

                    scroll.on('touchEnd', (pos) => {
                        if (pos.y > 30) {
                            this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                                var msg = res.data.msg
                                if (msg === 'ok') {
                                    this.message = '加载完成！'
                                    setTimeout(() => {
                                        this.movieList = res.data.data.movieList
                                        this.message = ''
                                    }, 1000)
                                }
                            });
                        }
                    });
                })*/
            }
        });
    },
    methods: {
        handleToDetail(movieId) {
            this.$router.push('/movie/detail/1/' + movieId)
        },
        handleToScroll(pos){
            if (pos.y > 30) {
                this.message = '加载中...'
            }
        },
        handleToTouchEnd(pos){
            if (pos.y > 30) {
                this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                    var msg = res.data.msg
                    if (msg === 'ok') {
                        this.message = '加载完成！'
                        setTimeout(() => {
                            this.movieList = res.data.data.movieList
                            this.message = ''
                        }, 1000)
                    }
                });
            }
        }
    }
}
</script>
<style scoped>
#content .movie_body {
    flex: 1;
    padding: 0 10px;
    margin-top: 80px;
    margin-bottom: 60px;
    height: 100vh;
}

.movie_body ul {
    margin: 0 12px;
    overflow: auto;
}

.movie_body ul li {
    margin-top: 12px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    ;
    border-bottom: 1px #e6e6e6 sllid;
    padding-bottom: 10px;
}

.movie_body .pic_show {
    width: 64px;
    height: 90px;
}

.movie_body .pic_show img {
    width: 100%;
}

.movie_body .info_list {
    margin-left: 10px;
    flex: 1;
    position: relative;
}

.movie_body .info_list h2 {
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_body .info_list p {
    font-size: 13px;
    color: #666;
    line-height: 22px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_body .info_list .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}

.movie_body .info_list img {
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
}

.movie_body .btn_mall,
.movie_body .btn_pre {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}

.movie_body .btn_pre {
    background: #3c9fe6;
}
.movie_body .pullDown{margin: 0; padding: 0;}
</style>