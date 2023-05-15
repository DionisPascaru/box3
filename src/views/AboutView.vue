<template>
    <div class="about">
        <div class="banner-full">
            <img src="@/assets/images/about.png">
        </div>
        <div class="container">
            <p>Добро пожаловать в наш авто сервис с более чем 30-летним опытом! Мы специализируемся на ремонте и
                обслуживании автомобилей. Наши опытные механики обеспечат надежность и качество работ. Мы гарантируем
                профессиональный подход, использование высококачественных запчастей и индивидуальный подход к каждому
                клиенту. Ваш автомобиль в надежных руках!
            </p>
        </div>
        <contact-component></contact-component>
    </div>
</template>

<script>
import ContactComponent from "@/components/main/ContactComponent.vue";
export default {
    name: 'AboutView',
    components: {
        ContactComponent
    }
}
</script>
