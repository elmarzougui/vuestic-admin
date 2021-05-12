// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore // TODO: need .d.ts file
import { VuesticPlugin, useGlobalConfig } from 'vuestic-ui';
import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'


const gtmConfig = {
  id: process.env.VUE_APP_GTM_KEY,
  enabled: process.env.NODE_ENV === 'production',
  debug: false,
  vueRouter: router,
}

const i18nConfig = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('@/i18n/en.json'),
    ch: require('@/i18n/cn.json'),
    es: require('@/i18n/es.json'), 
    ir: require('@/i18n/ir.json'),
    br: require('@/i18n/br.json')
  }
}

createApp(App)
  .use(store)
  .use(router)
  .use(createGtm(gtmConfig))
  .use(createI18n(i18nConfig))
  .use(VuesticPlugin, vuesticGlobalConfig)
  .mount('#app')