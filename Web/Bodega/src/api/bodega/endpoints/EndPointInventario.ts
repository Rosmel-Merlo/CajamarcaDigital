import { axiosBodega } from "../AxiosBodega";
import { IActualizarCantidadInventario } from "../interfaces/Inventario/IActualizarCantidadInventario";
import { ICrearInventario } from "../interfaces/Inventario/ICrearInventario";

const getListarInventario = () => {
  return axiosBodega.get("Inventario/ListarInventario");
};
const putActualizarInventario = (request: IActualizarCantidadInventario) => {
  return axiosBodega.put("Inventario/ActualizarInventario", request);
};

const postCrearInventario = (request: ICrearInventario) => {
  return axiosBodega.post("Inventario/CrearInventario", request);
};
const EndPointInventario = {
  getListarInventario,
  putActualizarInventario,
  postCrearInventario,
};

export default EndPointInventario;
