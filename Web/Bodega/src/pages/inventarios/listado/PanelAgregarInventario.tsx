import { useMemo } from "react";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import Panel from "../../../components/panel/Panel";
import InputComponent from "../../../components/input/InputComponent";

interface IPanelAgregarInventario {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelAgregarInventario = (props: IPanelAgregarInventario) => {
  const { Icon } = useIconsCatalogo(24);
  const renderHeader = useMemo(() => {
    return (
      <HeaderPanel
        titulo="Agregar Inventario"
        subTitulo="Panel para agregar inventario"
      />
    );
  }, []);

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
            onClick={() => {}}
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
    []
  );
  return (
    <>
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
            <InputComponent text={"Nombre"} />
          </div>
          <div className="card">
            <InputComponent
              text={"Descripción"}
              // onChange={(e, d) => onChangeCrearProductos(e, d, "descripcion")}
            />
          </div>
          <div className="card">
            <InputComponent type="number" text={"Precio Compra"} />
          </div>
        </div>
      </Panel>
    </>
  );
};
