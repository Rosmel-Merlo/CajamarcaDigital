import { useEffect, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";

export const useListarProductos = () => {
  const [loadingTabel, setLoadingTable] = useState<boolean>(false);
  const [items, setItems] = useState<[]>([]);
  const getListarProductos = () => {
    setLoadingTable(true);
    EndPointsProducto.getListarProducto().then((res) => {
      if (res.status === 200) {
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
