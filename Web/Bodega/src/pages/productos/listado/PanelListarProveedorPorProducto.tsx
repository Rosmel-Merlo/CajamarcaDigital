import React, { useEffect, useMemo } from "react";
import { useListarProveedorProducto } from "../../proveedor/hooks/useListarProveedorProducto";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";

export interface IPanelListarProveedorPorProducto {
  isOpen: boolean;
  onDismiss: () => void;
  productoId: string;
  nameProducto: string;
}
export const PanelListarProveedorPorProducto = (
  props: IPanelListarProveedorPorProducto
) => {
  const { getListarProveedorProducto, items } = useListarProveedorProducto();

  const { Icon } = useIconsCatalogo(24);

  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo={`Listar Proveedores de ${props.nameProducto}`}
        subTitulo="Listado de proveedores por producto"
      />
    ),
    [props.nameProducto]
  );

  const renderFooter = useMemo(
    () => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Button
            disabled={false}
            key={"left"}
            onClick={() => {
              props.onDismiss();
            }}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"outline"}
            icon={Icon("FechasIzquierda")}
          >
            Cancelar
          </Button>
        </div>
        <div>
          <Button
            key={"right2"}
            //onClick={postAgregarProductos}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [props.onDismiss]
  );
  
  const columnas: IColumn[] = [
    { key: 1, name: "RUC", fieldName: "ruc", minWidth: 20 },
    {
      key: 2,
      name: "Nombre Contacto",
      fieldName: "nombreContacto",
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

  const LeftBottom: IButtonGroup[] = [
    {
      text: "Agregar",
      type: "primary",
      icon: Icon("Agregar"),
      //onClick: openPanelAdd,
    },
    {
      text: "Actualizar",
      type: "outline",
      icon: Icon("Refrescar"),
      //onClick: getListarCategorias,
    },
  ];

  useEffect(() => {
    if (props.productoId !== "") {
      getListarProveedorProducto(props.productoId);
    }
  }, [props.productoId]);
  return (
    <>
      <Panel
        isOpen={props.isOpen}
        onDismiss={props.onDismiss}
        size="large"
        onRenderHeader={() => renderHeader}
        onRenderFooter={() => renderFooter}
        loading={false}
      >
        <TableComponent
          column={columnas}
          data={items}
          isLoading={false}
          leftButtons={LeftBottom}
        />
      </Panel>
    </>
  );
};
