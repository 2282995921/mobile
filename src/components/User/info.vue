<template>
  <div id="user">
    <demo-header></demo-header>
    <form action="" id="form">
      <div class="heads">
        <Upload action="NewFiles/server/php/upload.php" :show-upload-list="false" :on-success="success" :format="['jpg','jpeg','png']" :on-format-error="handleFormatError">
          <mt-cell title="头像">
            <span><img slot="icon" :src="defaultList" width="40" height="40"></span>
          </mt-cell>
        </Upload>
      </div>
      <div>
        <mt-cell title="用户名" :value="userInfo.name"></mt-cell>
      </div>
      <div @click.stop="modify = true">
        <mt-cell title="昵称" :value="userInfo.nickname"></mt-cell>
      </div>
      <Modal v-model="modify" title="请输入昵称" @on-ok="ok" @on-cancel="cancel">
        <Input v-model="userInfo.value" placeholder="Enter"></Input>
      </Modal>
      <mt-cell title="mail" :value="userInfo.mail"></mt-cell>
      <mt-cell title="手机号码" :value="userInfo.phone"></mt-cell>
    </form>
  </div>
</template>
<script>
import DemoHeader from '../DemoHeader'
import { mapGetters } from 'vuex'
import axios from 'axios';
export default {
  data() {
    return {
      modify: false,
      defaultList: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
      info: {
        name: '',
        nickname: '',
        mail: '',
        phone: '',
        value: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'userInfo'
    ])
  },
  mounted() {
    this.$store.dispatch('userInfo')
  },
  methods: {
    ok() {
      axios.post('http://www.mocky.io/v2/5ae436d72f0000510028e797', { value: this.value }).then((data) => {
        this.info = data.data;
        this.$Message.info('修改成功');
      }).catch((error) => {
        this.$Message.info('修改失败');
      })
    },
    cancel() {
      this.$Message.info('Clicked cancel');
    },
    success(res, file) {
      this.defaultList = 'http://localhost:8080/NewFiles/server/php/'+file.response.data;
      console.log(res)
    },
    handleFormatError(file) {
      this.$Message.info('格式不正确');
    }
  },
  components: {
    DemoHeader
  },
}

</script>
<style>
.ivu-upload-select {
  display: block !important;
}

.heads .ivu-upload-list{
  margin-top: 0;
}

</style>
