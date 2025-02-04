import { useCallback } from "react";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";

interface IPanelAgregarProducto {
  isOpen: boolean;
  onDismiss: () => void;
}

const PanelAgregarProducto = (props: IPanelAgregarProducto) => {
  const { Icon } = useIconsCatalogo(24);
  const renderHeader = useCallback(
    () => (
      <HeaderPanel
        titulo="Agregar Productos"
        subTitulo="Panel para agregar productos"
      />
    ),
    []
  );
  const renderFooter = useCallback(
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
            onClick={() => {}}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    []
  );
  return (
    <>
      <Panel
        isOpen={props.isOpen}
        onDismiss={props.onDismiss}
        size="medium"
        onRenderHeader={renderHeader}
        onRenderFooter={renderFooter}
      >

        
      </Panel>
    </>
  );
};

export default PanelAgregarProducto;
