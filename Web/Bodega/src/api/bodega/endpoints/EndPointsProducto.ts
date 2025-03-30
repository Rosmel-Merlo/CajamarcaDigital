import { axiosBodega } from "../AxiosBodega";
import { ICrearProducto } from "../interfaces/Productos/ICrearProducto";

const getListarProducto = () => {
  return axiosBodega.get("Producto/ListarProductos");
};
const getListarComboBoxProducto = () => {
  return axiosBodega.get<IComboBox[]>("Producto/ListarComboProductos");
};
const postAgregarProducto = (body: ICrearProducto) => {
  return axiosBodega.post("Producto/CrearProducto", body);
};

const EndPointsProducto = {
  getListarProducto,
  postAgregarProducto,
  getListarComboBoxProducto,
};

export default EndPointsProducto;
