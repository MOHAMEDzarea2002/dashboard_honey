export const getTopSellingProducts = (orders) => {
  const productSales = [];

  // Loop In All Orders
  orders?.map((order) => {
    const product = order.product;
    //  Loop In product In Order
    product.forEach((prod) => {
      // Check Storing Name Product And Quantity
      const existingProduct = productSales.find((item) => item.name === prod.name);

      // True
      if (existingProduct) {
        // totalSold + Product Quantity
        existingProduct.totalSold += prod.quantity;
      } else {
        // False ? Push Name Product And Quantity
        productSales.push({
          name: prod.name,
        TotalSold: prod.quantity,
        });
      }
    });
  });
  // top first 5 Products
  return productSales.sort((a, b) => b.totalSold - a.totalSold).slice(0, 5);
};
