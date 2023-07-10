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
    goToSection(value, height = 0) {
      if (this.isMobile) {
        this.collapseMenu();
      }

      if (this.$route.name !== 'HomeView') {
        this.$router.push('/');
      } else {
        const top = document.getElementById(value).offsetTop;
        window.scrollTo({
          top: (top + 700) - height,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
  }
}
</script>
