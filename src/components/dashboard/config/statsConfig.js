import {
  FaShoppingCart, // totalOrders
  FaBoxes,        // totalProducts
  FaHourglassHalf,// pendingOrders
  FaTruck,        // deliveredOrders
  FaTimesCircle   // cancelledOrders
} from 'react-icons/fa';

export const statsConfig = {
  totalOrders: {
    label: "إجمالي الطلبات",
    icon: FaShoppingCart,
    color: "text-blue-600 bg-blue-100", // Tailwind colors
  },
  totalProducts: {
    label: "إجمالي المنتجات",
    icon: FaBoxes,
    color: "text-purple-600 bg-purple-100",
  },
  pendingOrders: {
    label: "قيد الانتظار",
    icon: FaHourglassHalf,
    color: "text-amber-600 bg-amber-100",
  },
  deliveredOrders: {
    label: "تم التوصيل",
    icon: FaTruck,
    color: "text-emerald-600 bg-emerald-100",
  },
  cancelledOrders: {
    label: "طلبات ملغاة",
    icon: FaTimesCircle,
    color: "text-rose-600 bg-rose-100",
  },
};
