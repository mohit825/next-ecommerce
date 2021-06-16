export const orderCategories = (categories) => {
  let newCategories = categories.sort((a, b) => {
    return a.order - b.order;
  });
  return newCategories;
};
