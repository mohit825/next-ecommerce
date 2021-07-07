export const orderCategories = (categories) => {
  let newCategories = categories.sort((a, b) => {
    return a.order - b.order;
  });
  return newCategories;
};

export const LINKS = ["Home", "Products"];

export const filterProductFromCategory = (id, products) => {
  console.log(id, products);
  return products.filter((product) => {
    return product.category === id;
  });
};

export const calculatePrice = (price, quantity) => {
  return parseInt(price) * parseInt(quantity);
};
