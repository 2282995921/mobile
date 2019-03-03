<template>
  <div class="index-head">
    <div class="weather">
      <router-link to="/weather">
        <h1>{{weather.wendu}}℃</h1>
        <div class="we"><span>{{position.city}}</span></div>
      </router-link>
    </div>
    <div id="index-head">
      <Row align="middle">
        <Col span="24">
        <div class="search">
          <router-link to="/search">
            <input type="search" readonly="" id="search">
            <i class="fa fa-search fa-1x" id="search-icon"></i>
          </router-link>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('weather');
  },  
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'weather'
    ]),
    position(){
      return this.$store.state.indexInfo.position;
    }
  },
  methods: {

  }
}

</script>
<style scoped>
.index-head {
  background: url('../../assets/images/my-bg.png') no-repeat center;
  max-width: 100%;
  height: 200px;
  position: relative;
}

#index-head {
  height: 50px;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 0;
}

#index-head>div {
  height: 100%;
  width: 100%
}

.lead-login img {
  max-width: 100%
}

.weather {
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather a {
  display: flex;
  justify-content: space-between;
}

.weather h1 {
  margin-right: 1rem;
  font-size: 30px;
}

.weather .we {
  padding-top: 10px;
}

.weather .we span {
  /*display: block;*/
}

#search {
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: 1px #ddd solid
}

#search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -6px;
  color: #ddd;
}

</style>
