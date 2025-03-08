import { axiosBodega } from "../AxiosBodega";

const getListarProveedorProducto = (productoId: string) => {
  return axiosBodega.get("ProveedorProductos/ListarProveedoresPorProducto", {
    params: { productoId: productoId },
  });
};
const getListarProductoProveedor = (proveedorId: string) => {
  return axiosBodega.get("/ProveedorProductos/ListarProductosPorProveedor", {
    params: { ProveedorId: proveedorId },
  });
};
const EndPointsProveedorProducto = {
  getListarProveedorProducto,
  getListarProductoProveedor,
};

export default EndPointsProveedorProducto;
