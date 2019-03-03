<template>
  <div id="order">
    <demo-header></demo-header>
    <mt-navbar v-model="selected" id="searchBar">
      <mt-tab-item id="paied">已支付</mt-tab-item>
      <mt-tab-item id="paying">未支付</mt-tab-item>
      <mt-tab-item id="wartingPay">待支付</mt-tab-item>
      <mt-tab-item id="all">全部</mt-tab-item>
    </mt-navbar>
    <pay-list :id="selected"></pay-list>
    <demo-footer></demo-footer>
  </div>
</template>
<script>
import DemoHeader from '../DemoHeader'
import payList from './payList'
import DemoFooter from '../Footer/DemoFooter'
export default {
  components: {
    DemoHeader,
    payList,
    DemoFooter
  },
  data() {
    return {
      selected: 'paied',
    }
  },
  methods: {

  }
}

</script>
<style scoped>


</style>
