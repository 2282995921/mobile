<template>
  <div class="weathers">
    <div class="after">
    </div>
    <Select v-model="model1" style="width:200px" @on-change="change">
      <Option v-for="item in cityList" :value="item.number" :key="item.label">{{ item.label }}</Option>
    </Select>
    <div class="forecast">
      <div class="forecast-list" v-for="item in forecast">
        <div class="date">{{item.date}}</div>
        <div class="type">{{item.type}}</div>
        <div class="high">{{item.high}}</div>
        <div class="low">{{item.low}}</div>
      </div>
    </div>
    <div id="myChart" :style="{'max-width': '100%', height: '300px'}"></div>
    <div class="result">
      <span>特别提醒：</span>
      <h1 v-if="hide"><span>{{weather.data.ganmao}}</span></h1>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      cityList: [],
      model1: '',
      weather: [],
      hide: false,
      forecast: [],
    }
  },
  created: function() {
    axios.get('http://www.mocky.io/v2/5bd691863500007607fd7bde').then((data) => {

      this.cityList = data.data;
      console.log(this.cityList)
      this.model1 = '101200101';
      this.change();
    }).catch((error) => {

    })
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    change() {
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      axios.get('http://wthrcdn.etouch.cn/weather_mini?citykey=' + this.model1 + '').then((data) => {
        if (data.data.desc == 'OK') {
          this.weather = data.data;
          this.hide = true;
          this.forecast = this.weather.data.forecast;
          var high = [],low = [],date = [];
          for (var i = 0; i < this.forecast.length; i++) {
            high.push(this.forecast[i].high.replace(/[^0-9]/ig, ""));
            low.push(this.forecast[i].low.replace(/[^0-9]/ig, ""));
            date.push(this.forecast[i].date);
          }
          myChart.setOption({
            title: {
              text: '逐天预报'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['最高温', '最低温']
            },
            xAxis: [{
              type: 'category',
              data: date
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
                name: '最高温',
                type: 'line',
                data: high
              },
              {
                name: '最低温',
                type: 'line',
                data: low
              }
            ]
          });
        }
      }).catch((error) => {

      })
    },

  }
}

</script>
<style>
.weathers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(221, 221, 221, .5);
  padding: 1rem
}

.result,
.result h1 {
  font-size: 14px;
}

.forecast {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  border: 1px #fff solid;
  border-radius: 10px;
  font-size: 14px;
  margin: 10px 0;
}

.forecast-list div {
  padding: 10px;
}

</style>
