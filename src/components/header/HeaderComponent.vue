<template>
  <div>

    <!-- descktop -->
    <div class="navigation-bar container" v-if="!isMobile">
      <el-menu :default-active="activeIndex"
               class="navigation-bar-menu"
               @select="handleSelect"
               background-color="transparent">
        <el-menu-item index="1" @click="goToSection('aboutId')">о нас</el-menu-item>
        <el-menu-item index="2" @click="goToSection('serviceId')">услуги</el-menu-item>
        <el-menu-item index="3" @click="goToSection('contactId')">контакты</el-menu-item>
        <el-menu-item index="4" @click="goToSection('announcementId')">вакансий</el-menu-item>
      </el-menu>
    </div>

    <!-- mobile -->
    <div v-if="isMobile">
      <div class="navigation-bar-mobile collapse-menu" :class="{active: this.isActive}">
        <el-menu
            :default-active="activeIndex"
            :class="{active: this.isActive}"
            class="navigation-bar-menu"
            @select="handleSelect"
            background-color="transparent">
          <el-menu-item index="1" @click="goToSection('aboutId')">о нас</el-menu-item>
          <el-menu-item index="2" @click="goToSection('serviceId')">услуги</el-menu-item>
          <el-menu-item index="3" @click="goToSection('contactId')">контакты</el-menu-item>
          <el-menu-item index="4" @click="goToSection('announcementId')">вакансий</el-menu-item>
        </el-menu>
        <div class="collapse-btn" :class="{active: this.isActive}" @click="this.collapseMenu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- mobile phone button -->
    <div v-if="isMobile" class="mobile-phone">
      <div class="btn-border"></div>
      <div class="image">
        <a href="tel:+373 79 793 793">
          <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="63.177" height="63.177" viewBox="0 0 63.177 63.177">
            <path id="Path_33" data-name="Path 33" d="M53.921,9.248a31.589,31.589,0,1,0,9.255,22.333A31.589,31.589,0,0,0,53.921,9.248ZM47.84,44l0,0V44l-1.6,1.59a8.424,8.424,0,0,1-7.95,2.274,27.99,27.99,0,0,1-8.129-3.643,37.558,37.558,0,0,1-6.412-5.17,37.846,37.846,0,0,1-4.791-5.812,29.479,29.479,0,0,1-3.6-7.286,8.423,8.423,0,0,1,2.106-8.6l1.874-1.874a1.337,1.337,0,0,1,1.891,0l0,0,5.918,5.918a1.337,1.337,0,0,1,0,1.891l0,0L23.67,26.759a2.832,2.832,0,0,0-.295,3.685A40.637,40.637,0,0,0,27.534,35.3a40.389,40.389,0,0,0,5.475,4.6,2.853,2.853,0,0,0,3.643-.316l3.359-3.412a1.337,1.337,0,0,1,1.891,0l0,0,5.928,5.939A1.337,1.337,0,0,1,47.84,44Z" transform="translate(0 0)" fill="#009e10"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      activeIndex: '1',
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
    handleSelect(key) {
      this.activeIndex = key;
    },
    goToSection(value) {
      if (this.isMobile) {
        this.collapseMenu();
      }

      const element = document.getElementById(value);
      const headerOffset = 45;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    },
  }
}
</script>
