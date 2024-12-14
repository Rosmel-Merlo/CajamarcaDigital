import { useEffect, useState } from "react";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";

const Categorias = () => {
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

  const columnas: IColumn[] = [
    { key: 1, name: "Nombre", fieldName: "nombreCategoria", minWidth: 20 },
    { key: 2, name: "Descripción", fieldName: "descripcion", minWidth: 20 },
    { key: 3, name: "Codigo", fieldName: "codigo", minWidth: 20 },
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Categorias"
        titulo="Listado de Categorias"
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

export default Categorias;
