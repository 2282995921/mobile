<template>
  <div id="login">
    <demo-header></demo-header>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :show-message="true">
      <FormItem label="" prop="name">
        <Input v-model="formValidate.name" placeholder="用户名" size="large">
        <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
        </Input>
      </FormItem>
      <FormItem label="" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="密码" size="large">
        <!-- <Icon type="ios-locked-outline" slot="prepend"></Icon> -->
        </Input>
      </FormItem>
      <FormItem label="" class="enter">
        <Button type="warning" size="large" @click="handleSubmit('formValidate')">登录</Button>
      </FormItem>
      <div class="to-register"> 
        <Row :gutter="16">
          <Col span="12">
          <router-link to="/found">忘记密码？</router-link>
          </Col>
          <Col span="12">
          <router-link to="/register">注册</router-link>
          </Col>
        </Row>
      </div>
      <div class="or"><span>or</span></div>
      <div class="other-login" id="qqLoginBtn"><img src="" alt=""><img src="" alt=""></div>
      <div class="agre">登录即同意<span>用户协议</span></div>
    </Form>
  </div>
</template>
<script>
import DemoHeader from '../DemoHeader'
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      formValidate: {
        name: '',
        password: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    DemoHeader
  }, 
  methods: {
    handleSubmit(name) {
      //valid为true时验证通过
      this.$refs[name].validate((valid) => {
        if (valid) {
          //this.$Modal.confirm({
            //title: '提交',
            //content: '<p>确认提交</p>',
            //loading: true,
            //onOk: () => {
              this.$store.dispatch('login', this.formValidate).then(
                () => {
                  console.log('接口调用成功，编程改变路由')
                  this.$Modal.remove();
                  this.$router.push({ path: '/user'})
                },
                ()=>{
                  this.$Modal.remove();
                  console.log('接口调用失败')
                }
              )
            //},
          //})
        } else {
          this.$Message.error('请填写完整信息!');
          this.$Modal.remove();
        }
      });
    },
  }
}

</script>
<style scoped>
#login form .ivu-input-group-prepend{
  font-size: 16px;
}
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #efefef;
  top: 0
}

#login form {
  padding: 10px;
  text-align: center;
}

#login form label {
  font-size: 1.4rem;
}

.enter button {
  width: 100%;
  font-size: 1.6rem;
}

.agree {
  text-align: left;
}

.to-register {
  font-size: 1.4rem;
}

.to-register a {
  display: inline-block;
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px
}

.or {
  margin: 40px 0;
}

.or {
  position: relative;
  font-size: 1.4rem;
}

.or:after {
  content: '';
  display: block;
  overflow: hidden;
  height: 1px;
  background: #ddd;
  width: 100%;
  top: 50%;
  margin-top: -10px;
}

.or span {
  width: 20px;
  display: inline-block;
  background: #efefef
}

.agre {
  font-size: 1.4rem;
}

.agre span {
  color: #ffad33
}

.other-login {
  margin-bottom: 50px
}

.other-login img {
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 0 20px
}

</style>
