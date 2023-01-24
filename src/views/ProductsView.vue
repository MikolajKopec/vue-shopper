<template>
  <div class="home">
    <div class="products-container">
            <ProductCard :product="product" v-for="product in products" :key="product['id']"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductView',
  beforeCreate(){
  this.$store.dispatch('getProducts');
},
  components: {
      ProductCard
    },
    computed:{
      products(){
        return this.$store.getters.getProducts
      }
    },
}
</script>

<style>
.products-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.products-container__product{
  display: flex;
  padding: 10px 20px;
}

</style>
