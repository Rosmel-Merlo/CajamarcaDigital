import { useEffect, useState } from "react";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";
import { IListarSeccion } from "../../../api/bodega/interfaces/Seccion/IListarSeccion";

export const useListarSecciones = () => {
  const [items, setItems] = useState<IListarSeccion[]>([]);
  const [loadingTabel, setLoadingTable] = useState<boolean>(false);

  const getListarCategorias = () => {
    setLoadingTable(true);
    EndPointsSeccion.getListarSeccion().then((res) => {
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
