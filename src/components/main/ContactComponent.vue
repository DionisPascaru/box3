<template>
  <div class="container relative-block">
    <div class="contact-block position-bottom">
        <el-row>
            <el-col :span="24" :sm="12">
                <div class="schedule">
                    <h3>График работы</h3>
                    <div class="schedule-item">
                        <span>Понедельник / Пятница</span>
                        <span>08:00 - 18:00</span>
                    </div>
                    <div class="schedule-item">
                        <span>Суботу</span>
                        <span>08:00 - 14:00</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" :sm="12">
                <white-social-media-component></white-social-media-component>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import WhiteSocialMediaComponent from "@/components/main/WhiteSocialMediaComponent.vue";
export default {
    name: 'ContactComponent',
    components: {
        WhiteSocialMediaComponent
    }
}
</script>
