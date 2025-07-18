import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import PanelAgregarProducto from "./PanelAgregarProducto";
import { useBoolean } from "@fluentui/react-hooks";
import { Button } from "@fluentui/react-components";
import { useListarProductos } from "../hooks/useListarProductos";
import { PanelListarProveedorPorProducto } from "./PanelListarProveedorPorProducto";
import { useEffect, useState } from "react";
import { DialogComponent } from "../../../components/dialog/DialogComponent";
import BarcodeScanner from "../../../components/barcodeScanner/BarcodeScanner";
import { Exception, Result } from "@zxing/library";
import { PanelActualizarProducto } from "./PanelActualizarProducto";
import { IListarProducto } from "../../../api/bodega/interfaces/Productos/IListarProducto";

const Productos = () => {
  const { Icon } = useIconsCatalogo(24);
  const { items, getListarProductos, loadingTabel } = useListarProductos();
  const [productoId, setProductoId] = useState<string>("");
  const [itemActualizar, setItemActualizar] = useState<IListarProducto>(null!);
  const [barCode, setBarcode] = useState<string>("");
  const [nameProductoSelected, setNameProductoSelected] = useState<string>("");
  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);
  const [
    isOpenActualizar,
    { setTrue: openPanelActualizar, setFalse: onDismissPanelActualizar },
  ] = useBoolean(false);
  const [isOpenScanner, { setTrue: openScanner, setFalse: onDismissScanner }] =
    useBoolean(false);
  const [
    isOpenAddProveedorProducto,
    {
      setTrue: openPanelAddProveedorProducto,
      setFalse: onDismissPanelProveedorProducto,
    },
  ] = useBoolean(false);

  const columnas: IColumn[] = [
    {
      key: 2,
      name: "Nombre Producto",
      fieldName: "nombre",
      minWidth: 20,
    },
    {
      key: 7,
      name: "Codigo Barras",
      fieldName: "codigo",
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
      key: 8,
      name: "Proveedores",
      fieldName: "",
      minWidth: 20,
      onRender: (item: IListarProducto, index) => (
        <>
          <Button
            key={index}
            appearance="transparent"
            onClick={() => {
              openPanelAddProveedorProducto();
              setProductoId(item.productoId);
              setNameProductoSelected(item.nombre);
            }}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            icon={Icon("Detalle")}
          />
          <Button
            key={index + "1"}
            appearance="transparent"
            onClick={() => {
              openPanelActualizar();
              setItemActualizar(item);
            }}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            icon={Icon("Editar")}
          />
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
      onClick: getListarProductos,
    },
    {
      text: "Escanner",
      type: "outline",
      icon: Icon("CodeBar"),
      onClick: openScanner,
    },
  ];

  const onChangeScanner = (result: Result, error?: Exception) => {
    if (result) {
      setBarcode(result.getText());
    }
  };
  useEffect(() => {
    if (barCode !== "") {
      onDismissScanner();
    }
  }, [barCode]);

  return (
    <>
      <CabeceraComponent
        nameIcon="ListaProductos"
        subTitulo="Productos"
        titulo="Listado de Productos"
      />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={loadingTabel}
        leftButtons={LeftBottom}
      />
      <PanelAgregarProducto
        isOpen={isOpenAdd}
        onDismiss={onDismissPanel}
        updateProductos={getListarProductos}
      />
      <PanelListarProveedorPorProducto
        nameProducto={nameProductoSelected}
        isOpen={isOpenAddProveedorProducto}
        onDismiss={onDismissPanelProveedorProducto}
        productoId={productoId}
      />
      <PanelActualizarProducto
        updateListProductos={getListarProductos}
        itemActualizar={itemActualizar}
        isOpen={isOpenActualizar}
        onDismiss={onDismissPanelActualizar}
      />
      <DialogComponent
        title="Scanner"
        isOpen={isOpenScanner}
        onDismiss={onDismissScanner}
      >
        <BarcodeScanner onchange={onChangeScanner} />
      </DialogComponent>
    </>
  );
};

export default Productos;
