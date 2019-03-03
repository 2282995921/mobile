<template>
  <div id="user">
    <demo-header></demo-header>
    <div class="demo-avatar">
      <div class="head-avatar">
        <img :src="avatar" height="500" width="900" alt="">
      </div>
    </div>
    <mt-cell title="我的资料" is-link to="/info">
      <img slot="icon" src="../../assets/images/release.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="我的订单" is-link to="/histroyOrder">
      <img slot="icon" src="../../assets/images/order.svg" width="24" height="24">
    </mt-cell>
    <mt-cell title="我的位置" is-link to="/map">
      <img slot="icon" src="../../assets/images/place.svg" width="24" height="24">
    </mt-cell>
    <div class="logout">
      <Button type="warning" size="large" @click="logout">退出</Button>
    </div>
    <demo-footer></demo-footer>
  </div>
</template>
<script>
import DemoHeader from '../DemoHeader'
import DemoFooter from '../Footer/DemoFooter'
import axios from 'axios'

export default {
  data() {
    return {
      avatar: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
    }
  }, 
  components: {
    DemoFooter,
    DemoHeader
  },
  methods: {
    logout() {
      this.$Modal.confirm({
        title: '退出',
        content: '<p>确认退出</p>',
        loading: true,
        onOk: () => {
          axios.post('NewFiles/server/php/logout.php')
            .then((data) => {
              console.log(data.data.status)
              if (data.data.code === 0) {
                this.$router.push('/login');
                this.$Modal.remove();
              }
            }).catch((error) => {
              console.log(error);
            });
        },
      })
    }
  }
}

</script>
<style>
.demo-avatar img {
  width: 100%;
  height: 100px
}

.mint-cell-title {
  text-align: left;
}

.demo-avatar {
  position: relative;
  text-align: center;
}

.head-avatar {
  display: inline-block;
  margin: 1rem 0;
}

.head-avatar img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.option {
  margin-top: 1rem
}

.option a {
  font-size: 14px;
}

.logout {
  padding: 1rem;
  padding-top: 3rem;
}

.logout button {
  width: 100%;
}

</style>
