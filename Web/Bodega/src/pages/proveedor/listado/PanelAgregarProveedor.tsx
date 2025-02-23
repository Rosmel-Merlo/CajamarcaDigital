import { useMemo } from "react";
import Panel from "../../../components/panel/Panel";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import InputComponent from "../../../components/input/InputComponent";
import { useCrearProveedor } from "../hooks/useCrearProveedor";

interface IPanelAgregarProveedor {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelAgregarProveedor = (props: IPanelAgregarProveedor) => {
  const { Icon } = useIconsCatalogo(24);
  const { onChangeCrearProveedor, payload, errors, postCrearProveedor } =
    useCrearProveedor();

  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo="Agregar Proveedor"
        subTitulo="Panel para agregar proveedor"
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
              //clearPayload();
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
            onClick={postCrearProveedor}
            style={{ fontSize: "12px", fontWeight: "normal" }}
            appearance={"primary"}
            icon={Icon("Agregar")}
          >
            Agregar
          </Button>
        </div>
      </div>
    ),
    [postCrearProveedor, props.onDismiss]
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
            <InputComponent
              text={"Ruc"}
              onChange={(e, d) => onChangeCrearProveedor(e, d, "ruc")}
              value={payload.ruc}
              error={errors.ruc}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Nombre Contacto"}
              onChange={(e, d) =>
                onChangeCrearProveedor(e, d, "nombreContacto")
              }
              value={payload.nombreContacto}
              error={errors.nombreContacto}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Télefono Contacto"}
              onChange={(e, d) =>
                onChangeCrearProveedor(e, d, "telefonoContacto")
              }
              value={payload.telefonoContacto}
              error={errors.telefonoContacto}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Telefono"}
              onChange={(e, d) => onChangeCrearProveedor(e, d, "telefono")}
              value={payload.telefono}
              error={errors.telefono}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Email"}
              onChange={(e, d) => onChangeCrearProveedor(e, d, "email")}
              value={payload.email}
              error={errors.email}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Dirección"}
              onChange={(e, d) => onChangeCrearProveedor(e, d, "direccion")}
              value={payload.direccion}
              error={errors.direccion}
            />
          </div>
        </div>
      </Panel>
    </>
  );
};
