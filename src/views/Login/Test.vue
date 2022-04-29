<template>
  <div>
    <section class>
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >数量图</a>
            <div class="collapse" id="collapseExample">
              <div class="checkbox well">
                <label>
                  <input type="checkbox" value="1" /> Bug状态
                </label>
                <label>
                  <input type="checkbox" value="2" /> 问题发现阶段
                </label>
                <label>
                  <input type="checkbox" value="3" /> 故障大类
                </label>
                <label>
                  <input type="checkbox" value="4" /> 故障小类
                </label>
                <label>
                  <input type="checkbox" value="5" /> 严重程度
                </label>
              </div>
            </div>
            <a
              href="#"
              class="list-group-item"
              data-toggle="collapse"
              data-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >排序图</a>
            <div class="collapse" id="collapseExample1">
              <div class="checkbox well">
                <label>
                  <input type="checkbox" value="6" /> 发生阶段
                </label>
                <label>
                  <input type="checkbox" value="7" /> 故障大类
                </label>
                <label>
                  <input type="checkbox" value="8" /> 故障小类
                </label>
                <label>
                  <input type="checkbox" value="9" /> 故障等级
                </label>
                <label>
                  <input type="checkbox" value="10" /> 问题责任分类
                </label>
              </div>
            </div>
            <a
              href="#"
              class="list-group-item"
              data-toggle="collapse"
              data-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >分布图</a>
            <div class="collapse" id="collapseExample2">
              <div class="checkbox well">
                <label>
                  <input type="checkbox" value="11" /> Bug状态下严重等级
                </label>
                <label>
                  <input type="checkbox" value="12" /> 发生阶段下严重等级
                </label>
                <label>
                  <input type="checkbox" value="13" /> 故障大类下的故障小类
                </label>
                <label>
                  <input type="checkbox" value="14" /> 故障大类下的故障等级
                </label>
                <label>
                  <input type="checkbox" value="15" /> 发生阶段下的问题责任分类
                </label>
              </div>
            </div>
            <a
              href="#"
              class="list-group-item"
              data-toggle="collapse"
              data-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >趋势图</a>
            <div class="collapse" id="collapseExample3">
              <div class="checkbox well">
                <label>
                  <input type="checkbox" value="16" /> 故障大类
                </label>
                <label>
                  <input type="checkbox" value="17" /> 故障等级
                </label>
                <label>
                  <input type="checkbox" value="18" /> 责任分类
                </label>
                <label>
                  <input type="checkbox" value="19" /> 超时数
                </label>
              </div>
            </div>
          </div>
          <button class="btn btn-success" id="btnDraw" @click="getData">画图</button>
          <button class="btn btn-success" id="btnClear" @click="clear">清空</button>
          <!-- <button class="btn btn-success" id="btnDraw">画图</button>
          <button class="btn btn-success" id="btnClear">清空</button>-->
        </div>
        <div class="col-md-9">
          <div class="box box-primary">
            <div class="box-header">
              <h3>嵩山数字FKP-FCC</h3>
            </div>
            <div class="box-body" id="chartbox">
              <!-- <div id="oachart" style="height:400px;"></div>
              <div id="main1" style="height:400px;"></div>
              <div id="main2" style="height:400px;"></div>
              <div id="main3" style="height:400px;"></div>
              <div id="main4" style="height:400px;"></div>
              <div id="main5" style="height:400px;"></div>
              <div id="main6" style="height:400px;"></div>-->
            </div>
            <div class="box-footer">
              <!-- <button class="btn btn-success" @click="drawChart">柱状图</button> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getData } from "@/API/OA/chart.js";
import $ from "jquery";

export default {
  data() {
    return {};
  },
  methods: {
    clear() {
      $("#chartbox").empty();
    },
    getData() {
      // chartbox
      $("#chartbox").empty();
      var cbArray = $(".list-group input:checked");
      var types = "";
      var html = "";
      if (cbArray.length > 0) {
        for (var i = 0; i < cbArray.length; i++) {
          types += $(cbArray[i]).val() + ",";
          if (
            $(cbArray[i])
              .val()
              .toString() === "4"
          ) {
            html =
              html +
              "<div style='height:700px;' id='main" +
              $(cbArray[i]).val() +
              "'></div>";
          } else {
            html =
              html +
              "<div style='height:400px;' id='main" +
              $(cbArray[i]).val() +
              "'></div>";
          }
        }
      }
      $("#chartbox").append(html);
      var data = {};
      if (types.length > 0) {
        data = { types: types.substring(0, types.length - 1) };
      }

      data.xmbm = "09BEF1B2-5C0E-415A-A4DE-0B7AA2AE4BC5";
      getData(data).then(res => {
        console.log(res);
        if (!res.S) {
          this.$toast.error({ message: res.M });
          return;
        }
        console.log(res.D);
        if (res.D.length > 0) {
          for (var i = 0; i < cbArray.length; i++) {
            let myChart = this.$echarts.init(
              document.getElementById(res.D[i].DomID)
            );
            // var option2 = {
            //         legend: {
            //           orient: "vertical",
            //           left: "left"
            //         },
            //         title: res.D[i].title,
            //         title: res.D[i].title,
            //         dataset: res.D[i].dataset,
            //         series: res.D[i].series
            //       };
            var option = res.D[i];
            option.toolbox = {
              feature: {
                saveAsImage: {}
              }
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
              myChart.resize();
            });
          }
        }
      });
    }
  }
};
</script>
