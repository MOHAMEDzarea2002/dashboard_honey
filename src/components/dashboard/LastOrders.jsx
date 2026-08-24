import { useSelector } from 'react-redux';

export default function LastOrders() {
  const { orders } = useSelector((state) => state.orders);
  // Last  Orders
  const lastOrder = orders.map((order) => ({
    ...order,
    order: order.product.map((items) => ` ${items.name} ${items.quantity}`).join(','),
  }));

  // Background by status
  const styleStatus = {
    Pending: 'bg-amber-400/50',
    Delivered: 'bg-green-400/50',
    Cancelled: '',
  };
  return (
    <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]  rounded-lg overflow-hidden ">
      <table className="w-full  ">
        {/* caption */}
        <caption className="p-3 text-center text-3xl font-semibold ">الطلبات 10 الأخيرة</caption>
        {/* thead */}
        <thead className="">
          <tr className="md:text-2xl  ">
            <th className="hidden lg:table-cell ">التاريخ</th>
            <th> الحالة</th>
            <th className="hidden lg:table-cell">الطلبات</th>
            <th>أسم العميل</th>
            <th>الهاتف</th>
          </tr>
        </thead>
        {/* tbody */}
        <tbody>
          {lastOrder &&
            lastOrder?.map((order, index) => (
              <tr key={index}>
                <td className="hidden lg:table-cell">{order?.createdAt?._nanoseconds}</td>
                <td>
                  <span className={`${styleStatus[order?.status]} px-2 py-1 rounded-md`}>
                    {order?.status}
                  </span>
                </td>
                <td className="hidden lg:table-cell">{order?.order}</td>
                <td>{order?.name}</td>
                <td>{order?.phone}</td>
              </tr>
            )).slice(0,10)}
        </tbody>
      </table>
    </div>
  );
}
