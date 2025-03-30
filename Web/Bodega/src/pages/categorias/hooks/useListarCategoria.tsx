import { useEffect, useState } from "react";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";

export const useListarCategoria = () => {
  const [items, setItems] = useState<[]>([]);
  const [loadingTabel, setLoadingTable] = useState<boolean>(false);

  const getListarCategorias = () => {
    setLoadingTable(true);
    EndPointsCategoria.getListarCategorias().then((res) => {
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
