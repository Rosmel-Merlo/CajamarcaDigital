import React, { useEffect, useState } from "react";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";
import { IListarSeccion } from "../../../api/bodega/interfaces/Seccion/IListarSeccion";

export const useListarSecciones = () => {
  const [items, setItems] = useState<IListarSeccion[]>([]);

  const getListarCategorias = () => {
    EndPointsSeccion.getListarSeccion().then((res) => {
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
