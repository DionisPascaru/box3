<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="subscribe-block">
          <div class="subscribe">
            <h3>подписывайся на наши соц сеть</h3>
            <div class="subscribe-media-items">
              <div class="subscribe-media-item">
                <img :src="require('@/assets/images/facebook.svg')">
              </div>
              <div class="subscribe-media-item">
                <img :src="require('@/assets/images/instagram.svg')">
              </div>
              <div class="subscribe-media-item">
                <img :src="require('@/assets/images/tik-tok.svg')">
              </div>
              <div class="subscribe-media-item">
                <img :src="require('@/assets/images/telegram.svg')">
              </div>
            </div>
          </div>
          <div class="subscribe-red-line"></div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <a href="https://reabovstudio.com/" target="_blank">by reabovstudio</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
