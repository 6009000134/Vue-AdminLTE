<template>
  <div>
    <div class="checkbox">
      <label>
        <input type="checkbox" /> Check me out
      </label>
    </div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <h3>图标名称</h3>
            </div>
            <div class="box-body">
              <div id="oachart" style="height:400px;"></div>
            </div>
            <div class="box-footer">
              <button class="btn btn-success" @click="drawChart">柱状图</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-danger">
            <div class="box-header">
              <h3>图标名称</h3>
            </div>
            <div class="box-body">
              <div id="main" style="height:400px;"></div>
            </div>
            <div class="box-footer">
              <button class="btn btn-success" @click="drawPieChart">饼状图</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getData } from "@/API/OA/chart.js";
export default {
  data() {
    return {};
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("oachart"));
      getData().then(res => {
        console.log(res);
      });
      myChart.setOption({
        title: {
          text: "柱状图标题"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫2", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
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
      // window.onresize=myChart.resize;//当只有一个图表时，可采用此方法设置resize
      // 当有多个图表时，可采用以下方法设置resize
      window.addEventListener("resize", function() {
        myChart.resize();
      });
      // 或者
      // window.onresize = function() {
      //   myChart.resize();
      // };
    },
    drawPieChart() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        title: {
          text: "饼状图标题"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        series: [
          {
            name: "销量",
            type: "pie",
            data: [
              [5, 20, 36, 10, 10, 20],
              [1, 2, 3, 4, 5, 6]
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>
