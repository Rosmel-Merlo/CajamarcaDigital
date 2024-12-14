import { useEffect, useState } from "react";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";

const Secciones = () => {
  const [items, setItems] = useState<[]>([]);

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

  const columnas: IColumn[] = [
    { key: 1, name: "Nro", fieldName: "nro", minWidth: 20 },
    {
      key: 2,
      name: "Nombre Seccion",
      fieldName: "nombre",
      minWidth: 20,
    },
    {
      key: 3,
      name: "Description",
      fieldName: "descripcion",
      minWidth: 20,
    }
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Secciones"
        titulo="Listado de Secciones"
      />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={false}
        leftButtons={[]}
      />
    </>
  );
};

export default Secciones;
