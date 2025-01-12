const product = [
  {
    id: 1,
    img: "../../public/images/product_1.png",
    name: "Casual Round neck",
    gender: "Women",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 2,
    img: "../../public/images/product_2.png",
    name: "Leader Hoodie",
    gender: "Men",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 3,
    img: "../../public/images/product_3.png",
    name: "Kids Round neck",
    gender: "Children",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 4,
    img: "../../public/images/product_10.png",
    name: "Casual Round neck",
    gender: "Female",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 5,
    img: "../../public/images/product_10.png",
    name: "Casual Round neck",
    gender: "Female",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 6,
    img: "../../public/images/product_10.png",
    name: "Casual Round neck",
    gender: "Female",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 7,
    img: "../../public/images/product_10.png",
    name: "Casual Round neck",
    gender: "Female",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  {
    id: 8,
    img: "../../public/images/product_10.png",
    name: "Casual Round neck",
    gender: "Female",
    price: 20.00,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum!"
  },
  
]

const products = document.getElementById("products-cards")

document.addEventListener("DOMContentLoaded", () => {
  const methodCards = () => {
    product.forEach((cards) => {
      console.log(cards);
      const cardHTML = `
      <div class="cards">
      <img src=${cards.img} alt="" />
      <div class="details">
        <div class="name">
          <p>${cards.name}</p>
          <p>${cards.price}</p>
        </div>
        <p>${cards.desc}</p>
        <div class="btn">
          <button class="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
      `

      products.innerHTML += cardHTML;
    })
  }
  methodCards()
})


function myfunction(smallimg){
  var fullimg = document.getElementById("imageBox");
  fullimg.src =smallimg.src;
}
