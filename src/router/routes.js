import HomeView from '@/views/HomeView.vue';
import ServicesView from "@/views/ServicesView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/services',
        name: 'ServicesView',
        component: ServicesView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    }
]
