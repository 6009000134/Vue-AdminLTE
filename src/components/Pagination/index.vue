<template>
  <div class="text-right form-inline">
    <ul class="pagination">
      <li class="paginate_button previous" :class="{'disabled':cPage==1}">
        <a href="#">{{firstTxt}}</a>
      </li>
      <li
        v-for=" (i,index) in totalPage"
        :key="index"
        class="paginate_button"
        :class="{'active':i==cPage}"
      >
        <a href="#" @click.prevent="cPage=i">{{i}}</a>
      </li>
      <li class="paginate_button next" :class="{'disabled':cPage==totalPage}">
        <a href="#">{{lastTxt}}</a>
      </li>
    </ul>
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
      pIndex: 0,
      totalPage: Math.ceil(this.totalCount / this.pageSize),
      cPage: this.currentPage
    };
  }
};
</script>
