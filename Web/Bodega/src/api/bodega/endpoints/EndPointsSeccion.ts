import { axiosBodega } from "../AxiosBodega";
import { ICrearSeccion } from "../interfaces/Seccion/ICrearSeccion";

const getListarSeccion = () => {
  return axiosBodega.get("Seccion/ListarSecciones");
};
const getListarComboBoxSecciones = () => {
  return axiosBodega.get<IComboBox[]>("Seccion/ListarComboBoxSecciones");
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
  getListarComboBoxSecciones,
  postAgregarSeccion,
  deleteSeccion,
};

export default EndPointsSeccion;
