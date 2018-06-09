import Vue from 'vue'
import App from './App.vue'

// hot loaded components
import navbar from './components/navbar'
import bannerHeader from './components/banner-header'
// lazy loaded componenets
const sectionAbout = () => import('./components/section-about')
const sectionSchedule = () => import('./components/section-schedule')
const sectionContact = () => import('./components/section-contact')

Vue.component('navbar', navbar)
Vue.component('banner-header', bannerHeader)
Vue.component('section-about', sectionAbout)
Vue.component('section-schedule', sectionSchedule)
Vue.component('section-contact', sectionContact)

new Vue({
  el: '#app',
  render: h => h(App)
})
