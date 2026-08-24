// library react Icons
import { MdEditNote } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
// hooks Redux
import { useDispatch, } from 'react-redux';
// productsThunk
import { deletedProductAsync ,} from '../../features/products/productsThunk';
// Library sweetAlert
import Swal from 'sweetalert2';
// redux Action
import { openModelEdit ,  setProductFormEdit} from '../../features/products/productsSlice';
export default function ProductRow({ product, loading }) {


  const dispatch = useDispatch();

  // Delete Product
  const handleDelete = async (id) => {
    // Alert
    const result = await Swal.fire({
      title: 'هل انت متأكد؟',
      text: ' !لن تتمكن من ارجع هذا  ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'حذف',
    });
    // Done
    if (result.isConfirmed) {
      // Delete Product
      dispatch(deletedProductAsync(id));
      // Message Done
      Swal.fire({
        title: 'تم الحذف',
        text: 'تم حذف المنتج بالكامل',
        icon: 'success',
      });
    }
  };

const handelEdit = () => {
  dispatch(setProductFormEdit(product));
  dispatch(openModelEdit(true));
};

  return (
    <tr>
      {/* ُEdit & Delete */}
      <td className="   ">
        <div className="flex flex-col gap-1.5">
          <button
            className="flex items-center justify-center  bg-green-500 rounded-m text-white px-2 cursor-pointer"
            onClick={handelEdit}
          >
            <MdEditNote />
            Edit
          </button>

          <button
            disabled={loading}
            className={` flex items-center justify-center  bg-red-500 rounded-md text-white px-2 cursor-pointer`}
            onClick={() => handleDelete(product.id)}
          >
            <MdDeleteForever />
            {loading ? 'Deleting...' : 'delete'}
          </button>
        </div>
      </td>
      {/* product Data   */}
      <td className="hidden md:table-cell">{product?.id}</td>
      <td className="hidden md:table-cell line-clamp-2">{product?.description}</td>
      <td>{product?.price}</td>
      <td>{product.name}</td>
      <td className=" flex justify-center items-center">
        <img
          src={product.image}
          className="rounded-lg h-100 w-100 max-w-15 max-h-15 object-cover "
        />
      </td>
    </tr>
  );
}
