// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import httpService from './API/httpService'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'font-awesome/css/font-awesome.css'
// import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css'
// import 'admin-lte/dist/css/AdminLTE.min.css'
// import 'admin-lte/dist/css/skins/_all-skins.min.css'
import './assets/css/bootstrap.css';
import './assets/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.css';
// import 'admin-lte/Ionicons/css/ionicons.min.css';
import './assets/css/AdminLTE.css';
import './assets/css/skins/_all-skins.css';
// import 'admin-lte/dist/js/adminlte.min'
// import 'admin-lte/bower_components/morris.js/morris.css'
// import 'admin-lte/bower_components/jvectormap/jquery-jvectormap.css'
// import 'admin-lte/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
// import 'admin-lte/bootstrap-daterangepicker/daterangepicker.css';
// import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
import 'vue2-toastr/dist/css/vue2-toastr.css';// Toastr css
import axios from 'axios';

// import qs from 'qs'
import Toastr from 'vue2-toastr';
import eModal from '@/components/Modal/extendModal.vue';
import select from '@/components/DropDownList/select.vue';
import notification from '@/components/Notification/notification.vue';
// import notification1 from '@/components/Notification/notification1.vue';
import notification1 from '@/components/Notification/index1.js';
import testFun from '@/components/Notification/function1.js';

// import './mock/mock.js'
// import './mock/users.js';
// import './mock/DB.js';
// import './mock/Table.js';
// import 'admin-lte/dist/js/adminlte.min.js'
import VeeValidate, { Validator } from 'vee-validate';
import vZhCN from 'vee-validate/dist/locale/zh_CN';
import store from './store/index.js';
import * as echarts from 'echarts';
// import notice from "@/components/Modal/loadfunc.js";
// Vue.prototype.$notice2 = notice;

import fCompnents from '@/components/index.js';
var toastrConfig = {
  position: 'top right',
  showDuration: '1000'// ,
  // successColor:'',
  // infoColor:'',
  // warningColor:'',
  // errorColor:'',
  // showMethod:'headShake',
  // hideMethod:'flash'
};
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
// Vue.prototype.$confirm = eModal;
// Vue.prototype.$qs = qs
Vue.use(Toastr, toastrConfig);
Vue.use(VeeValidate, {
  dictionary: {
    zh_CN: vZhCN
  }
});
Vue.use(notification1);
Vue.component('pagination', fCompnents.pagination);
Vue.component('f-select', fCompnents.select);
Vue.component('vSelect', select);
// Vue.component('vNotification',notification);
// Vue.component('vNotification1',notification1);
Validator.localize('zh_CN');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  methods: {
    commonFun() {
      console.log('xczxc');
    }
  },
  template: '<App/>',
  store: store
});
router.beforeEach((to,from,next)=>{
  next();
})
