<template>
  <div class="content">
    <div class="row">
      <div class="box box-primary">
        <div class="box-header">a</div>
        <div class="box-body">
          <form action>
            <div class="form-horizontal">
              <div class="form-group">
                <label for class="control-label col-sm-1">ID</label>
                <div class="col-sm-5">
                  <input type="text" v-model="form.ID" class="form-control" />
                </div>
                <label for class="control-label col-sm-1">ID2</label>
                <div class="col-sm-5">
                  <input type="text" v-model="form.ID2" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label for class="control-label col-sm-1">ID3</label>
                <div class="col-sm-5">
                  <input type="text" v-model="form.ID3" class="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="box-footer">
          <button class="btn btn-info" @click="show">测试</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      form: {}
    };
  },
  methods: {
    show() {
      console.log(this.form);
    }
  },
  mounted() {
    console.log(this.form);
  }
};
</script>