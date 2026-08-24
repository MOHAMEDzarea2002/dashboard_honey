// Hooks React
import { useEffect, useState } from 'react';
// Product Thunk
import { createProductAsync, updateProductAsync } from '../../features/products/productsThunk';
import { fetchCategoryAsync } from '../../features/category/categoryThunk';
// Hooks Redux
import { useDispatch, useSelector } from 'react-redux';
// Library sweetAlert
import Swal from 'sweetalert2';
// redux action
import { openModelEdit } from '../../features/products/productsSlice';

export default function ProductForm({ onClose, mode, product }) {
  const dispatch = useDispatch();
const { loading } = useSelector((state) => state.products);
const { category } = useSelector((state) => state.category);
console.log(category)
useEffect(()=>{
  dispatch(fetchCategoryAsync());
},[])
  const initialFormData =
    mode === 'add'
      ? {
          description: '',
          image: '',
          price: '',
          name: '',
          category: '',
          stock: '',
        }: {
          description: product.description,
          image: product.image,
          price: product.price,
          name: product.name,
          category: product.category,
          stock: product.stock,
        }

  // state Form
  const [formData, setFormData] = useState(initialFormData);

  // Handel Form
  const handelForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Close the form based on the mode
  const handelCloseForm = () => {
    if (mode == 'add') {
      onClose();
    } else {
      dispatch(openModelEdit(false));
    }
  };

  // submit Data
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'add') {
      await dispatch(createProductAsync(formData));
      await onClose();
      Swal.fire({
        title: 'تم الأضافة',
        icon: 'success',
        draggable: true,
      });
    } else {
      await dispatch(updateProductAsync({ id: product.id, product: formData }));
      await handelCloseForm();
      Swal.fire({
        title: 'تم التعدبل',
        icon: 'success',
        draggable: true,
      });
    }
  };

  return (
    <div className="   p-3 ">
      <form
        className="flex  flex-col justify-center bg-white  p-4 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.40)]   w-[350px] md:w-[600px] md:max-w-[800px]"
        onSubmit={handelSubmit}
      >
        <label className="my-2">اسم المنتج</label>
        <input
          type="text"
          name="name"
          placeholder="أدخل اسم المنتج"
          className="bg-gray-300 p-2 rounded-md focus:outline-none"
          value={formData.name}
          onChange={handelForm}
          required
        />
        <label className="my-2">الوصف</label>
        <input
          type="text"
          name="description"
          placeholder="أدخل وصف المنتج"
          className="bg-gray-300 p-2 rounded-md focus:outline-none"
          value={formData.description}
          onChange={handelForm}
          required
        />
        <label className="my-2">سعر المنتج</label>
        <input
          type="number"
          name="price"
          placeholder="أدخل السعر  "
          className="bg-gray-300 p-2 rounded-md focus:outline-none"
          onChange={handelForm}
          value={formData.price}
          required
        />

        <div class=" my-2">
          <label for="countries" class="block mb-2.5 text-sm font-medium text-heading">
            حدد فئة المنتج
          </label>
          <select
            id="countries"
            name="category"
            value={formData?.category || ''}
            onChange={handelForm}
            className="block w-full px-3 py-2 border text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body cursor-pointer"
          >
            <option value="" disabled hidden>
              Select a category
            </option>
            {category.map((cate) => (
              <option key={cate?.slug} value={cate?.slug}>
                {cate?.slug}
              </option>
            ))}
          </select>
        </div>
        <label className="my-2">صورة المنتج</label>
        <input
          type="text"
          name="image"
          placeholder="أدخل رابط الصورة"
          className="bg-gray-300 p-2 rounded-md focus:outline-none"
          onChange={handelForm}
          value={formData.image}
          required
        />
        <label className="my-2"> مخزون</label>
        <input
          type="number"
          name="stock"
          placeholder=" أدخل المخزون المتاح "
          className="bg-gray-300 p-2 rounded-md focus:outline-none "
          onChange={handelForm}
          value={formData.stock}
        />
        <div className="flex justify-end items-center mt-4 gap-2.5">
          <button
            disabled={loading}
            type="submit"
            className="text-white  bg-blue-500  cursor-pointer p-2 px-4 rounded-md "
          >
            {mode === 'add' ? 'أضافة المنتج' : 'تعديل المنتج'}
          </button>
          <div
            onClick={handelCloseForm}
            className="text-white bg-red-500   cursor-pointer p-2 px-4 rounded-md "
          >
            الغاء
          </div>
        </div>
      </form>
    </div>
  );
}
