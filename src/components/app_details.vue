<template>
  <div id="news-details">
    <mt-header fixed :title="introduce.title">
      <span slot="left" @click="back"><mt-button icon="back"></mt-button></span>
      <mt-button icon="more" slot="right" @click="show = !show"></mt-button>
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="show">
    </mt-actionsheet>
    <div class="details-text">
      <div class="details-content">
        <div class="details-title">
          <h2>{{introduce.title}}</h2>
          <p>{{introduce.time}}</p>
        </div>
        <div class="details-img">
          <p>功能亮点：将各级分销商和顾客更好的联系在一起，为企业的业务经营及合作伙伴提供了一种全新的营销模式
          </p>
          <p>功能描述：便捷的注册入口。后台添加经销商，微信端验证身份，经销商即可加入，一键生成邀请码，分销员扫码填写身份信息即可加入；</p>
        </div>
        <div class="news-txt" v-html="introduce.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  data() {
    return {
      introduce: [{
        title: '',
        time: '',
        content: ''
      }],
      show: false,
      actions: [{
        name: '分享',
        method() {
          alert('敬请期待')
        }
      }]
    }
  },
  components: {

  },
  created: function() {
    var newsID = this.$route.query.name;
    // http://www.mocky.io/v2/5adeb7bf3300006d00e4d557
    // http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=' + newsID + '&num=1&appkey=c0b10d8d0569894a
    this.$get('https://bird.ioliu.cn/v1?url=http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=' + newsID + '&num=1&appkey=c0b10d8d0569894a', { id: newsID }).then((data) => {
      // console.log(data.data.result.list)
      if (data.data.status == 0) {
        this.introduce = data.data.result.list[0];
      }
    }).catch((data) => {

    })
  },
  methods: {
    back: function() {
      this.$router.go(-1)
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
