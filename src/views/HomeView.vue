<template>
    <div class="home-view shadow-bottom window-height">
        <contact-component class="position-bottom"></contact-component>
    </div>
</template>

<script>
import ContactComponent from "@/components/main/ContactComponent.vue";

export default {
    name: 'HomeView',
    components: {ContactComponent}
}
</script>
