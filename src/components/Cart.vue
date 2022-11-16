<template>
    <div class="cart">
        <div class="cart__summary">
            <span class="cart__summary-price">{{$store.state.cartPrice}}</span>
        </div>
        <div class="cart__product" v-for="product in $store.state.cartProducts" :key="product['id']">
            <ProductCard :product="product"></ProductCard>
            <button class="cart__product-delete" @click="$store.commit('deleteProductFromCart',{product})">Delete product from cart</button>
        </div>
    </div>
</template>



<script>
import ProductCard from './ProductCard.vue';
export default {
    mounted() {
        this.$store.commit('updateCartPrice')
    },
    updated() {
        this.$store.commit('updateCartPrice')
    },
    components:{
        ProductCard
    },

}
</script>
