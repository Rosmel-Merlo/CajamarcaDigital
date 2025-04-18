import { useEffect, useState } from "react";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";
import { IOptionsComboBox } from "../../../components/comboBox/IComboBox";

export const useListarCategoriaCombo = () => {
  const [listarCombo, setListarCombo] = useState<IOptionsComboBox[]>([]);

  const getListarComboCategoria = () => {
    EndPointsCategoria.getListarComboCategorias().then((res) => {
      if (res.status === 200) {
        console.log("este es el combo", res.data);
        setListarCombo(res.data);
      }
    });
  };
  useEffect(() => {
    getListarComboCategoria();
  }, []);
  return { getListarComboCategoria, listarCombo };
};
