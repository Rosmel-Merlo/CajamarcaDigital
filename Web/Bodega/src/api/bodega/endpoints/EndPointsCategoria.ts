import { axiosBodega } from "../AxiosBodega";

const getListarCategorias = () => {
  return axiosBodega.get("Categoria/ListarCategorias");
};

const EndPointsCategoria = { getListarCategorias };

export default EndPointsCategoria;
