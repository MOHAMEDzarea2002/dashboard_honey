import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { getTopSellingProducts } from '../../utils/SellingProducts';

const SimpleBarChart = () => {
  const orders = useSelector((state) => state.orders.orders);

  const topSellingProducts = useMemo(() => {
    return getTopSellingProducts(orders);
  }, [orders]);

  return (
    <div className="bg-white rounded-lg p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="text-center text-3xl font-semibold">أكثر 5 منتجات مبيعاً</div>

      {/* لازم تحدد ارتفاع ثابت أو aspect عن طريق الـ container نفسه مش عن طريق BarChart */}
      <div style={{ width: '100%', height: '70vh' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topSellingProducts} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="totalSold"
              fill="#D97706"
              activeBar={{ fill: 'pink', stroke: 'blue' }}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;
