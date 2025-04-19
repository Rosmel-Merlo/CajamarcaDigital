import { useMemo } from "react";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import Panel from "../../../components/panel/Panel";
import { Button, Toaster } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { ComboBoxComponent } from "../../../components/comboBox/ComboBoxComponent";
import { useListarComboProducto } from "../../productos/hooks/useListarComboProducto";
import { useListarComboSecciones } from "../../secciones/hooks/useListarComboSecciones";
import InputComponent from "../../../components/input/InputComponent";
import { IListarInventario } from "../../../api/bodega/interfaces/Inventario/IListarInventario";
import { useEditarInventario } from "../hooks/useEditarInventario";
import "../../../styles/PanelStyleContent.css";

interface IPanelEditarInventario {
  isOpen: boolean;
  onDismiss: () => void;
  dataEditar?: IListarInventario;
}

export const PanelEditarInventario = (props: IPanelEditarInventario) => {
  const { Icon } = useIconsCatalogo(24);
  const { dataComboProducto } = useListarComboProducto();
  const { dataComboSecciones } = useListarComboSecciones();
  const {
    putEditarInventario,
    onChangeCombo,
    dataEditar,
    errors,
    loading,
    onChangeInput,
    toasterId,
  } = useEditarInventario(props.dataEditar);

  const renderHeader = useMemo(() => {
    return (
      <HeaderPanel
        titulo="Editar Inventario"
        subTitulo="Panel para Editar inventario"
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
            onClick={putEditarInventario}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Editar")}
          >
            Editar
          </Button>
        </div>
      </div>
    ),
    [putEditarInventario]
  );

  return (
    <>
      <Panel
        onRenderHeader={() => renderHeader}
        onRenderFooter={() => renderFooter}
        isOpen={props.isOpen}
        onDismiss={props.onDismiss}
        size="small"
        loading={loading}
      >
        <div className="cards">
          <ComboBoxComponent
            text="Producto"
            defaultValue={props.dataEditar?.productoId}
            onChange={(e, d) => onChangeCombo(e, d, "Producto")}
            options={dataComboProducto}
            error={errors?.productoId}
          />
        </div>
        <div className="cards">
          <ComboBoxComponent
            text="Secciones"
            onChange={(e, d) => onChangeCombo(e, d, "Secciones")}
            defaultValue={props.dataEditar?.seccionId}
            options={dataComboSecciones}
            error={errors?.seccionId}
          />
        </div>
        <div className="cards">
          <InputComponent
            type="number"
            value={dataEditar?.cantidad}
            onChange={onChangeInput}
            text={"Precio Compra"}
            error={errors?.cantidad}
          />
        </div>
      </Panel>
      <Toaster toasterId={toasterId} />
    </>
  );
};
