<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="subscribe-block">
          <div class="subscribe">
            <h3>подписывайся на наши соц сеть</h3>
            <div class="subscribe-media-items">
              <div class="subscribe-media-item">
                <a href="#">
                  <img :src="require('@/assets/images/facebook.svg')">
                </a>
              </div>
              <div class="subscribe-media-item">
                <a href="#">
                  <img :src="require('@/assets/images/instagram.svg')">
                </a>
              </div>
              <div class="subscribe-media-item">
                <a href="#">
                  <img :src="require('@/assets/images/tik-tok.svg')">
                </a>
              </div>
              <div class="subscribe-media-item">
                <a href="#">
                  <img :src="require('@/assets/images/telegram.svg')">
                </a>
              </div>
            </div>
          </div>
          <div class="subscribe-red-line"></div>
        </div>
      </div>
    </div>
    <div class="container copyright">
      <a href="https://reabovstudio.com/" target="_blank">by reabovstudio</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
