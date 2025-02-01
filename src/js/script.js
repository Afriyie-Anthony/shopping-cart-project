const shop = document.getElementById("products-cards");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((c) => {
   
    return `
           <div class="cards" id="details">
           <img src=${c.img} alt="" />
           <div class="details">
             <div class="name">
               <p>${c.name}</p>
               <p>$${c.price}</p>
             </div>
             <div class="btn">
             <button onclick ="add_to_cart('${c.id}','${c.name}','${c.price}','${c.img}')" class="add-to-cart">Add to Cart </button>
             <button class="view-details" 
               data-name="${c.name}" 
               data-desc="${c.desc}" 
               data-price="${c.price}" 
               data-img="${c.img}">
               View Details
             </button>
             </div>
           </div>
         </div>
    `
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

// show popup function
function showPopup(name,img,desc,price){
   const popUp =document.getElementById("popup")
   popUp.innerHTML = `
   <i class="bx bx-x" id="close-popup"></i>
   <div class="products-details">
     <div class="images">
       <div class="bg-image">
         <img id="imageBox" src=${img} alt="image">
       </div>
       <div class="small-image">
         <span><img src=${img} onclick="myfunction(this)"></span>
         <span><img src=${img} onclick="myfunction(this)"></span>
         <div><img src="${img}" onclick="myfunction(this)"></div>
         <div><img src=${img} onclick="myfunction(this)"></div>
       </div>
     </div>
  
     <div class="text">
       <small>${name}</small>
       <h1>${name}</h1>
       <p>${desc}</p>
         <div class="price">
           <span>${price}</span>
           <button> 50%</button>
         </div>
         <small class="small">$250.00</small> <br>
         <div class="btn">
         <form action="">
         </form>
           <div class="btn2">
               <button>
                 Add to cart
               </button>
           
           </div>
         </div>
     </div>
   </div>
   `
   popUp.style.display = "flex"

   //close popup
   const closePopUp =document.getElementById('close-popup')
   closePopUp.addEventListener('click', () => {
    popUp.style.display = "none"
   })
  }




let add_to_cart = (id, name, price, img) => {
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img: img,
  });

  localStorage.setItem("data", JSON.stringify(basket));

  updateCart();
};

let updateCart = () => {
  let cart_icon = document.getElementById("cart_amount");
  let cart_amount = basket.length;

  cart_icon.innerHTML = cart_amount;
};

updateCart();
generateShop();


//Get the search for DOM elements
const searchBar =document.getElementById('searchbar');
const searchProductsList = document.getElementById('searchproductslist');
const mainProducts = document.getElementById('main')

//Display the filtered search results
function displaySearchResults(filteredProducts){
  mainProducts.innerHTML = ''
  searchProductsList.innerHTML = ''
  if(filteredProducts.length === 0){
    searchProductsList.innerHTML = '<p>No Products found.</p>'
    return;
  }
  else{
    filteredProducts.forEach(x => {
      searchProductsList.innerHTML +=`
      <div class="cards" id="details">
      <img src=${x.img} alt="" />
      <div class="details">
        <div class="name">
          <p>${x.name}</p>
          <p>$${x.price}</p>
        </div>
        <p>${x.desc}</p>
        <div class="btn">
        <button onclick ="add_to_cart('${x.id}','${x.name}','${x.price}','${x.img}')">Add to Cart </button>
        <button id="view-details">View Details</button>
        </div>
      </div>
    </div>
      `
    })
  }
 

}
//Add event listener for the search bar
searchBar.addEventListener('input', (e) => {
  const searchItem = e.target.value.toLowerCase();
  const filteredProducts = shopItemsData.filter(x =>
    x.gender.toLowerCase().includes(searchItem) || 
    x.name.toLowerCase().includes(searchItem)
  )
  
  displaySearchResults(filteredProducts)
})



// testimonials

const testimonial = [
  {
    "id": 1,
    "name": "Anthony Afriyie" ,
    "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga voluptatum quidem, itaque ipsam quas non incidunt accusantium dolor, veniam tempora repellat aperiam ",
    "img": "../../public/profile-image/profile5.jpeg"
  },
  {
    "id": 2,
    "name": "Adamu Fatima" ,
    "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga voluptatum quidem, itaque ipsam quas non incidunt accusantium dolor, veniam tempora repellat aperiam ",
    "img": "../../public/profile-image/profile-3.jpg"
  },
  {
    "id": 3,
    "name": "Michael Opoku" ,
    "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga voluptatum quidem, itaque ipsam quas non incidunt accusantium dolor, veniam tempora repellat aperiam ",
    "img": "../../public/profile-image/profile-1.jpg"
  }
]

const testimonialContainer = document.getElementById('testimonials')

document.addEventListener('DOMContentLoaded', () => {
  const testimonialsCards = () => {
    testimonial.forEach((test) => {
      console.log(test)
       
      const cardHTML = `
      <div class="customer-testimonial">
      <img src="${test.img}" alt="">
      <p class="message">${test.desc}</p>

     <div class="name-rating">
      <p>${test.name}</p>
      <div class="rating">
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star-half"></i>
      </div>
     </div>
    </div>
      `

      testimonialContainer.innerHTML += cardHTML
    })
  }
  testimonialsCards()

})
