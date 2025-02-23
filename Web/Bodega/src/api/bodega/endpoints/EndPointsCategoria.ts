import { axiosBodega } from "../AxiosBodega";

const getListarCategorias = () => {
  return axiosBodega.get("Categoria/ListarCategorias");
};
const getListarComboCategorias = () => {
  return axiosBodega.get("Categoria/ListarComboBoxCategorias");
};

const postCrearCategoria = (data: any) => {
  return axiosBodega.post("Categoria/CrearCategoria", data);
};

const EndPointsCategoria = {
  getListarCategorias,
  getListarComboCategorias,
  postCrearCategoria,
};

export default EndPointsCategoria;
