import { useEffect, useMemo } from "react";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import "../../../styles/PanelStyleContent.css";
import InputComponent from "../../../components/input/InputComponent";
import { useAgregarProducto } from "../hooks/useAgregarProducto";
import { ComboBoxComponent } from "../../../components/comboBox/ComboBoxComponent";
import { useListarCategoriaCombo } from "../../categorias/hooks/useListarCategoriaCombo";

interface IPanelAgregarProducto {
  isOpen: boolean;
  onDismiss: () => void;
}

const PanelAgregarProducto = (props: IPanelAgregarProducto) => {
  const { Icon } = useIconsCatalogo(24);
  const {
    onChangeCrearProductos,
    errors,
    postAgregarProductos,
    payload,
    clearPayload,
    loading,
    onChangeCombo,
  } = useAgregarProducto();

  const { getListarComboCategoria, listarCombo } = useListarCategoriaCombo();

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
            onClick={() => {
              props.onDismiss();
              clearPayload();
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

  useEffect(() => {
    if (!props.isOpen) {
      clearPayload();
    } else {
      getListarComboCategoria();
    }
  }, [props.isOpen]);
  return (
    <>
      <Panel
        isOpen={props.isOpen}
        onDismiss={props.onDismiss}
        size="medium"
        onRenderHeader={() => renderHeader}
        onRenderFooter={() => renderFooter}
        loading={loading}
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
            <ComboBoxComponent
              onChange={onChangeCombo}
              text="Categoria"
              options={listarCombo}
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
      </Panel>
    </>
  );
};

export default PanelAgregarProducto;
