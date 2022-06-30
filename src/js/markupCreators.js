export const createProductItem = ({ product, price, currency, id } = {}) => {
  return `<li class="product" data-id = "${id}">
  <span class = "product-name">${product}</span>
  <p class="descr">
    <span class="price">${price}</span>
    <span class="currency">${currency}</span>
  </p>
  <button class="btn">Add to cart</button>
   </li>`;
};
