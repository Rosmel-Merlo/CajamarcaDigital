import React, { useState } from "react";
import { IListarProductoProveedor } from "../../../api/bodega/interfaces/ProveedorProducto/IListarProductoProveedor";
import EndPointsProveedorProducto from "../../../api/bodega/endpoints/EndPointProveedorProducto";

export const useListarProductoProveedor = () => {
  const [items, setItems] = useState<IListarProductoProveedor[]>([]);

  const getListarProductoProveedor = (proveedorId: string) => {
    EndPointsProveedorProducto.getListarProductoProveedor(proveedorId).then(
      (response) => {
        if (response.status === 200) {
          setItems(response.data);
        }
      }
    );
  };
  return { items, getListarProductoProveedor };
};
