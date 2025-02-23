import React, { useEffect, useState } from "react";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";

export const useListarCategoria = () => {
  const [items, setItems] = useState<[]>([]);

  const getListarCategorias = () => {
    EndPointsCategoria.getListarCategorias().then((res) => {
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
