import Panel from "../../../components/panel/Panel";
import InputComponent from "../../../components/input/InputComponent";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { useMemo } from "react";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { useAgregarSecciones } from "../hooks/useAgregarSecciones";

interface IPanelAgregarSeccion {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelAgregarSeccion = (props: IPanelAgregarSeccion) => {
  const { Icon } = useIconsCatalogo(24);
  const {
    clearPayload,
    errors,
    loading,
    onChangeCrearSecciones,
    payload,
    postAgregarSeccion,
  } = useAgregarSecciones();
  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo="Agregar Secciones"
        subTitulo="Panel para agregar secciones"
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
            onClick={postAgregarSeccion}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [postAgregarSeccion, props.onDismiss]
  );

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
              onChange={(e, d) => onChangeCrearSecciones(e, d, "nombre")}
              value={payload.nombre}
              error={errors.nombre}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Descripción"}
              onChange={(e, d) => onChangeCrearSecciones(e, d, "descripcion")}
              value={payload.descripcion}
              error={errors.descripcion}
            />
          </div>
        </div>
      </Panel>
    </>
  );
};
