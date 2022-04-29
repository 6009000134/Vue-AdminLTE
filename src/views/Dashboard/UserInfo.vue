<template>
<div>
    <div class="form-horizontal box-body">
        <div class="form-group">
            <label class="col-xs-1 control-label">输入1：</label>
            <div class="col-xs-2">
                <input type="text" class="form-control">
            </div>
            <label class="col-xs-1 control-label">输入2：</label>
            <div class="col-xs-2">
                <input type="text" class="form-control">
            </div>
            <label class="col-xs-1 control-label">输入3：</label>
            <div class="col-xs-2">
                <input type="text" class="form-control">
            </div>
            <label class="col-xs-1 control-label">输入4：</label>
            <div class="col-xs-2">
                <input type="text" class="form-control">
            </div>
        </div>
        <div>
            <button class="btn btn-success" data-toggle="modal" v-bind:data-target="'#'+ data.ID">按钮</button>
            <button class="btn btn-success" @click="show">按钮</button>
            <modal v-bind:ids="data.ID" :content="data.ID"  ></modal>
        </div>
    </div>
</div>
</template>
<script>
import modal from '@/components/Modal/modal.vue';

export default{
  data () {
    return {
      data: {
        ID: 'modal-default2',
        name: 'ss'
      }
    };
  },
  components: {
    'modal': modal
  },
  methods: {
    show () {
      this.modal.showData();
    }
  }
};

</script>
