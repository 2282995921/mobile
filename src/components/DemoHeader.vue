<template>
  <div id="header" class="wrap">
    <mt-header fixed ><!-- :title="$route.meta.title" -->
      <span slot="left" @click="back">
      <mt-button icon="back">{{$route.meta.title}}</mt-button>
    </span>
      <mt-button icon="more" slot="right" @click="show = !show"></mt-button>
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="show">
    </mt-actionsheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      actions: [{
          name: '分享',
          method(){
            alert('敬请期待')
          }
        }
      ]
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    }
  }
}

</script>
<style>
@import "../assets/style/animate.css";
#header .mint-header{
  position: relative;
  height: 40px;
}

.mint-header-title {
  font-size: 2rem !important;
}

.down {
  position: absolute;
  top: 42px;
  right: 10px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background: #fff;
  color: #333;
  border-radius: 4px;
  border: 1px #ddd solid;
  box-shadow: 2px 2px 2px #ddd;
  border-color: #dedfe0;
  box-shadow: 0 0 5px rgba(0, 0, 0, .15);
  box-sizing: border-box;
  border: 1px solid #b3b7bf;
  border-radius: 2px;
  background-color: #fff;
}

.down:after {
  content: '';
  display: block;
  font-size: 0;
  position: absolute;
  width: 0;
  height: 0;
  content: '';
  border: 8px dashed transparent;
  bottom: 100%;
  left: inherit;
  right: inherit;
  margin-bottom: -1px;
  border-bottom-style: solid;
  margin-left: -8px;
  border-bottom-color: #fff;
}

</style>
