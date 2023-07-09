<template>
  <div class="container">
    <div class="icons section">
      <div class="icon" v-for="(iteration, index) in 10" :key="index">
        <img :src="require(`@/assets/images/${iteration}.svg`)" alt="icon">
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconsComponent'
}
</script>