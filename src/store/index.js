import { createStore } from 'vuex'

export default createStore({
  state: {
    cartPrice: 0,
    cartProducts: [
    {
        id:1,
        productName: "Testowy produkt 1",
        productPrice: 30.99,
        productText:"This is sample of product.",
        productQuantity:1,
    },
    {
        id:2,
        productName: "Testowy produkt 2",
        productPrice: 149.99,
        productText:"This is sample of product.",
        productQuantity: 1,
    }
    ],
  },
  getters: {

  },
  mutations: {
    deleteProductFromCart(state,{product}){
      state.cartProducts = state.cartProducts.filter(function(val,index,arr){
        if(val.productQuantity>1){
          val.productQuantity -= 1
          return product
        }else{
          return val != product 
        }
      })
    },
    addProductToCart(state,{product}){
      if(state.cartProducts.includes(product)){
        product.productQuantity += 1
      }else{
        state.cartProducts.push(product)
      }
    },
    updateCartPrice(state){
      let price = 0
      state.cartProducts.forEach((product) => {
        price +=  (product.productPrice * product.productQuantity)
      })
      state.cartPrice = price.toFixed(2)
    }
  },
  actions: {
  },
  modules: {
  }
})
