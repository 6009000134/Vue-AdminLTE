<template>
  <div>
    <section class="content-header">
      <h1>
        {{this.$route.meta.title}}
        <small>列表</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> 首页
          </a>
        </li>
        <li class="active">数据表</li>
      </ol>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3>图标名称</h3>
            </div>
            <div class="box-body">
              <div id="main" style="width:600px;height:400px;"></div>
            </div>
            <div class="box-footer">
              <button class="btn btn-success" @click="drawChart">绘图</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
