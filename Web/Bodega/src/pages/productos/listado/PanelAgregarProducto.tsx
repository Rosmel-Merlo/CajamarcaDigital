import { useMemo } from "react";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import "../../../styles/PanelStyleContent.css";
import InputComponent from "../../../components/input/InputComponent";
import { useAgregarProducto } from "../hooks/useAgregarProducto";

interface IPanelAgregarProducto {
  isOpen: boolean;
  onDismiss: () => void;
}

const PanelAgregarProducto = (props: IPanelAgregarProducto) => {
  const { Icon } = useIconsCatalogo(24);
  const { onChangeCrearProductos, errors, postAgregarProductos, payload } =
    useAgregarProducto();

  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo="Agregar Productos"
        subTitulo="Panel para agregar productos"
      />
    ),
    []
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
            onClick={props.onDismiss}
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
            onClick={postAgregarProductos}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [postAgregarProductos, props.onDismiss]
  );
  return (
    <>
      <Panel
        isOpen={props.isOpen}
        onDismiss={props.onDismiss}
        size="medium"
        onRenderHeader={() => renderHeader}
        onRenderFooter={() => renderFooter}
      >
        <div className="cards">
          <div className="card">
            <InputComponent
              text={"Nombre"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "nombre")}
              value={payload.nombre}
              error={errors.nombre}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Descripción"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "descripcion")}
              value={payload.descripcion}
              error={errors.descripcion}
            />
          </div>
          <div className="card">
            <InputComponent
              type="number"
              text={"Precio Compra"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "PrecioCompra")}
              value={payload.precioCompra}
              error={errors.precioCompra}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Precio Venta"}
              type="number"
              onChange={(e, d) => onChangeCrearProductos(e, d, "PrecioVenta")}
              value={payload.precioVenta}
              error={errors.precioVenta}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Categoria"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "categoriaId")}
              value={payload.categoriaId}
              error={errors.categoriaId}
            />
          </div>
          <div className="card">
            <InputComponent
              type="number"
              text={"Stock Mínimo"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "stockMinimo")}
              value={payload.stockMinimo}
              error={errors.stockMinimo}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Código"}
              onChange={(e, d) => onChangeCrearProductos(e, d, "codigo")}
              value={payload.codigo}
              error={errors.codigo}
            />
          </div>
        </div>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </Panel>
    </>
  );
};

export default PanelAgregarProducto;
