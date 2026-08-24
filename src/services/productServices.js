import api from '../app/axios'

export const getProducts = async ({ limit, cursor }) => {
  const { data } = await api.get(`products?limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`);
  return data
}
export const createProduct = async (product) => {
  const { data } = await api.post('products', product)
  return data
}
export const deletedProduct = async (id) => {
  const { data } = await api.delete(`products/${id}`)
  return data
}
export const updateProduct = async (id, productUpdate) => {
  const { data } = await api.put(`products/${id}`, productUpdate)
  return data
}

