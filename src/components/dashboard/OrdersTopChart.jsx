// Hooks reacts
import { useMemo } from 'react';
// redux
import { useSelector, shallowEqual } from 'react-redux';
// Recharts
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
//
import { getTopSellingProducts } from '../../utils/SellingProducts';
const SimpleBarChart = () => {
  const { orders } = useSelector((state) => state.orders, shallowEqual);

  const topSellingProducts = useMemo(() => (
    getTopSellingProducts(orders)
  ), [orders]);
console.log(topSellingProducts)
  return (
    <div className="bg-white rounded-lg p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ">
      <div className=" text-center text-3xl font-semibold">أكثر 5 منتجات مبيعاً</div>
      <BarChart
        style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1 }}
        responsive
        data={topSellingProducts}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="totalSold"
          fill="#D97706"
          activeBar={{ fill: 'pink', stroke: 'blue' }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
