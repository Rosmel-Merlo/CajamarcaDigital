import { useEffect, useState } from "react";
import EndPointsProveedor from "../../../api/bodega/endpoints/EndPointsProveedor";
import { IListarProveedor } from "../../../api/bodega/interfaces/Proveedor/IListarProveedor";

export const useListarProveedor = () => {
  const [items, setItems] = useState<IListarProveedor[]>([]);

  const getListarCategorias = () => {
    EndPointsProveedor.getListarProveedor().then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };

  useEffect(() => {
    getListarCategorias();
  }, []);

  return { items, getListarCategorias };
};
