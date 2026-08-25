export const getTopSellingProducts = (orders) => {
  if (!orders || !Array.isArray(orders) || orders.length === 0) return [];

  const productSalesMap = {};

  // 1. تجميع المبيعات لكل منتج بـ Hash Map (أسرع وأضمن من .find)
  orders.forEach((order) => {
    // التأكد إن product موجود وأنه مصفوفة
    if (Array.isArray(order?.product)) {
      order.product.forEach((prod) => {
        const productName = prod?.name;
        const quantity = Number(prod?.quantity) || 0;

        if (productName) {
          if (productSalesMap[productName]) {
            productSalesMap[productName] += quantity;
          } else {
            productSalesMap[productName] = quantity;
          }
        }
      });
    }
  });

  // 2. تحويل الـ Object لـ Array
  const productSales = Object.keys(productSalesMap).map((name) => ({
    name,
    totalSold: productSalesMap[name], // توحيد حرف t سمول
  }));

  // 3. الترتيب وأخذ أعلى 5 منتجات
  return productSales.sort((a, b) => b.totalSold - a.totalSold).slice(0, 5);
};
