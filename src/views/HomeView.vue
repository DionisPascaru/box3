<template>
    <div class="home-view shadow-bottom">
        <contact-component></contact-component>
    </div>
</template>

<script>
import ContactComponent from "@/components/main/ContactComponent.vue";

export default {
    name: 'HomeView',
    components: {ContactComponent}
}
</script>
