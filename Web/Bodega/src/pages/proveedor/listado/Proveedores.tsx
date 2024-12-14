import { useEffect, useState } from "react";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import EndPointsProveedor from "../../../api/bodega/endpoints/EndPointsProveedor";

const Proveedores = () => {
  const [items, setItems] = useState<[]>([]);

  const getListarCategorias = () => {
    EndPointsProveedor.getListarProveedor().then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };

  useEffect(() => {
    getListarCategorias();
  }, []);

  const columnas: IColumn[] = [
    { key: 1, name: "Nombre", fieldName: "ruc", minWidth: 20 },
    {
      key: 2,
      name: "Nombre Contacto",
      fieldName: "nombreContactor",
      minWidth: 20,
    },
    {
      key: 3,
      name: "Teléfono Contacto",
      fieldName: "telefonoContacto",
      minWidth: 20,
    },
    { key: 4, name: "Teléfono", fieldName: "telefono", minWidth: 20 },
    { key: 5, name: "Emaíl", fieldName: "email", minWidth: 20 },
    { key: 6, name: "Dirección", fieldName: "direccion", minWidth: 20 },
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Proveedores"
        titulo="Listado de Proveedores"
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

export default Proveedores;
