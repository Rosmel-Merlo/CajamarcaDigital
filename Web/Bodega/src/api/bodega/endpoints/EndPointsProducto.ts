import { axiosBodega } from "../AxiosBodega";

const getListarProducto = () => {
  return axiosBodega.get("Producto/ListarProductos");
};

const EndPointsProducto = { getListarProducto };

export default EndPointsProducto;
