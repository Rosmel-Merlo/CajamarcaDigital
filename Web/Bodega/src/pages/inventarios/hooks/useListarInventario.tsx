import { useEffect, useState } from "react";
import EndPointInventario from "../../../api/bodega/endpoints/EndPointInventario";

export const useListarInventario = () => {
    
  const [items, setItems] = useState<[]>([]);
  const [loadingTable, setLoadingTable] = useState<boolean>(false);

  const getListarInventario = () => {
    setLoadingTable(true);
    EndPointInventario.getListarInventario().then((result) => {
      if (result.status === 200) {
        setItems(result.data);
        console.log(result.data);
        setLoadingTable(false);
      }
      setLoadingTable(false);
    });
  };

  useEffect(() => {
    getListarInventario();
  }, []);

  return { loadingTable, items, getListarInventario };
};
