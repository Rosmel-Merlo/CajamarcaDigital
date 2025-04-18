import { useEffect, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";
import { IListarProducto } from "../../../api/bodega/interfaces/Productos/IListarProducto";

export const useListarProductos = () => {
  const [loadingTabel, setLoadingTable] = useState<boolean>(false);

  const [items, setItems] = useState<IListarProducto[]>([]);
  const getListarProductos = () => {
    setLoadingTable(true);
    EndPointsProducto.getListarProducto().then((res) => {
      if (res.status === 200) {
        console.log("res", res.data);
        setItems(res.data);
        setLoadingTable(false);
      }
      setLoadingTable(false);
    });
  };

  useEffect(() => {
    getListarProductos();
  }, []);

  return { items, getListarProductos, loadingTabel };
};
