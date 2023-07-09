<template>
  <div class="about">
    <div class="parallax-image">
      <div class="logo">
        <img src="@/assets/logo.svg">
      </div>
      <div class="parallax-image-static">
        <!--          <div class="parallax-shadow-wrapper"></div>-->
        <img src="@/assets/images/2.2.png">
      </div>
    </div>
    <div class="container">
      <div class="section">
        <h2>добро пожаловать</h2>
        <p>
          Box3 - это автосервис, который предлагает полный спектр услуг по обслуживанию и ремонту автомобилей.
          У нас работает квалифицированный персонал, способный решить любую проблему с вашим автомобилем. Мы предлагаем
          широкий выбор услуг, включая техническое обслуживание, системы охлаждения, трансмиссии, тормозной системы,
          электрические работы и диагностику.
        </p>
        <p>
          Мы гарантируем качество работы и использование современного оборудования,
          чтобы обеспечить надежность вашего автомобиля. Мы стараемся сделать процесс обслуживания удобным для вас,
          предлагая гибкие графики работы и возможность предварительной записи. Box3 готов стать вашим надежным
          партнером
          в уходе за вашим автомобилем.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="work-schedule section border-top border-bottom">
        <h2>График работы</h2>
        <div class="work-schedule-activity">
          <h3>Понедельник / Пятница</h3>
          <span>08:00 - 18:00</span>
        </div>
        <div class="work-schedule-activity">
          <h3>Суббота</h3>
          <span>08:00 - 14:00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
}
</script>