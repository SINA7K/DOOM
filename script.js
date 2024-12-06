document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".card-body");
  
    // Update the total price based on all products' quantities
    const updateTotalPrice = () => {
      let totalPrice = 0;
      
      products.forEach((product) => {
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.replace(" $", ""));
        totalPrice += quantity * unitPrice;
      });
  
      document.querySelector(".total").textContent = `${totalPrice} $`;
    };
  
    // Increase quantity
    products.forEach((product) => {
      const plusBtn = product.querySelector(".fa-plus-circle");
      const minusBtn = product.querySelector(".fa-minus-circle");
      const quantityDisplay = product.querySelector(".quantity");
  
      plusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplay.textContent);
        quantityDisplay.textContent = quantity + 1;
        updateTotalPrice();
      });
  
      minusBtn.addEventListener("click", () => {
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity > 0) {
          quantityDisplay.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Delete item
    products.forEach((product) => {
      const deleteBtn = product.querySelector(".fa-trash-alt");
  
      deleteBtn.addEventListener("click", () => {
        product.remove();
        updateTotalPrice();
      });
    });
  
    // Like item
    products.forEach((product) => {
      const heartIcon = product.querySelector(".fa-heart");
  
      heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("liked");
      });
    });
  
    // Initialize the total price
    updateTotalPrice();
  });
  