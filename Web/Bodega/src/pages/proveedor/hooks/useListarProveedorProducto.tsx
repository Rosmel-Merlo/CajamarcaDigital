import { useState } from "react";
import EndPointsProveedorProducto from "../../../api/bodega/endpoints/EndPointProveedorProducto";
import { IListarProveedorProducto } from "../../../api/bodega/interfaces/ProveedorProducto/IListarProveedorProducto";

export const useListarProveedorProducto = () => {
  const [items, setItems] = useState<IListarProveedorProducto[]>([]);

  const getListarProveedorProducto = (productoId: string) => {
    EndPointsProveedorProducto.getListarProveedorProducto(productoId).then(
      (response) => {
        if (response.status === 200) {
          setItems(response.data);
        }
      }
    );
  };
  return { items, getListarProveedorProducto };
};
