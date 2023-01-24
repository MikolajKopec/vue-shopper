<template>
    <article class="product-card">
        <router-link :to="{name:'product',params:{productId:product.id}}"><img class="product-card__image" :src="product.image_url"></router-link>
        <div class="product-card__description">
            <h3>{{product.name}} <slot name="product_quantity">{{product.quantity}}</slot> </h3>
            <span class="product-card__description-price">{{product.price}}zł</span>
            <p class="product-card__description-text">{{product.description}}</p>
            <button @click="add_product_to_cart(product)">Dodaj do koszyka</button>
            <slot name="under_product"></slot>
        </div>
    </article>
</template>

<script>
export default {
    updated() {
        this.$store.commit('updateCartPrice')
    },
    props:['product'],
    methods:{
        add_product_to_cart(product){
            this.$store.commit('addProductToCart',{product})
            this.$store.commit('updateCartPrice')
        }
    }
}
</script>

<style>
.product-card{
    border: 1px solid black;
    margin: 5px;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.product-card__image{
    max-width: 250px;
}
</style>