import { createStore } from 'vuex'

export default createStore({
  state: {
    searchQuery:"",
    searchCategory:"Wszystkie opcje",
    cartPrice: 0,
    cartProducts: [
    ],
    all_products:[
      {
        id:1,
        category:"Buty",
        productName: "Buty 1",
        productPrice: 300.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://sportstore.pl/eng_pl_Buty-ONITSUKA-TIGER-Mexico-66-ASICS-8091_2.jpg"
      },
      {
        id:2,
        category:"Buty",
        productName: "Buty 2",
        productPrice: 149.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://elcolt.pl/userdata/public/gfx/7836/Buty-LOWA-ZEPHYR-Czarne-GTX-MID-TF.jpg"
      },
      {
        id:3,
        category:"Art. spożywcze",
        productName: "Cukierki",
        productPrice: 10.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://a.allegroimg.com/s1024/0c5a7a/26639cc14012aa309c029951713f"
      },
      {
        id:4,
        category:"Buty",
        productName: "Buty 1",
        productPrice: 300.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://sportstore.pl/eng_pl_Buty-ONITSUKA-TIGER-Mexico-66-ASICS-8091_2.jpg"
      },
      {
        id:5,
        category:"Buty",
        productName: "Buty 2",
        productPrice: 149.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://elcolt.pl/userdata/public/gfx/7836/Buty-LOWA-ZEPHYR-Czarne-GTX-MID-TF.jpg"
      },
      {
        id:6,
        category:"Art. spożywcze",
        productName: "Cukierki",
        productPrice: 10.99,
        productText:"This is sample of product.",
        productQuantity:1,
        image_url:"https://a.allegroimg.com/s1024/0c5a7a/26639cc14012aa309c029951713f"
      }
    ]
  },
  getters: {
    getCategories(state){
      let uniq = [...new Set(state.all_products.map((product)=>product.category))];
      return uniq
    },
    getProducts(state){
      return state.all_products.filter( product => product.productName.includes(state.searchQuery)).filter(product => state.searchCategory =="Wszystkie opcje" ? product : product.category == state.searchCategory)
    }
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
    },
    updateSearchCategory(state,{category}){
      console.log(category)
      state.searchCategory = category
    },
  },
  actions: {
  },
  modules: {
  }
})
