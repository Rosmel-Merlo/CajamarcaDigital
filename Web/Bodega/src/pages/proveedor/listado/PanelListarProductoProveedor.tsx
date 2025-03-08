import { useEffect, useMemo } from "react";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import Panel from "../../../components/panel/Panel";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { useListarProductoProveedor } from "../../productos/hooks/useListarProductoProveedor";

export interface IPanelListarProductoProveedor {
  isOpen: boolean;
  onDismiss: () => void;
  proveedorId: string;
  nameProducto: string;
}

export const PanelListarProductoProveedor = (
  props: IPanelListarProductoProveedor
) => {
  const { Icon } = useIconsCatalogo(24);

  const { items, getListarProductoProveedor } = useListarProductoProveedor();
  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo={`Lista de Productos de ${props.nameProducto}`}
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
    { key: 1, name: "Producto", fieldName: "nombre", minWidth: 20 },
    { key: 6, name: "Codigo", fieldName: "codigo", minWidth: 20 },

    {
      key: 2,
      name: "Descripcion",
      fieldName: "descripcion",
      minWidth: 20,
    },
    {
      key: 3,
      name: "Precio Compra",
      fieldName: "precioCompra",
      minWidth: 20,
    },
    { key: 4, name: "Precio Venta", fieldName: "precioVenta", minWidth: 20 },
    { key: 5, name: "Stock Mínimo", fieldName: "stockMinimo", minWidth: 20 },
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
    if (props.proveedorId !== "") {
      getListarProductoProveedor(props.proveedorId);
    }
  }, [props.proveedorId]);
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
