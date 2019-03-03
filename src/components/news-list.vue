<template>
  <div>
    <demo-header></demo-header>
    <div id="NewsList">
      <scroller :on-refresh="refresh" :on-infinite="infinite">
        <div v-for="item in items" class="news-item">
          <ul class="page-loadmore-list">
            <li v-for="(item,index) in items" class="page-loadmore-listitem">
              <router-link :to="{path:'/news_details',query:{ id:index }}">
                <div class="list-l">
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.time }}</p>
                </div>
                <div class="list-r">
                  <img :src="item.pic" alt="">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
import DemoHeader from './DemoHeader'
import axios from 'axios';
import { Message } from 'iView';
export default {
  components: {
    DemoHeader
  },
  data() {
    return {
      items: [],
      offset: 0,
      limit: 5
    };
  },
  methods: {
    getDate(offset, fn) {
      axios.get('https://bird.ioliu.cn/v1?url=http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=' + this.limit + '&appkey=c0b10d8d0569894a', { params: { annouName: '新闻公告', begNumber: offset, pageSize: this.limit } }).then((data) => {
        if (data.data.status == 0) {
          var list = data.data.result.list;
          if (list.length < 10) { //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
            this.offset = 0
            fn(true)
            // return
          } else {
            if (fn) fn()
          }
          if (offset === 1) {
            this.items = list //如果是想下滑动，刷新数据 就让items等于最新数据
          } else {
            this.items = this.items.concat(list) //否则就把数据拼接
          }
        } else {
          return false;
        }
      }).catch((error) => {
        Message.error('请求超时!')
      });
    },
    infinite: function(done) {
      this.offset++ //每当向上滑动的时候就让页数加1
        this.getDate(this.offset, done)
    },
    refresh: function(done) {
      this.offset = 0
      this.getDate(1, done)
    },
  }
};

</script>
<style scoped>
#NewsList {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  margin-top: 10px;
}

.news-item {
  border-bottom: solid 1px #eee;
  text-align: left;
  padding: 1rem;
  font-size: 1.4rem;
}

.page-loadmore-list {
  padding: 1rem;
  padding-top: 0;
}
.page-loadmore-listitem{
  margin-bottom: 1rem;
}
.page-loadmore-list a {
  height: 100%;
  display: flex;
}

.list-l {
  width: 70%;
  display: inline-block;
  padding-right: 1rem;
  text-align: justify;
}

.list-r {
  width: 30%;
  display: inline-block;
  height: 100px;
}

.list-r img {
  max-width: 100%;
  height: 100%;
}

.list-l h2 {
  font-size: 1.6rem;
  line-height: 1.5
}

</style>
