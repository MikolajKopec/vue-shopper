<template>
    <div class="home">
        <Carousel :slides="slides" :controls="true" :indicators="true"></Carousel>
    </div>
  </template>

<script>
import Carousel from "../components/carousel/Carousel.vue"; 

export default {
    name:"Home",
    components:{
        Carousel
    },
    data(){
        return{
            slides: [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ],
        }
    } 
}
</script>
<style>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(90deg, #FFFFFF 29%,rgba(0,0,0,0) 30% , rgba(0,0,0,0) 69%, #FFFFFF 70%);
}
</style>