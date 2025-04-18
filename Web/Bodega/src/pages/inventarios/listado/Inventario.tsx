import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useListarInventario } from "../hooks/useListarInventario";
import { Button } from "@fluentui/react-components";
import { PanelAgregarInventario } from "./PanelAgregarInventario";
import { useBoolean } from "@fluentui/react-hooks";
import { PanelEditarInventario } from "./PanelEditarInventario";
import { useState } from "react";
import { IListarInventario } from "../../../api/bodega/interfaces/Inventario/IListarInventario";

export const Inventario = () => {
  const { Icon } = useIconsCatalogo(24);
  const { items, loadingTable, getListarInventario } = useListarInventario();
  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);
  const [
    isOpenEditar,
    { setTrue: openPanelEditar, setFalse: onDismissPanelEditar },
  ] = useBoolean(false);

  const [dataEditar, setDataEditar] = useState<IListarInventario>(null!);

  const columnas: IColumn[] = [
    { key: 1, name: "Producto", fieldName: "producto", minWidth: 20 },
    { key: 3, name: "Cantidad", fieldName: "cantidad", minWidth: 20 },
    { key: 2, name: "Seccion", fieldName: "seccion", minWidth: 20 },
    {
      key: 4,
      name: "Fecha Creacion",
      fieldName: "fechaCreacion",
      minWidth: 20,
    },
    {
      key: 5,
      name: "Opciones",
      fieldName: "",
      minWidth: 20,
      onRender: (item, index) => {
        return (
          <>
            <Button
              key={index}
              appearance="transparent"
              onClick={() => {
                openPanelEditar();
                setDataEditar(item);
              }}
              style={{ fontSize: "12px", fontWeight: "normal" }}
              icon={Icon("Editar")}
            ></Button>
          </>
        );
      },
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
      onClick: getListarInventario,
    },
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Inventario"
        titulo="Listado del Inventario"
      />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={loadingTable}
        leftButtons={LeftBottom}
      />
      <PanelAgregarInventario isOpen={isOpenAdd} onDismiss={onDismissPanel} />
      <PanelEditarInventario
        isOpen={isOpenEditar}
        onDismiss={onDismissPanelEditar}
        dataEditar={dataEditar}
      />
    </>
  );
};
