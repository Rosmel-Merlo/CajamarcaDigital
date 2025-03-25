import { useEffect, useState } from "react";
import EndPointsProveedor from "../../../api/bodega/endpoints/EndPointsProveedor";
import { IListarProveedor } from "../../../api/bodega/interfaces/Proveedor/IListarProveedor";

export const useListarProveedor = () => {
  const [items, setItems] = useState<IListarProveedor[]>([]);
  const [loadingTabel, setLoadingTable] = useState<boolean>(false);

  const getListarCategorias = () => {
    setLoadingTable(true);
    EndPointsProveedor.getListarProveedor().then((res) => {
      if (res.status === 200) {
        setLoadingTable(false);
        setItems(res.data);
      }
      setLoadingTable(false);
    });
  };

  useEffect(() => {
    getListarCategorias();
  }, []);

  return { items, getListarCategorias, loadingTabel };
};
