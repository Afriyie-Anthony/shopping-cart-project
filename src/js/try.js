const shop = document.getElementById('products-cards')
let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
        
      let {id,name,price,desc,img} = x 

    return `
           <div class="cards" id="details">
           <img src=${img} alt="" />
           <div class="details">
             <div class="name">
               <p>${name}</p>
               <p>${price}</p>
             </div>
             <p>${desc}</p>
             <div class="btn">
             <button onclick ="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart </button>
             </div>
           </div>
         </div>
    `

   })
}

let add_to_cart = (id,name,price,img) => {
 
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img:img
    })

  localStorage.setItem('data',JSON.stringify(basket))


  calculate()
}

let calculate = () => {
  let cart_icon = document.getElementById('cart_amount')
  let cart_amount = basket.length

   cart_icon.innerHTML = cart_amount
}



calculate()
generateShop()

const closePopup = document.getElementById("close-popup")
const Popup = document.getElementById("popup")
closePopup.addEventListener("click", () => {
  Popup.style.display = "none"
})