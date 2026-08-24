import api from '../app/axios';
export const getOrders = async () => {
  const  {data}  = await api.get('orders');
  return data.data;
};
export const getOrderByID = async (idOrder) => {
  const { data } = await api.get(`orders/${idOrder}`);
  return data;
};
export const updateStatusOrder = async (id, orderData) => {

  const { data } = await api.put(`orders/${id}`, orderData);
  return data;
};

export const deleteOrder = async (id) => {
  const { data } = await api.delete(`orders/${id}`);
  return data;
};
