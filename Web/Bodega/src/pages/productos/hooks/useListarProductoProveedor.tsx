import { useState } from "react";
import { IListarProductoProveedor } from "../../../api/bodega/interfaces/ProveedorProducto/IListarProductoProveedor";
import EndPointsProveedorProducto from "../../../api/bodega/endpoints/EndPointProveedorProducto";

export const useListarProductoProveedor = () => {
  const [items, setItems] = useState<IListarProductoProveedor[]>([]);
  const [loadingTabel, setLoadingTabel] = useState<boolean>(false);

  const getListarProductoProveedor = (proveedorId: string) => {
    setLoadingTabel(true);
    EndPointsProveedorProducto.getListarProductoProveedor(proveedorId).then(
      (response) => {
        if (response.status === 200) {
          setLoadingTabel(false);
          setItems(response.data);
        }
        setLoadingTabel(false);
      }
    );
  };
  return { items, getListarProductoProveedor, loadingTabel };
};
