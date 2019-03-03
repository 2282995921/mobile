<template>
  <div id="news-details">
    <mt-header fixed :title="details.title">
      <span slot="left" @click="back"><mt-button icon="back"></mt-button></span>
      <mt-button icon="more" slot="right" @click="show = !show"></mt-button>
    </mt-header>
    <div class="details-text">
      <div class="details-img">
      </div>
      <div class="details-content">
        <div class="details-title">
          <h2>{{details.title}}</h2>
          <p>{{details.time}}</p>
        </div>
        <div class="news-txt" v-html="details.content">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      details: [{
        title: '',
        time: '',
        content: ''
      }]
    }
  },
  components: {

  },
  created: function() {
    var newsID = this.$route.query.id;
    axios.get('https://bird.ioliu.cn/v1?url=http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=' + newsID + '&num=1&appkey=c0b10d8d0569894a', { id: newsID }).then((data) => {
      console.log(data.data.result.list)
      if (data.data.status == 0) {
        this.details = data.data.result.list[0];
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
#news-details {
  position: relative;
  top: 40px;
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

.details-content {
  padding: 1rem;
}

</style>
