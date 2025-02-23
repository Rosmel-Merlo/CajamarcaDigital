import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import PanelAgregarProducto from "./PanelAgregarProducto";
import { useBoolean } from "@fluentui/react-hooks";
import { Button } from "@fluentui/react-components";
import { useListarProductos } from "../hooks/useListarProductos";

const Productos = () => {
  const { Icon } = useIconsCatalogo(24);
  const { items } = useListarProductos();

  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);

  const columnas: IColumn[] = [
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
          <Button
            key={index}
            appearance="transparent"
            onClick={() => {}}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            icon={Icon("Detalle")}
          ></Button>
        </>
      ),
    },
  ];

  const LeftBottom: IButtonGroup[] = [
    {
      text: "Agregar",
      type: "primary",
      icon: Icon("Agregar"),
      onClick: openPanelAdd,
    },
  ];
  return (
    <>
      <CabeceraComponent subTitulo="Productos" titulo="Listado de Productos" />

      <TableComponent
        column={columnas}
        data={items}
        isLoading={false}
        leftButtons={LeftBottom}
      />
      <PanelAgregarProducto isOpen={isOpenAdd} onDismiss={onDismissPanel} />
    </>
  );
};

export default Productos;
