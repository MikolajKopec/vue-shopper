<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <span class="link-to-cart">
        <router-link to="/cart">Cart</router-link>
        {{$store.state.cartPrice}} zł
    </span>
   <SearchBar></SearchBar>
  </nav>
  <div>{{$store.state.searchQuery}}</div>
</div>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
    components:{SearchBar},
    mounted() {
        this.$store.commit('updateCartPrice')
    },
}
</script>

<style>
body{
  margin: 0;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
