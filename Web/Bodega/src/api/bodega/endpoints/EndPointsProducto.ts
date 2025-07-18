import { axiosBodega } from "../AxiosBodega";
import { IActualizarProducto } from "../interfaces/Productos/IActualizarProducto";
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

const PostActualizarProducto = (body: IActualizarProducto) => {
  return axiosBodega.post("Producto/ActualizarProducto", body);
};

const EndPointsProducto = {
  getListarProducto,
  postAgregarProducto,
  getListarComboBoxProducto,
  PostActualizarProducto,
};

export default EndPointsProducto;
