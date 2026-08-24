import api from '../app/axios'
export const getDashboardStatus = async ()=>{
  const { data } = await api.get(`dashboard`);
  return data
}
