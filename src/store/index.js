import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default createStore({
  state: {
    searchQuery:"",
    searchCategory:"Wszystkie opcje",
    cartPrice: 0,
    cartProducts: [
    ],
    comments:[
      {
        id:1,
        productId:1,
        username:"Jan Testowy",
        content:"Nice.",
        rating:5,
      },
      {
        id:2,
        productId:1,
        username:"Jan Testowy",
        content:"Nice.",
        rating:4,
      },
      {
        id:3,
        productId:3,
        username:"Jan Testowy",
        content:"Nice.",
        rating:3,
      },
      {
        id:4,
        productId:3,
        username:"Jan Testowy",
        content:"Nice.",
        rating:3,
      },
      {
        id:5,
        productId:3,
        username:"Jan Testowy",
        content:"Nice.",
        rating:5,
      }
    ],
    all_products:[
    ]
  },
  getters: {
    getCategories(state){
      let uniq = [...new Set(state.all_products.map((product)=>product.category))];
      return uniq
    },
    getProducts(state){
      console.log(state.searchCategory)
      return state.all_products.filter( product => product.name.includes(state.searchQuery)).filter(product => state.searchCategory == "Wszystkie opcje" ? product : product.category == state.searchCategory)
    },
    getProduct: (state) => (productId) => {
      return state.all_products.find(product => product.id == productId)
    },
    getCommentsForProduct:(state) => (productId) => {
      return state.comments.filter(comment => comment.productId == productId)
    },
    getCartProducts(state){
      return state.cartProducts.filter(product => product!=null);
    },
    getAllProducts(state){
      return state.all_products;
    }
  },
  mutations: {
    deleteProductFromCart(state,{product}){
      state.cartProducts = state.cartProducts.filter(function(val,index,arr){
        if(val.quantity>1){
          val.quantity -= 1
          return product
        }else{
          return val != product 
        }
      })
    },
    addProductToCart(state,{product}){
      if(product.quantity>0){
        if(state.cartProducts[product.id]){
          state.cartProducts[product.id].quantity += 1
        }else{
          state.cartProducts[product.id] = JSON.parse(JSON.stringify(product));
          state.cartProducts[product.id].quantity = 1
        }
        product.quantity-=1
      }
    },
    updateCartPrice(state){
      let price = 0
      state.cartProducts.forEach((product) => {
        price +=  (product.price * product.quantity)
      })
      state.cartPrice = price.toFixed(2)
    },
    updateSearchCategory(state,{category}){
      state.searchCategory = category
    },
    addComment(state,{username,content,rating,productId}){
      let comments = state.comments.map((comment)=> comment)
      state.comments.push({
        id:comments[comments.length-1].id+1,
        productId:productId,
        username:username,
        content:content,
        rating:rating,
      })
    },
    setAllProducts(state,products){
      state.all_products = products
    },
    resetCartProducts(state){
      state.cartProducts = [];
    },
    resetCartPrice(state){
      state.cartPrice = 0;
    }

  },
  actions: {
    async getProducts(store){
      const {data} = await axios.get(
        'http://localhost:5000/items/'
      );
        store.commit('setAllProducts',data)
        
        return store.state.all_products
    },
    async getProduct(store,productId){
      const {data} = await axios.get(
        'http://localhost:5000/items/'+productId
      );
        return data;
    },
    async updateProduct(store,product){
      await axios.put(
        'http://localhost:5000/items/',product
      ).then(response =>{
        return response
      })
    },
    async buyProducts({dispatch,commit,getters}){
      getters.getCartProducts.forEach(product => {
        dispatch('getProduct',product.id).then(response=>{
          let db_product = response
          db_product.quantity -= product.quantity;
          if(db_product.quantity<0){
            alert("Error, refresh page F5.")
          }else{
            console.log(db_product)
            dispatch('updateProduct',db_product);
          }
        }).then(
          dispatch('resetCart')
        )
      });
    },
    resetCart({commit}){
      commit('resetCartProducts');
      commit('resetCartPrice');
    }
  },
  modules: {
  }
})
