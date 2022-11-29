<template>
     <div class="search_bar">
      <label>
        Wyszukaj:
        <input @input="$store.state.searchQuery = $event.target.value" type="text">
      </label>
      <label>
        Kategoria:
        <select @input="searchCategory" @change="updateSearchCategory">
            <option value="Wszystkie opcje">Wszystkie opcje</option>
          <option :value="category" v-for="category in $store.getters.getCategories" :key="category">{{category}}</option>
        </select>
      </label>
      <div>
      </div>
    </div>
</template>


<script>
export default {
    methods:{
        updateSearchCategory(event){
            let category = event.target.value
            this.$store.commit('updateSearchCategory',{category})
        }
    },

}
</script>