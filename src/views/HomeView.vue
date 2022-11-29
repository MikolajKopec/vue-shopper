<template>
  <div class="home">
    <div class="products-container">
            <ProductCard :product="product" v-for="product in $store.getters.getProducts" :key="product['id']"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'HomeView',
  components: {
      ProductCard
    },
  data(){
    return{
    }
  }
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
