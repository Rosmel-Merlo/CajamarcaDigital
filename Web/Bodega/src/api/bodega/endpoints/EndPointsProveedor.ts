import { axiosBodega } from "../AxiosBodega";

const getListarProveedor = () => {
  return axiosBodega.get("Proveedor/ListarProveedores");
};

const EndPointsProveedor = { getListarProveedor };

export default EndPointsProveedor;
