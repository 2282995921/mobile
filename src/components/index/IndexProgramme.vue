<template>
  <!-- 解决方案 -->
  <div class="programme">
    <div class="title">
      <h1>解决方案</h1></div>
    <div class="way">
      <Row :gutter="14">
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 1}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>智慧校园</p>
        </router-link>
        </Col>
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 2}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>智慧零售</p>
        </router-link>
        </Col>
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 3}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>智慧商圈</p>
        </router-link>
        </Col>
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 4}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>制造</p>
        </router-link>
        </Col>
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 5}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>设计院/科研</p>
        </router-link>
        </Col>
        <Col span="12">
        <router-link :to="{path:'/solution',query: {name: 6}}">
          <img src="../../assets/images/my-bg.png" alt="">
          <p>金融</p>
        </router-link>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {

}

</script>
<style scoped>
.title h1 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
  padding-left: 5px;
}

.title h1:before {
  content: '';
  border-left: 4px solid #ff6600;
  padding-right: 1rem;
}
.way {
  text-align: center;
  padding: 1rem 0;
}

.way p {
  line-height: 2rem;
}

.way img {
  height: 80px;
  width: 100%
}
</style>
