import { ChangeEvent, useCallback } from "react";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button, InputOnChangeData } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import "../../../styles/PanelStyleContent.css";
import InputComponent from "../../../components/input/InputComponent";
interface IPanelAgregarProducto {
  isOpen: boolean;
  onDismiss: () => void;
  onChangeAgregarProducto: (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    campo: string
  ) => void;
  onClickCrear: ()=> void;
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
            onClick={props.onClickCrear}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [props.onClickCrear]
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
        <div className="cards">
          <div className="card">
            <InputComponent
              text={"Nombre"}
              onChange={(e, d) => props.onChangeAgregarProducto(e, d, "nombre")}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Descripción"}
              onChange={(e, d) =>
                props.onChangeAgregarProducto(e, d, "descripcion")
              }
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Precio Compra"}
              onChange={(e, d) =>
                props.onChangeAgregarProducto(e, d, "PrecioCompra")
              }
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Precio Venta"}
              onChange={(e, d) =>
                props.onChangeAgregarProducto(e, d, "PrecioVenta")
              }
            />
          </div>
          <div className="card">
            <InputComponent
              text={"aqui va la cat"}
              onChange={(e, d) => props.onChangeAgregarProducto(e, d, "categoriaId")}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Stock Mínimo"}
              onChange={(e, d) =>
                props.onChangeAgregarProducto(e, d, "stockMinimo")
              }
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Código"}
              onChange={(e, d) => props.onChangeAgregarProducto(e, d, "codigo")}
            />
          </div>
        </div>
      </Panel>
    </>
  );
};

export default PanelAgregarProducto;
