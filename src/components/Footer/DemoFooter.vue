<template>
  <div>
  
    <mt-tabbar v-model="selected" fixed>  
      <mt-tab-item id="index" isRouter>
        <img src="../../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
        <img src="../../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
        首页  
      </mt-tab-item>  
      <mt-tab-item id="order" isRouter>  
        <img src="../../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
        <img src="../../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
        订单  
      </mt-tab-item>  
      <mt-tab-item id="find" isRouter>  
        <img src="../../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
        <img src="../../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">             
        发现  
      </mt-tab-item>  
      <mt-tab-item id="user" isRouter>  
        <img src="../../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="../../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的  
      </mt-tab-item>  
    </mt-tabbar>  
    
  </div> 
</template>

<script>
import mtTabbar from './tabbar'
import mtTabItem from './tabbar-item'
export default {
  name: '',
  components:{
    mtTabbar,
    mtTabItem
  },
  data() {
      return {
        selected:"index"
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
  }
</style>
