import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
// import Nora from '@primeuix/themes/nora';

createApp(App)
  .use(router)
  .use(PrimeVue,
    {
      theme: {
        preset: Lara,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  )
  .mount('#app')
