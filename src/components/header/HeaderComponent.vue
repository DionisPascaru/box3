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
      <a href="tel:+373 79 793 793">
        <img src="@/assets/images/call.svg">
      </a>
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
