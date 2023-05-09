const isInCart = (selectedItems, id) => {
  return !!selectedItems.find((item) => item.id === id);
};

const quantityCount = (selectedItems, id) => {
  const index = selectedItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    return selectedItems[index].quantity;
  }
};

export { isInCart, quantityCount };
