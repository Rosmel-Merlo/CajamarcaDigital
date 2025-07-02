import { useMemo } from "react";
import HeaderPanel from "../../../components/panel/HeaderPanel";
import Panel from "../../../components/panel/Panel";
import { Button } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import InputComponent from "../../../components/input/InputComponent";
import { ComboBoxComponent } from "../../../components/comboBox/ComboBoxComponent";
import { useActualizarProducto } from "../hooks/useActualizarProducto";
import { useListarCategoriaCombo } from "../../categorias/hooks/useListarCategoriaCombo";
import { IListarProducto } from "../../../api/bodega/interfaces/Productos/IListarProducto";
interface IPanelActualizarProducto {
  isOpen: boolean;
  onDismiss: () => void;
  itemActualizar: IListarProducto;
}

export const PanelActualizarProducto = (props: IPanelActualizarProducto) => {
  const { Icon } = useIconsCatalogo(24);
  const { onChangeActualizarProductos, payloadActualizar } =
    useActualizarProducto(props.itemActualizar);

  const { listarCombo } = useListarCategoriaCombo(props.isOpen);

  const renderHeader = useMemo(
    () => (
      <HeaderPanel
        titulo="Actualizar Productos"
        subTitulo="Panel para actualizar productos"
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
    [props.onDismiss]
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
        <pre>{JSON.stringify(payloadActualizar, null, 2)}</pre>
        <div className="cards">
          <div className="card">
            <InputComponent
              key={"1"}
              text={"Nombre Producto"}
              onChange={(e, d) =>
                onChangeActualizarProductos(e, d, "nombreProducto")
              }
              value={payloadActualizar?.nombre}
              //error={errors.nombre}
            />
          </div>
          <div className="card">
            <InputComponent
              key={"descripcion"}
              text={"Descripción"}
              onChange={(e, d) =>
                onChangeActualizarProductos(e, d, "descripcion")
              }
              value={payloadActualizar?.descripcion}
              //error={errors.descripcion}
            />
          </div>
          <div className="card">
            <InputComponent
              type="number"
              text={"Precio Compra"}
              onChange={(e, d) =>
                onChangeActualizarProductos(e, d, "PrecioCompra")
              }
              value={payloadActualizar?.precioCompra}
              // error={errors.precioCompra}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Precio Venta"}
              type="number"
              onChange={(e, d) =>
                onChangeActualizarProductos(e, d, "PrecioVenta")
              }
              value={payloadActualizar?.precioVenta}
              //error={errors.precioVenta}
            />
          </div>
          <div className="card">
            <ComboBoxComponent
              //onChange={onChangeCombo}
              defaultValue={payloadActualizar?.categoriaId}
              text="Categoria"
              options={listarCombo}
            />
          </div>
          <div className="card">
            <InputComponent
              type="number"
              text={"Stock Mínimo"}
              onChange={(e, d) =>
                onChangeActualizarProductos(e, d, "stockMinimo")
              }
              value={payloadActualizar?.stockMinimo}
              //error={errors.stockMinimo}
            />
          </div>
          <div className="card">
            <InputComponent
              text={"Código de barras"}
              //ref={codigoInputRef}
              onChange={(e, d) => onChangeActualizarProductos(e, d, "codigo")}
              value={payloadActualizar?.codigo}
              //error={errors.codigo}
              contentBefore={
                <Button
                  key={"codebar"}
                  //onClick={openScanner}
                  appearance={"transparent"}
                  size="large"
                  icon={Icon("CodeBar")}
                />
              }
            />
          </div>
        </div>
      </Panel>
    </>
  );
};
