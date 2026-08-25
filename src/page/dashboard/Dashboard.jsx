// Hooks React
import { useEffect } from 'react';

// Fetch
import { fetchStatus } from '../../features/dashboardStatus/statusThunk';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// stats Config
import { statsConfig } from '../../components/dashboard/config/statsConfig';
// components
import StatCard from '../../components/dashboard/StatCard';
import TopOrderChart from '../../components/dashboard/OrdersTopChart';
import LastOrders from '../../components/dashboard/LastOrders';

export default function Dashboard() {
  const { statusOrders } = useSelector((state) => state.Status);

  const dispatch = useDispatch();

  // Convert the object to an array so we can determine the length.
  const lengthStatus = Object.keys(statusOrders || {}).length  ;
  useEffect(() => {
    // the condition is to verify that here is nothing in OrdersStatus
    // Why? To avoid fetching data from the server every time the page is revisited.
    if (!lengthStatus ) {
      dispatch(fetchStatus());
    }
  }, [dispatch, lengthStatus]);


  return (
    <div className="flex flex-col   min-h-screen p-2 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols- xl:grid-cols-5  gap-2 ">
        {statusOrders &&
          Object.entries(statusOrders)?.map(([key, Value]) => {
            const config = statsConfig[key] || {
              label: key,
              icon: null,
              color: 'bg-gray-100 text-gray-600',
            };
            return (
              <StatCard
                key={key}
                value={Value}
                title={config.label}
                Icon={config.icon}
                colorClass={config.color}
              />
            );
          })}
      </div>
      <div className="my-4 grid grid-cols-1 lg:grid-cols-2  gap-2">
        {/* <TopOrderChart /> */}
        <LastOrders />
      </div>
    </div>
  );
}
