import { axiosBodega } from "../AxiosBodega";
import { ICrearSeccion } from "../interfaces/Seccion/ICrearSeccion";

const getListarSeccion = () => {
  return axiosBodega.get("Seccion/ListarSecciones");
};

const postAgregarSeccion = (payload: ICrearSeccion) => {
  return axiosBodega.post("Seccion/CrearSeccion", payload);
};

const deleteSeccion = (Id: string) => {
  var payload = { seccionId: Id };
  return axiosBodega.delete("Seccion/EliminarSeccion", { data: payload });
};

const EndPointsSeccion = {
  getListarSeccion,
  postAgregarSeccion,
  deleteSeccion,
};

export default EndPointsSeccion;
