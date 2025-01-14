import { useEffect, useState } from "react";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { Button } from "@fluentui/react-components";

const Productos = () => {
  const [items, setItems] = useState<[]>([]);

  const getListarProductos = () => {
    EndPointsProducto.getListarProducto().then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };

  useEffect(() => {
    getListarProductos();
  }, []);

  const columnas: IColumn[] = [
    { key: 1, name: "Nro", fieldName: "nro", minWidth: 20 },
    {
      key: 2,
      name: "Nombre Producto",
      fieldName: "nombre",
      minWidth: 20,
    },
    {
      key: 3,
      name: "Description",
      fieldName: "descripcion",
      minWidth: 20,
    },
    {
      key: 4,
      name: "Precio Compra",
      fieldName: "precioCompra",
      minWidth: 20,
    },
    {
      key: 5,
      name: "Precio Venta",
      fieldName: "precioVenta",
      minWidth: 20,
    },
    {
      key: 6,
      name: "Stock Minimo",
      fieldName: "stockMinimo",
      minWidth: 20,
    },
    {
      key: 7,
      name: "Codigo",
      fieldName: "codigo",
      minWidth: 20,
    },
    {
      key: 8,
      name: "Proveedores",
      fieldName: "",
      minWidth: 20,
      onRender: (item, index) => (
        <>
          {/* <Button
            key={index}
            onClick={()=>{}}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            
            icon={<CalendarMonth />}
          >
            {button.text}
          </Button> */}
        </>
      ),
    },
  ];
  return (
    <>
      <CabeceraComponent subTitulo="Productos" titulo="Listado de Productos" />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={false}
        leftButtons={[]}
      />
    </>
  );
};

export default Productos;
