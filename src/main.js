import { createApp } from 'vue'
import App from './App.vue'

// Estilos globales
import '@/assets/styles/reset.css'
import '@/assets/styles/variables.css'
import '@/assets/styles/main.css'

const app = createApp(App)
app.mount('#app')