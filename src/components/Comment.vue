<template>
    <div class="comment">
        <div class="comment-header">
            <div class="comment-header__ratings">
                <span v-for="i in comment.rating" :key="i" class="comment-header__ratings-star"></span></div>
            </div>
            <span class="comment-header__username">{{comment.username}}</span> 
        <p class="comment-content">{{comment.content}}</p>
    </div>
</template>

<script>
export default {
    props:['comment'],
    data(){
        return{

        }
    }
    
}
</script>

<style>
.comment{
    display: flex;
    flex-direction: column;
    max-width: 40%;
    margin: 0 auto;
}
.comment-header{
    text-align: end;
}
.comment-content{
    text-align: start;
}
.comment-header__ratings-star::after{
    content: "★";
    color: rgb(226, 146, 26);
    clip:
}
</style>