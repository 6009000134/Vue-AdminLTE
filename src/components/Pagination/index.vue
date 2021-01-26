<template>
  <div v-if="pageSize<totalCount" class="text-right form-inline">
    <ul class="pagination">
      <li class="paginate_button previous" :class="{'disabled':currentPage==1}">
        <a href="#" @click.prevent="pageChange(1)">{{firstTxt}}</a>
      </li>
      <li
        v-for=" (i,index) in totalPage"
        :key="index"
        class="paginate_button"
        :class="{'active':i==currentPage}"
      >
        <a href="#" @click.prevent="pageChange(i)">{{i}}</a>
      </li>
      <li class="paginate_button next" :class="{'disabled':currentPage==totalPage}">
        <a href="#" @click.prevent="pageChange(totalPage)">{{lastTxt}}</a>
      </li>
    </ul>
    <!-- <div class="inline">
      <button class="btn btn-primary pull-right">跳转</button>
      <input type="text" class="form-control pull-right margin-r-5" style="width:60px;" />
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: function() {
        return 10;
      }
    },
    pageIndex: {
      type: Number,
      default: () => {
        return 1;
      }
    },
    totalCount: {
      type: Number,
      default: () => {
        return 110;
      }
    },
    currentPage: {
      type: Number,
      default: () => {
        return 1;
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
      totalPage: Math.ceil(this.totalCount / this.pageSize)
    };
  },
  methods: {
    pageChange(i) {
      this.$emit("update:currentPage", i);
      this.$emit("pageChange");
    }
  }
};
</script>
