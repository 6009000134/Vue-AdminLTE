import Vue from 'vue'
import Component from './notification1.vue'
const nc=Vue.extend(Component)

const instance=[]
const notify=(options)=>{
    const instance=new nc()
    instance.vm=instance.$mount()
    document.body.appendChild(instance.vm.$el)
}
export default notify