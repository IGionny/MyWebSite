import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//See: https://fontawesome.com/docs/web/use-with/vue/add-icons

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowsToDot, faRoute, faGamepad, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faDocker, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faArrowsToDot);
library.add(faRoute);
library.add(faGamepad);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faEnvelope);
library.add(faCertificate);
//
library.add(faTwitter);
library.add(faGithub);
library.add(faDocker);
library.add(faLinkedinIn);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
