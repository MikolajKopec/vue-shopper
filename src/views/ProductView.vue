<template>
    <ProductCard :product="getProduct(router.currentRoute.params.productId)"></ProductCard>
    <div class="comment-send">
        <label>Wyświetlana nazwa:
            <input v-model="username" type="text">
        </label>
        <label>
            Ocena produktu:
            <select v-model="rating">
                <option v-for="i in 5" :key="i">{{i}}</option>
            </select>
        </label>
        <textarea v-model="content" class="comment-write" rows="10" cols="50">Napisz komentarz....</textarea>
        <button @click="addComment()">Wyślij komentarz</button>
    </div>
    {{username}}
    {{content}}
    {{rating}}
    <Comment :comment="comment" v-for="comment in getComments(router.currentRoute.params.productId)" :key="comment.id"></Comment>
</template>

<script setup>
import {ref} from 'vue'

const username = ref('')
const content = ref('')
const rating = ref('')
</script>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Comment from '@/components/Comment.vue'
export default {
    name:"ProductView",
    components:{
        ProductCard,Comment
    },
    methods:{
        getProduct(productId){
            return this.$store.getters.getProduct(productId)
        },
        getComments(productId){
            return this.$store.getters.getCommentsForProduct(productId)
        },
        addComment(){
            console.log(username)
            this.$store.commit('addComment',{username:username,content:content,rating:rating,productId:1})
        }
    },
    data() {
        
        return{
            router:this.$router,
        }
    }
    
}
</script>

<style>
.comment-send{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>