import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import Carousel from 'primevue/carousel';
import FocusTrap from 'primevue/focustrap';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import CheckboxGroup from 'primevue/checkboxgroup';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})


app.directive('focustrap', FocusTrap);
app.component('Button', Button);
app.component('Carousel', Carousel)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('Checkbox', Checkbox)
app.component('CheckboxGroup', CheckboxGroup)
app.component('InputText', InputText)

app.mount('#app')
