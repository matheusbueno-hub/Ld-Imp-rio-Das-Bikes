let cart = [];
let total = 0;

// Atualiza o carrinho no HTML
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - R$ ${item.price}`;
    cartItems.appendChild(listItem);
  });

  document.getElementById('total-price').textContent = total.toFixed(2);
}

// Adiciona produto ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Adiciona ao carrinho
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    
    updateCart();
  });
});

// Função de finalização de compra
document.getElementById('checkout-button').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  
  alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
  cart = [];
  total = 0;
  updateCart();
});