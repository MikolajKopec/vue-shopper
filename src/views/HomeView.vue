<template>
  <div class="home">
    <Cart></Cart>
    <!-- <span>{{price}} aaaaa</span> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from '@/components/ProductCard.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,HelloWorld,Cart
  },
  data(){
    return{
    }
  }
}
</script>
