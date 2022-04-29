<template>
  <div v-if="pageSize<totalCount" class="text-center form-inline">
    <ul class="pagination">
      <li class="paginate_button previous" :class="{'disabled':pageIndex==1}">
        <a v-if="pageIndex==1" href="javascript:void()">{{firstTxt}}</a>
        <a v-if="pageIndex>1" href="#" @click.prevent="pageChange(1)">{{firstTxt}}</a>
      </li>
      <li
        v-for=" (i,index) in totalPage"
        :key="index"
        class="paginate_button"
        :class="{'active':i==pageIndex}"
      >
        <a href="#" @click.prevent="pageChange(i)">{{i}}</a>
      </li>
      <li class="paginate_button next" :class="{'disabled':pageIndex==totalPage}">
        <a v-if="pageIndex==totalPage" href="javascript:void()">{{lastTxt}}</a>
        <a v-if="pageIndex<totalPage" href="#" @click.prevent="pageChange(totalPage)">{{lastTxt}}</a>
      </li>
    </ul>
    <!-- <div class="inline">
      <button class="btn btn-primary pull-right">跳转</button>
      <input type="text" class="form-control pull-right margin-r-5" style="width:60px;" />
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: function() {
        return 0;
      }
    },
    pageIndex: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    totalCount: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    firstTxt: {
      type: String,
      default: () => {
        return "第一页";
      }
    },
    lastTxt: {
      type: String,
      default: function() {
        return "最后一页";
      }
    }
  },
  data() {
    return {
      totalPage: Math.ceil(this.totalCount / this.pageSize),
      disabled: false
    };
  },
  methods: {
    pageChange(i) {
      this.$emit("update:pageIndex", i);
      this.$emit("pageChange");
    }
  },
  watch: {
    pageIndex: function(val) {
      if (val === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    totalCount: function() {
      this.totalPage = Math.ceil(this.totalCount / this.pageSize);
    }
  }
};
</script>
