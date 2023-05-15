<template>
    <div>
        <div class="header" v-if="!isMobile">
            <div class="d-flex align-items-center">
                <div class="logo">
                    <router-link :to="{name: 'HomeView'}">
                        <img src="@/assets/logo.svg" alt="logo"/>
                    </router-link>
                </div>
                <div class="address">
                    <h3>ул. Каля Орхеюлуй, 112</h3>
                </div>
            </div>
            <div class="nav-menu">
                <ul>
                    <li class="menu-item" :class="{'active': activeTab('ServicesView')}">
                        <router-link :to="{name: 'ServicesView'}">услуги</router-link>
                    </li>
                    <li class="menu-item" :class="{'active': activeTab('ContactView')}">
                        <router-link :to="{name: 'ContactView'}">контакты</router-link>
                    </li>
                    <li class="menu-item" :class="{'active': activeTab('AboutView')}">
                        <router-link :to="{name: 'AboutView'}">о нас</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-mobile" v-if="isMobile">
            <div class="top-bar">
                <div class="logo">
                    <router-link :to="{name: 'HomeView'}">
                        <img src="@/assets/logo.svg" alt="logo"/>
                    </router-link>
                </div>
                <div class="hamburger-lines"
                     :class="{active: this.isActive}"
                     @click="this.collapseMenu">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="nav-menu-mobile" :class="{active: this.isActive}">
                <ul>
                    <li class="menu-item" :class="{'active': activeTab('ServicesView')}" @click="this.collapseMenu">
                        <router-link :to="{name: 'ServicesView'}">услуги</router-link>
                    </li>
                    <li class="menu-item" :class="{'active': activeTab('ContactView')}" @click="this.collapseMenu">
                        <router-link :to="{name: 'ContactView'}">контакты</router-link>
                    </li>
                    <li class="menu-item" :class="{'active': activeTab('AboutView')}" @click="this.collapseMenu">
                        <router-link :to="{name: 'AboutView'}">о нас</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            isActive: false,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 768;
        }
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },
    methods: {
        collapseMenu() {
            this.isActive = !this.isActive;
        },
        activeTab(tab) {
            return this.$route.name === tab;
        }
    }
}
</script>
