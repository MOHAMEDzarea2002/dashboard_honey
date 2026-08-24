// redux
import { useDispatch, useSelector } from 'react-redux';
// Fetch
import { fetchProducts } from '../../features/products/productsThunk';
// components
import TableProducts from '../../components/products/Table';
import ProductForm from '../../components/products/ProductForm';
// Hooks react
import { useEffect, useState } from 'react';
// react Icons
import { IoMdAdd } from 'react-icons/io';
// motion
import { AnimatePresence, motion } from 'framer-motion';


export default function Products() {
  const [showAddForm, setShowAddForm] = useState(false);
  const { products, loading, isEditModalOpen, updateProduct } = useSelector(
    (state) => state.products
  );
  const productsLength = Object.keys(products || {}).length;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productsLength){

dispatch(fetchProducts({ limit: 10 }));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col  overflow-hidden p-2  ">
      {/* Title  & Button Add product*/}
      <div className="flex justify-between items-center my-3">
        <h2 className="text-lg  md:text-4xl    font-semibold relative">Products Management</h2>
        {/* Button Add product */}
        <button
          className="bg-amber-400 cursor-pointer rounded-sm px-2 py-1 md:text-lg text-[15px] flex items-center  gap-1 "
          onClick={() => setShowAddForm(true)}
        >
          <IoMdAdd />
          <span>أضافة منتج</span>
        </button>
      </div>
      {/* Table & ProductForm */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProductForm onClose={() => setShowAddForm(false)} mode="add" />
            </motion.div>
          </motion.div>
        )}
        {isEditModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProductForm mode="edit" product={updateProduct} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* table */}
      <TableProducts products={products} loading={loading} />
    </div>
  );
}
