import { axiosBodega } from "../AxiosBodega";

const getListarSeccion = () => {
  return axiosBodega.get("Seccion/ListarSecciones");
};

const EndPointsSeccion = { getListarSeccion };

export default EndPointsSeccion;
