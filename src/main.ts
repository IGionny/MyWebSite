import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

//See: https://fontawesome.com/docs/web/use-with/vue/add-icons

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faArrowsToDot, faRoute, faGamepad, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faCertificate, faMagnifyingGlass, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import {faWrench, faServer, faCubes, faHourglassStart} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faGithub, faDocker, faLinkedinIn, faSafari, faRust} from '@fortawesome/free-brands-svg-icons'
import Home from "./components/Home.vue";
import Case from "./components/Case.vue";

/* add icons to the library */
library.add(faArrowsToDot);
library.add(faRoute);
library.add(faGamepad);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faEnvelope);
library.add(faCertificate);
library.add(faMagnifyingGlass);
library.add(faArrowUpRightFromSquare);
library.add(faWrench);
library.add(faServer);
library.add(faCubes);
library.add(faHourglassStart);
//
library.add(faTwitter);
library.add(faGithub);
library.add(faDocker);
library.add(faLinkedinIn);
library.add(faSafari);
library.add(faRust);


const routes = [
    {name: "home", path: '/', component: Home},
    {name: "summary", path: '/home/summary', component: Home},
    {name: "experiences", path: '/home/experiences', component: Home},
    {name: "passions", path: '/home/passions', component: Home},
    {name: "tools", path: '/home/tools', component: Home},
    {name: "case", path: '/case', component: Case},
] satisfies RouteRecordRaw[];


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.name) {
            return {
                el: document.getElementById("section-" + String(to.name)),
                behavior: 'smooth',
            }
        }
    }
})

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');