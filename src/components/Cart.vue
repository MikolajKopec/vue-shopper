<template>
    <div class="cart">
        <div class="cart__products">
                <ProductCard :product="product" v-for="product in $store.state.cartProducts" :key="product['id']">
                    <template #product_quantity>
                        x {{product.productQuantity}}
                    </template>
                    <template #under_product>
                        <br><br>
                        <button class="cart__product-delete" @click="$store.commit('deleteProductFromCart',{product})">Delete product from cart</button>
                    </template>
                </ProductCard>
        </div>
        <div class="cart__summary">
            <span class="cart__summary-price">{{$store.state.cartPrice}}</span>
        </div>
    </div>
</template>



<script>
import ProductCard from './ProductCard.vue';
export default {
    components:{
        ProductCard
    },

}
</script>

<style>
.cart__products{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>