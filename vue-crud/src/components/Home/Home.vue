<template>
  <div>
    <h1 class="page-header" style="margin:20px;">Welcome</h1>
    <div class="row placeholders">
      <div class="col-xs-6 col-sm-3 placeholder">
      <!--   <img src="../../assets/01.jpg" width="600" height="600" class="img-responsive" alt="Generic placeholder thumbnail"> -->
        <!-- <h4>admin</h4> -->
      </div>
    </div>
    <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '待办事项' },
        tooltip: {},
        xAxis: {
          data: ['制定中', '内部初审', '待审核', '待下发', '已下发']
        },
        yAxis: {},
        series: [{
          name: '数量',
          type: 'bar',
          data: [5, 20, 36, 10, 10]
        }]
      })
    }
  }
}
</script>
