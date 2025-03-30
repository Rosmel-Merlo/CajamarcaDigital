import { useEffect, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";

export const useListarComboProducto = () => {
  const [dataComboProducto, setDataComboProducto] = useState<IComboBox[]>([]);

  const getListaComboProducto = () => {
    EndPointsProducto.getListarComboBoxProducto().then((res) => {
      if (res.status === 200) {
        setDataComboProducto(res.data);
      }
    });
  };

  useEffect(() => {
    getListaComboProducto();
  }, []);
  return { dataComboProducto };
};
