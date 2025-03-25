import { useBoolean } from "@fluentui/react-hooks";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";

interface IuseEliminarSecciones {
  listarSecciones: () => void;
}

export const useEliminarSecciones = (prosp: IuseEliminarSecciones) => {
  const [loading, { setTrue: LoadingTrue, setFalse: LoadingFalse }] =
    useBoolean(false);

  const deleteSeccion = async (Id: string) => {
    LoadingTrue();
    EndPointsSeccion.deleteSeccion(Id).then((res) => {
      if (res.status === 200) {
        console.log("Producto Eliminado");
        prosp.listarSecciones();
        LoadingFalse();
      }
      LoadingFalse();
    });
  };
  return {
    deleteSeccion,
    loading,
  };
};
