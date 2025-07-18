import { InputOnChangeData } from "@fluentui/react-components";
import { ChangeEvent, useEffect, useState } from "react";
import { IListarProducto } from "../../../api/bodega/interfaces/Productos/IListarProducto";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { actualizarProductoValidationRules } from "../validation/actualizarProductoValidationRules";
import { IActualizarProducto } from "../../../api/bodega/interfaces/Productos/IActualizarProducto";
import { useBoolean } from "@fluentui/react-hooks";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";

export const useActualizarProducto = (
  onDismissPanel: () => void,
  updateProductos: () => void,
  producto: IActualizarProducto
) => {
  const [payloadActualizar, setPayloadActualizar] =
    useState<IListarProducto>(producto);
  const [
    loadingActulizarProducto,
    { setTrue: LoadingTrue, setFalse: LoadingFalse },
  ] = useBoolean(false);

  const [errors, setErrors] = useState<ValidationErrors<IActualizarProducto>>(
    {}
  );

  const { validateForm } = useValidateform();

  useEffect(() => {
    setPayloadActualizar(producto);
  }, [producto]);

  const onChangeActualizarProductos = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    text: string
  ) => {
    if (ev !== undefined && data != undefined) {
      switch (text) {
        case "nombreProducto":
          setPayloadActualizar({ ...payloadActualizar, nombre: data.value });
          return;
        case "descripcion":
          setPayloadActualizar({
            ...payloadActualizar,
            descripcion: data.value,
          });
          return;
        case "PrecioCompra":
          setPayloadActualizar({
            ...payloadActualizar,
            precioCompra: Number(data.value),
          });
          return;
        case "PrecioVenta":
          setPayloadActualizar({
            ...payloadActualizar,
            precioVenta: Number(data.value),
          });
          return;
        case "stockMinimo":
          setPayloadActualizar({
            ...payloadActualizar,
            stockMinimo: Number(data.value),
          });
          return;
        case "codigo":
          setPayloadActualizar({
            ...payloadActualizar,
            codigo: data.value,
          });
          return;
        default:
          return;
      }
    }
  };
  const viewErrors = async () => {
    var errors = await validateForm(
      payloadActualizar,
      actualizarProductoValidationRules
    );
    setErrors(errors);
    return errors;
  };
  const PostActualizarProducto = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      LoadingTrue();
      EndPointsProducto.PostActualizarProducto(payloadActualizar).then(
        (res) => {
          if (res.status === 200) {
            console.log("Producto Creado", res.data);
            onDismissPanel();
            updateProductos();
          }
          LoadingFalse();
        }
      );
    }
  };

  return {
    onChangeActualizarProductos,
    payloadActualizar,
    PostActualizarProducto,
    errors,
    loadingActulizarProducto,
  };
};
