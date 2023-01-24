<template>
        <div class="carousel">
            <div class="carousel-inner">
                <carousel-indicators
                v-if="indicators"
                :total="slides.length"
                :current-index="currentSlide"
                @switch="switchSlide($event)"
                ></carousel-indicators>

                <carousel-item 
                :slide="slide" v-for="(slide,index) in slides" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
                ></carousel-item>

                <CarouselControls 
                v-if="controls"
                @prev="prev" 
                @next="next">
            </CarouselControls>
            </div>
        </div>
</template>


<script>
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue'
import CarouselIndicators from "./CarouselIndicators.vue"
export default{
    props:{
        indicators: {
            type: Boolean,
            default: false,
        },
        slides: {
            type: Array,
            required: true,
        },
        controls: {
            type: Boolean,
            default: false,
        },
    },
    components:{
        CarouselItem,
        CarouselControls,
        CarouselIndicators
    },
    data:() =>({
        currentSlide:0,
        slideInterval:null,
    direction:"right"
}),
methods:{
    setCurrentSlide(index){
        this.currentSlide = index;
    },
    prev(step = -1){
        const index = this.currentSlide>0 
        ? this.currentSlide+step 
        : this.slides.length - 1;
        this.setCurrentSlide(index);
        this.direction = "left";
    },
    next(step = 1){
        const index = this.currentSlide<this.slides.length-1
        ? this.currentSlide +step 
        : 0;
        this.setCurrentSlide(index);
        this.direction = "right";
    },
    switchSlide(index) {
        const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }}

},
}
</script>
<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}

</style>
