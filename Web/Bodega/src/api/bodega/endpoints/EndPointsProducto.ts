import { axiosBodega } from "../AxiosBodega";
import { ICrearProducto } from "../interfaces/Productos/ICrearProducto";

const getListarProducto = () => {
  return axiosBodega.get("Producto/ListarProductos");
};
const postAgregarProducto = (body: ICrearProducto) => {
  return axiosBodega.post("Producto/CrearProducto", body);
};

const EndPointsProducto = { getListarProducto, postAgregarProducto };

export default EndPointsProducto;
