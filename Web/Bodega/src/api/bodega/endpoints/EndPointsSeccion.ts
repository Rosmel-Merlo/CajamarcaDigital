import { axiosBodega } from "../AxiosBodega";
import { ICrearSeccion } from "../interfaces/Seccion/ICrearSeccion";

const getListarSeccion = () => {
  return axiosBodega.get("Seccion/ListarSecciones");
};

const postAgregarSeccion = (payload: ICrearSeccion) => {
  return axiosBodega.post("Seccion/CrearSeccion", payload);
};

const EndPointsSeccion = { getListarSeccion, postAgregarSeccion };

export default EndPointsSeccion;
