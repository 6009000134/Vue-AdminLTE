// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import axiosService from './API/axiosService'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'font-awesome/css/font-awesome.css'
// import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css'
// import 'admin-lte/dist/css/AdminLTE.min.css'
// import 'admin-lte/dist/css/skins/_all-skins.min.css'
import './assets/css/bootstrap.css';
import './assets/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.css';
import 'admin-lte/bower_components/Ionicons/css/ionicons.min.css';
import './assets/css/AdminLTE.min.css';
import './assets/css/skins/_all-skins.min.css';
// import 'admin-lte/dist/js/adminlte.min'
// import 'admin-lte/bower_components/morris.js/morris.css'
// import 'admin-lte/bower_components/jvectormap/jquery-jvectormap.css'
import 'admin-lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.css';
// import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
import 'vue2-toastr/dist/css/vue2-toastr.css';// Toastr css
import axios from 'axios';
// import qs from 'qs'
import Vuelidate from 'vuelidate';
import Toastr from 'vue2-toastr';
// import './mock/users.js';
// import './mock/DB.js';
// import './mock/Table.js';
// import 'admin-lte/dist/js/adminlte.min.js'

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
Vue.prototype.$axios = axios;
// Vue.prototype.$qs = qs
Vue.use(Vuelidate);
Vue.use(Toastr,toastrConfig);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
