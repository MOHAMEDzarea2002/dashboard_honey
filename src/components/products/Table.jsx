import { useDispatch, useSelector } from 'react-redux';
// components
import ProductRow from '../products/ProductRow';
import ButtonCursor from './ButtonCursor';
//
import { fetchProducts } from '../../features/products/productsThunk';
// redux action
import { setHistoryCursor } from '../../features/products/productsSlice';
export default function Table({ products }) {
  //
  const { nextCursor, historyCursor, hasMore, loading } = useSelector((state) => state.products);

// const loading =true
  const dispatch = useDispatch();
  // next
  const next =  () => {
     dispatch(fetchProducts({ limit: 10, cursor: nextCursor }));
    dispatch(setHistoryCursor(`${nextCursor}`));
  };
// previous
  const Previous =  () => {
     dispatch(fetchProducts({ limit: 10, cursor: [...new Set(historyCursor)] }));
    dispatch(setHistoryCursor(`${nextCursor}`));
  };
  return (
    <div className="shadow-[0_10px_30px_rgba(0,0,0,0.08)]   rounded-2xl pb-3">
      <table className="  w-full  rounded-lg">
        <thead className="">
          <tr className="h-15 ">
            <th className="">ACTION</th>
            <th className=" hidden md:table-cell">التاريخ</th>
            <th className=" hidden md:table-cell">الوصف</th>
            <th>السعر</th>
            <th>أسم المنتج</th>
            <th>الصوره</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              {/* استبدل 5 بعدد أعمدة جدولك */}
              <td colSpan={6} className="text-center py-8">
                <div className="text-2xl animate-pulse flex justify-center items-center gap-2">
                  <span>loading...</span>
                </div>
              </td>
            </tr>
          ) : (
            products?.map((product, index) => (
              <ProductRow key={index} product={product} loading={loading} />
            ))
          )}
        </tbody>
      </table>

      <div className="flex gap-2 justify-center items-center">
        <ButtonCursor onClick={Previous} title={'Previous'} disabled={hasMore} />
        <ButtonCursor onClick={next} title={'next'} disabled={!hasMore} />
      </div>
    </div>
  );
}
