import { useEffect, useState } from "react";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";

export const useListarComboSecciones = () => {
  const [dataComboSecciones, setDataComboSecciones] = useState<IComboBox[]>([]);

  const getListarComboBoxSecciones = async () => {
    EndPointsSeccion.getListarComboBoxSecciones().then((response) => {
      if (response.status === 200) {
        setDataComboSecciones(response.data);
      } else {
        setDataComboSecciones([]);
      }
    });
  };

  useEffect(() => {
    getListarComboBoxSecciones();
  }, []);

  return { dataComboSecciones };
};
