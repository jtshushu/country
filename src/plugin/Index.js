// JavaScript Document
import vCountry from './country/Index.vue';
let province = {};
province.install = function (Vue, options) {    
  Vue.component(vCountry.name, vCountry) // testPanel.name 组件的name属性 
}
export default province















