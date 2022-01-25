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
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-stone-500">
            <div class></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="item-container w-[634px] h-[376px] bg-stone-900">
            <div class></div>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
  <div class>
    <button @click="slideToClick">slide to</button>
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
var swiper: Swiper
// 尝试progress activeIndex 等
const initSwiper = () => {
  if (!containerRef.value) return
  swiper = new Swiper(containerRef.value, {
    loop: true,
    // speed: 2500,
    slidesPerView: "auto",
    loopedSlides: 5,
    spaceBetween: 100,
    centeredSlides: true,
    watchSlidesProgress: true,
    on: {
      setTranslate: function (swiper, translate) {
        // console.log('==========setTranslate activeIndex', swiper.activeIndex)
        // console.log('==========setTranslate realIndex', swiper.realIndex)
        // console.log('==========setTranslate previousIndex', swiper.previousIndex)
        // console.log('==========setTranslate progress', swiper.progress)

        return
        // const slides = swiper.slides
        // // console.log('==========swiper.progress', swiper)
        // slides.forEach((slide, index) => {
        //   const progress = Reflect.get(slide, 'progress')
        //   let styleStr = `opacity:'';background:'';transform:scale(${(1 - Math.abs(progress) / 5)})`
        //   slide.setAttribute("style", styleStr);
        //   console.log('========== styleStr', styleStr)
        //   console.log('========== progress', progress)
        // })
      },
      setTransition: function (swiper, transition) {
        // console.log('==========set transition', transition)
        // for (var i = 0; i < this.slides.length; i++) {
        //   var slide = this.slides.eq(i)
        //   slide.transition(transition);
        // }
      },
      transitionStart: (swiper) => {
        // console.log('==========transitionStart activeIndex', swiper.activeIndex)
        // console.log('==========transitionStart realIndex', swiper.realIndex)
        // console.log('==========transitionStart previousIndex', swiper.previousIndex)
        // console.log('==========transitionStart progress', swiper.progress)


      },
      transitionEnd: (swiper) => {
        // console.log('==========transitionEnd',)
        // console.log('==========transitionEnd activeIndex', swiper.activeIndex)
        // console.log('==========transitionEnd realIndex', swiper.realIndex)
        // console.log('==========transitionEnd previousIndex', swiper.previousIndex)
        // console.log('==========transitionEnd progress', swiper.progress)

      },
      slideChange: (swiper) => {
        console.log('==========slideChange activeIndex', swiper.activeIndex)
        console.log('==========slideChange realIndex', swiper.realIndex)
        console.log('==========slideChange previousIndex', swiper.previousIndex)
        console.log('==========slideChange progress', swiper.progress)
        let slides = swiper.slides
        let activeEl = slides[swiper.activeIndex]
        activeEl.classList.add('slide--is-active')
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
let index = 0
const slideToClick = () => {
  swiper.slideToLoop(0)
  // if (index >= 5) {
  //   index = 0
  // }
  // swiper.slideTo(index++)
}
</script>

<style scoped lang="scss">
// .swiper-slide {
//   transition: all 0.8s;
//   width: 634px;
// }
.item-container {
  transition: all 0.5s;
}
:deep(.swiper-slide-active) {
  .item-container {
    transform: scale(1.5);
  }
}
</style>