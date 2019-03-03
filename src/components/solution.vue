<template>
  <div id="solution">
    <mt-header fixed :title="newsDetailsTitle">
      <span slot="left" @click="back"><mt-button icon="back"></mt-button></span>
      <mt-button icon="more" slot="right" @click="show = !show"></mt-button>
    </mt-header>
    <div class="details-text">
      <div class="details-img">
        <p>功能亮点：将各级分销商和顾客更好的联系在一起，为企业的业务经营及合作伙伴提供了一种全新的营销模式
        </p>
        <p>功能描述：便捷的注册入口。后台添加经销商，微信端验证身份，经销商即可加入，一键生成邀请码，分销员扫码填写身份信息即可加入；</p>
      </div>
      <div class="details-content">
        <div class="details-title">
          <h2>{{newsDetailsTitle}}</h2>
          <p>{{time}}</p>
        </div>
        <div class="news-txt">
          人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈人咬狗了！嫌犯咬伤警犬不能算“袭警”，狗狗好委屈
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsDetailsTitle: '',
      imgUrl: '',
      time: ''
    }
  },
  created: function() {
    this.init();
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    init() {
      var newsID = this.$route.query.id;
      // http://www.mocky.io/v2/5adeb7bf3300006d00e4d557
      // http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=1&num=1&appkey=c0b10d8d0569894a
      this.$get('http://api.jisuapi.com/news/news/get?channel=%E5%A4%B4%E6%9D%A1&start=' + newsID + '&num=1&appkey=c0b10d8d0569894a', { id: newsID }).then((data) => {
        console.log(data)
        if (data.msg == 'ok') {
          this.newsDetailsTitle = data.result.list.title;
          this.time = data.result.list.time;
          this.imgUrl = data.result.list.pic;
        }
      }).catch((data) => {

      })
    }
  }
}

</script>
<style>
.details-text {
  position: relative;
  top: 50px;
  padding: 1rem;
}

.details-img img {
  max-width: 100%;
  display: inline-block;
  height: 200px;
  width: 100%;
}

.details-title {
  text-align: center;
}

</style>
