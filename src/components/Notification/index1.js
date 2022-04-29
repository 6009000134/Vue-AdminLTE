import Notification from './notification1.vue'
import notify from './function1.js'

export default {
    install:function(Vue){
        Vue.component('v'+Notification.name, Notification);        
        Vue.prototype.$notice=notify;
    }   
}