<template>
  <div class="home-view">
    <header-component></header-component>
    <banner-component></banner-component>
    <div class="blur-bg">
      <about-component id="aboutId"></about-component>
      <icons-component></icons-component>
      <services-component id="serviceId"></services-component>
      <announcement-component id="announcementId"></announcement-component>
      <white-social-media-component></white-social-media-component>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import BannerComponent from "@/components/main/BannerComponent.vue";
import AboutComponent from "@/components/main/AboutComponent.vue";
import IconsComponent from "@/components/main/IconsComponent.vue";
import ServicesComponent from "@/components/main/ServicesComponent.vue";
import AnnouncementComponent from "@/components/main/AnnouncementComponent.vue";
import WhiteSocialMediaComponent from "@/components/main/WhiteSocialMediaComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    IconsComponent,
    ServicesComponent,
    AnnouncementComponent,
    WhiteSocialMediaComponent,
    FooterComponent,
  }
}
</script>
