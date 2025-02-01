const shop = document.getElementById("products-cards");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    // let { id, name, price, desc, img } = x;

    return `
           <div class="cards" id="details">
           <img src=${x.img} alt="" />
           <div class="details">
             <div class="name">
               <p>${x.name}</p>
               <p>$${x.price}</p>
             </div>
             <p></p>
             <div class="btn">
             <button onclick ="add_to_cart('${x.id}','${x.name}','${x.price}','${x.img}')" class="add-to-cart">Add to Cart </button>
             <!-- Add data attributes to the View Details button -->
             <button class="view-details" 
               data-name="${x.name}" 
               data-desc="${x.desc}" 
               data-price="${x.price}" 
               data-img="${x.img}">
               View Details
             </button>
             </div>
           </div>
         </div>
    `;
  });
 
  //adding event listener to view button
  const viewButton = document.querySelectorAll('.view-details')

viewButton.forEach(button => {
  button.addEventListener('click', (e) => {
    const {name, price, img, desc } = e.target.dataset
    showPopup(name,img,desc,price)
  })
})

 
};