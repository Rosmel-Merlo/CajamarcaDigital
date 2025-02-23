import { axiosBodega } from "../AxiosBodega";
import { ICrearProveedor } from "../interfaces/Proveedor/ICrearProveedor";

const getListarProveedor = () => {
  return axiosBodega.get("Proveedor/ListarProveedores");
};
const postCrearProveedor = (payload: ICrearProveedor) => {
  return axiosBodega.post("Proveedor/CrearProveedor", payload);
};

const EndPointsProveedor = { getListarProveedor, postCrearProveedor };

export default EndPointsProveedor;
