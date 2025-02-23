import { useMemo } from "react";
import InputComponent from "../../../components/input/InputComponent";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import Panel from "../../../components/panel/Panel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { useCrearCategoria } from "../hooks/useCrearCategoria";
interface IPanelAgregarCategoria {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelAgregarCategoria = (props: IPanelAgregarCategoria) => {
  const { Icon } = useIconsCatalogo(24);
  const {
    onChangeCrearCategoria,
    payload,
    errors,
    clearPayload,
    postAgregarCategoria,
  } = useCrearCategoria();
  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo="Agregar Categoria"
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
            onClick={postAgregarCategoria}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [props.onDismiss, postAgregarCategoria, clearPayload]
  );

  return (
    <Panel
      isOpen={props.isOpen}
      onDismiss={props.onDismiss}
      size="medium"
      onRenderHeader={() => renderHeader}
      onRenderFooter={() => renderFooter}
      loading={false}
    >
      <div className="cards">
        <div className="card">
          <InputComponent
            text={"Nombre"}
            onChange={(e, d) => onChangeCrearCategoria(e, d, "nombre")}
            value={payload.nombre}
            error={errors.nombre}
          />
        </div>

        <div className="card">
          <InputComponent
            type="text"
            text={"Código"}
            onChange={(e, d) => onChangeCrearCategoria(e, d, "codigo")}
            value={payload.codigo}
            error={errors.codigo}
          />
        </div>
        <div className="card">
          <InputComponent
            text={"Descripción"}
            onChange={(e, d) => onChangeCrearCategoria(e, d, "descripcion")}
            value={payload.descripcion}
            error={errors.descripcion}
          />
        </div>
      </div>
    </Panel>
  );
};
