<template>
  <div id="register">
    <demo-header></demo-header>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :show-message="true">
      <FormItem label="" prop="name">
        <Input v-model="formValidate.name" placeholder="登录账号"></Input>
      </FormItem>
      <FormItem label="" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="设置密码"></Input>
      </FormItem>
      <FormItem label="" prop="mail">
        <Input v-model="formValidate.mail" placeholder="电子邮箱"></Input>
      </FormItem>
      <FormItem label="" prop="phone">
        <Input v-model="formValidate.phone" placeholder="手机号码"></Input>
      </FormItem>
      <FormItem prop="interest" class="agree">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="我已阅读并同意"></Checkbox>
          <!-- <Checkbox v-model="formValidate.interest">同意本协议</Checkbox> -->
        </CheckboxGroup>
      </FormItem>
      <div class="enter">
        <Button type="warning" @click="handleSubmit('formValidate')">注册</Button>
      </div>
    </Form>
  </div>
</template>
<script>
import DemoHeader from '../DemoHeader'
export default {
  components: {
    DemoHeader
  },
  data() {
    return {
      formValidate: {
        name: '',
        password: '',
        mail: '',
        phone: '',
        interest: []
      },
      ruleValidate: {
        name: [
          { required: true, message: '账号不能为空', trigger: 'blur' } //自定义验证sexadecimal
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入正确的电子邮箱', trigger: 'blur', type: 'email' }
        ],
        phone: [
          { required: true, message: '请输入正确的手机号码', trigger: 'blur', pattern: /^1[3|4|5|8][0-9]\d{4,8}$/ }
        ],
        interest: [
          { required: true, message: '您还未勾选服务声明', trigger: 'blur', trigger: 'change', type: 'array' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          //this.$Modal.confirm({
            //title: '提交',
            //content: '<p>确认提交</p>',
            //loading: true,
            //onOk: () => {
              this.$store.dispatch('register', this.formValidate).then(
                () => {
                  this.$Modal.remove();
                  this.$router.push('/');
                },
                () => {
                  this.$Modal.remove();
                }
              )
            //},
          //})
        } else {
          this.$Message.error('请填写正确的信息!');
          this.$Modal.remove();
        }

      });
    },
  }
}

</script>
<style>
#register {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #efefef
}

#register form {
  padding: 10px;
}

#register form label {
  font-size: 1.4rem;
}

.enter button {
  width: 100%;
  font-size: 1.6rem;
}

.agree {
  text-align: left;
}
</style>
