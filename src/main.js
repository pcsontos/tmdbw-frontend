import {createApp, h, provide} from 'vue'
import {DefaultApolloClient} from '@vue/apollo-composable'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { apolloClient } from './apollo-client'

const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
  }
)
app.use(ElementPlus).use(router).mount('#app')
