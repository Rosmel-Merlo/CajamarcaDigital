import { useMemo } from "react";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import Panel from "../../../components/panel/Panel";
import InputComponent from "../../../components/input/InputComponent";
import { useListarComboProducto } from "../../productos/hooks/useListarComboProducto";
import { ComboBoxComponent } from "../../../components/comboBox/ComboBoxComponent";
import { useListarComboSecciones } from "../../secciones/hooks/useListarComboSecciones";
import { useCrearInventario } from "../hooks/useCrearInventario";

interface IPanelAgregarInventario {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelAgregarInventario = (props: IPanelAgregarInventario) => {
  const { dataComboProducto } = useListarComboProducto();
  const { dataComboSecciones } = useListarComboSecciones();
  const { dataCrearInventario,PostCrearInventario, onChangeCombo, onChangeInpunt } =
    useCrearInventario();
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
            onClick={PostCrearInventario}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [PostCrearInventario]
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
            <ComboBoxComponent
              onChange={(event, data) =>
                onChangeCombo(event, data, "productoCombo")
              }
              text="Producto"
              options={dataComboProducto}
            />
          </div>
          <div className="card">
            <ComboBoxComponent
              onChange={(event, data) =>
                onChangeCombo(event, data, "seccionCombo")
              }
              text="Secciones"
              options={dataComboSecciones}
            />
          </div>
          <div className="card">
            <InputComponent
              type="number"
              value={dataCrearInventario.cantidad}
              onChange={onChangeInpunt}
              text={"Precio Compra"}
            />
          </div>
        </div>
      </Panel>
    </>
  );
};
