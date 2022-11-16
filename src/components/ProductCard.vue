<template>
    <article class="product-card">
        <img class="product-card__image" src="">
        <div class="product-card__description">
            <h3>{{product.productName}} x {{product.productQuantity}}</h3>
            <span class="product-card__description-price">{{product.productPrice}}zł</span>
            <p class="product-card__description-text">{{product.productText}}</p>
            <button @click="$store.commit('addProductToCart',{product})">Dodaj do koszyka</button>
        </div>
    </article>
</template>

<script>
export default {
    updated() {
        this.$store.commit('updateCartPrice')
    },
    props:['product'],
}
</script>