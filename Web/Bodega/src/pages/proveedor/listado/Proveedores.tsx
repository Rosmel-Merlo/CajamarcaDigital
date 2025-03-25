import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { PanelAgregarProveedor } from "./PanelAgregarProveedor";
import { useBoolean } from "@fluentui/react-hooks";
import { useListarProveedor } from "../hooks/useListarProveedor";
import { Button } from "@fluentui/react-components";
import { PanelListarProductoProveedor } from "./PanelListarProductoProveedor";
import { useState } from "react";

const Proveedores = () => {
  const { Icon } = useIconsCatalogo(24);
  const { items, getListarCategorias, loadingTabel } = useListarProveedor();
  const [proveedorId, setProveedorId] = useState<string>("");
  const [nameProveedorSelected, setNameProveedorSelected] =
    useState<string>("");
  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);
  const [
    isOpenListarProductos,
    {
      setTrue: openPanelListarProductos,
      setFalse: onDismissPanelListarProductos,
    },
  ] = useBoolean(false);

  const columnas: IColumn[] = [
    { key: 1, name: "RUC", fieldName: "ruc", minWidth: 20 },
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
    {
      key: 7,
      name: "Productos",
      fieldName: "",
      minWidth: 20,
      onRender: (item, index) => (
        <>
          <Button
            key={index}
            appearance="transparent"
            onClick={() => {
              openPanelListarProductos();
              setProveedorId(item.proveedorId);
              setNameProveedorSelected(item.nombreContactor);
            }}
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
    {
      text: "Actualizar",
      type: "outline",
      icon: Icon("Refrescar"),
      onClick: getListarCategorias,
    },
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
        isLoading={loadingTabel}
        leftButtons={LeftBottom}
      />
      <PanelListarProductoProveedor
        isOpen={isOpenListarProductos}
        onDismiss={onDismissPanelListarProductos}
        nameProducto={nameProveedorSelected}
        proveedorId={proveedorId}
      />
      <PanelAgregarProveedor isOpen={isOpenAdd} onDismiss={onDismissPanel} />
    </>
  );
};

export default Proveedores;
