<template>
  <div class="text-[24px] font-bold text-left">ScaleSwiper</div>
  <div class="w-full overflow-hidden">
    <div class="swiper-container mx-auto w-full overflow-hidden" ref="containerRef">
      <div class="swiper-wrapper w-full">
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-orange-200">
            <div class></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-orange-600">
            <div class></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-red-400">
            <div class></div>
          </div>
        </div>
        <!-- <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-stone-500">
            <div class></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-stone-900">
            <div class></div>
          </div>
        </div>-->
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Swiper, { Navigation, Pagination, Autoplay, } from "swiper"
import 'swiper/css/bundle';
import { onMounted, ref } from "vue";
const containerRef = ref<HTMLElement>()
onMounted(() => {
  initSwiper()
})
const initSwiper = () => {
  if (!containerRef.value) return
  var swiper = new Swiper(containerRef.value, {
    loop: true,
    speed: 2500,
    slidesPerView: 3,
    // spaceBetween: 30,
    centeredSlides: true,
    watchSlidesProgress: true,
    on: {
      setTranslate: function (swiper, translate) {
        const slides = swiper.slides
        // console.log('==========swiper.progress', swiper)
        slides.forEach((slide, index) => {
          const progress = Reflect.get(slide, 'progress')
          let styleStr = `opacity:'';background:'';transform:scale(${(1 - Math.abs(progress) / 5)})`
          slide.setAttribute("style", styleStr);
          console.log('========== styleStr', styleStr)
          console.log('========== progress', progress)
        })
      },
      setTransition: function (swiper, transition) {
        console.log('==========set transition', transition)
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i)
          slide.transition(transition);
        }
      },
      transitionEnd: () => {
        console.log('==========transitionEnd',)
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
</script>

<style scoped lang="scss">
.swiper-slide {
  transition: all 0.8s;
  width: 634px;
}
</style>