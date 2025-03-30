import { axiosBodega } from "../AxiosBodega";
import { IActualizarCantidadInventario } from "../interfaces/Inventario/IActualizarCantidadInventario";

const getListarInventario = () => {
  return axiosBodega.get("Inventario/ListarInventario");
};
const putActualizarInventario = (request: IActualizarCantidadInventario) => {
  return axiosBodega.put("Inventario/ActualizarInventario", request);
};

const EndPointInventario = { getListarInventario, putActualizarInventario };

export default EndPointInventario;
