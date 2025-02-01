let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping_cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let updateCart = () => {
  let cartIcon = document.getElementById("cart_amount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

updateCart();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, name, price, item, img } = x;
        return `
      <div class="cart_item" id=prodcut-id-${id}>
                <p>${name}</p>
         <div class='cart_item_img'>
           <img width="100" src=${img} alt="" />
         </div>
                <p >$ ${price}</p>
      
        <button  class='rmv_btn'  onclick="removeItem(${id})">Remove</button>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = `<h3>Shopping cart is empty</h3>`;
  }
};
generateCartItems();

let removeItem = (id) => {
  basket = basket.filter((x) => x.id != id);
  localStorage.setItem("data", JSON.stringify(basket));
  updateCart();
  generateCartItems();
  window.location.reload();
};

let Total_amount = () => {
  let total_amount = 0;
  basket.map((item) => {
    total_amount += item.item * item.price;
  });
  label.innerHTML = `
    <div class='checkout_area'>
       <h2>Total Price : $ ${total_amount} </h2>
       <div class="check-btn">
       <a href="../../index.html"> <button class='update' onClick=window.location.reload()>
       Update cart
     </button></a>
       <a href="../html/checkout.html"> <button class='checkout'>Checkout</button></a>
       </div>
    </div>
  `;
};

Total_amount();
