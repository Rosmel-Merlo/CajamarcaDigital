import { useEffect, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";

export const useListarProductos = () => {
  const [items, setItems] = useState<[]>([]);
  const getListarProductos = () => {
    EndPointsProducto.getListarProducto().then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };

  useEffect(() => {
    getListarProductos();
  }, []);

  return { items, getListarProductos };
};
