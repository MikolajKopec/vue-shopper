<template>
    <div class="cart">
      <Cart></Cart>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProductCard from '@/components/ProductCard.vue'
  import Cart from '@/components/Cart.vue'
  
  export default {
    name: 'CartView',
    components: {
      ProductCard,Cart
    },
    data(){
      return{
      }
    }
  }
  </script>
  