<template>
  <div class="news">
    <Row :gutter="14">
      <Col span="8">
      <div class="hot"><img src="../../assets/images/jh-headlines.png" height="48" alt="" width="92px"></div>
      </Col>
      <Col span="16" class="news-list">
      <div v-bind:class="{ anim: isActive }">
        <p v-for="(itme,index) in newslist">
          <router-link to="/news_list">{{itme.title}}</router-link>
        </p>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.$store.dispatch('newslist');
    (this.newslist) ? setInterval(this.scroll, 3000) : false;
  },
  computed:{
    ...mapGetters([
      'requesting',
      'error',
      'newslist'
    ])
  },
  methods: {
    scroll() {
      this.isActive = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.newslist.push(this.newslist[0]); // 将数组的第一个元素添加到数组的
        this.newslist.shift(); //删除数组的第一个元素
        this.isActive = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 300)
    },
  }
}

</script>
<style scoped>
.news {
  padding: 1rem 0;
  height: 72px;
}

.news>div {
  height: 100%;
}

.news-list {
  height: 100%;
  overflow: hidden;
}

.news-list p a {
  font-size: 1.2rem;
  color: #666;
  /*  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 91%;
  display: inline-block;
  /*line-height: 2.4em*/
}

.anim {
  transition: all 0.5s;
  margin-top: -30px;
}

</style>
