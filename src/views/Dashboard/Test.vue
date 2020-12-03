<template>
  <div>
    <div class="content-header">
      <h1>
        标题
        <small>小标题</small>
      </h1>
    </div>
    <div class="content">
      <div class="box box-default">
        <div class="box-header with-border">
          <h4>box title</h4>
          <div class="row">
              <div class="col-md-4"><span>123</span></div>
              <div class="col-md-4"><span>123</span></div>
              <div class="col-md-4"><span>123</span></div>
          </div>
        </div>
        <div class="box-body testcss">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>列1</th>
                <th>列2</th>
                <th>列3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
              <tr>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
                <td>值阿萨德123asd</td>
              </tr>
            </tbody>
          </table>
          <div class="row media">
            <div class="col-sm-12">
              <div class="pull-right">
                <ul class="pagination">
                  <li class="paginate_button previous disabled" id="example2_previous">
                    <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0">Previous</a>
                  </li>
                  <li class="paginate_button active">
                    <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">1</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0">2</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">3</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="4" tabindex="0">4</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="5" tabindex="0">5</a>
                  </li>
                  <li class="paginate_button">
                    <a href="#" aria-controls="example2" data-dt-idx="6" tabindex="0">6</a>
                  </li>
                  <li class="paginate_button next" id="example2_next">
                    <a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="box-body">
          <h1>123</h1>
          <cusCom1 :cusCount="msg" v-model="msg"></cusCom1>
          <input type="text" v-model="msg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TestCom from '@/components/Test/TestCom'
export default {
  data() {
    return {
      msg: 2
    };
  },
  components: {
    cusCom1: TestCom
  }
};
</script>
<style>
.testcss{}
</style>
