import { ChangeEvent, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";
import {
  ICrearProducto,
  InitCrearProductoDTO,
} from "../../../api/bodega/interfaces/Productos/ICrearProducto";
import {
  InputOnChangeData,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { crearProductoValidationRules } from "../validation/crearProductoValidationRules";
import { useBoolean } from "@fluentui/react-hooks";

export const useAgregarProducto = () => {
  const { validateForm } = useValidateform();
  const [payload, setPayload] = useState<ICrearProducto>(InitCrearProductoDTO);
  const [errors, setErrors] = useState<ValidationErrors<ICrearProducto>>({});
  const [loading, { setTrue: LoadingTrue, setFalse: LoadingFalse }] =
    useBoolean(false);

  const onChangeCrearProductos = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    campo: string
  ) => {
    if (ev!) {
      //viewErrors();
      switch (campo) {
        case "nombre":
          setPayload({ ...payload, nombre: data.value });

          break;
        case "descripcion":
          setPayload({ ...payload, descripcion: data.value });

          break;
        case "PrecioCompra":
          setPayload({ ...payload, precioCompra: Number(data.value) });

          break;
        case "PrecioVenta":
          setPayload({ ...payload, precioVenta: Number(data.value) });

          break;
        case "codigo":
          setPayload({ ...payload, codigo: data.value });

          break;
        case "stockMinimo":
          setPayload({ ...payload, stockMinimo: Number(data.value) });

          break;
        default:
          break;
      }
    }
  };

  const onChangeCombo = (event: SelectionEvents, data: OptionOnSelectData) => {
    if (event != undefined) {
      setPayload({ ...payload, categoriaId: data.optionValue });
    }
  };
  const clearPayload = () => {
    setPayload(InitCrearProductoDTO);
    setErrors({});
  };

  const viewErrors = async () => {
    var errors = await validateForm(payload, crearProductoValidationRules);
    setErrors(errors);
    return errors;
  };

  const postAgregarProductos = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      LoadingTrue();
      EndPointsProducto.postAgregarProducto(payload).then((res) => {
        if (res.status === 200) {
          console.log("Producto Creado");
        }
        LoadingFalse();
      });
    }
  };

  return {
    onChangeCrearProductos,
    postAgregarProductos,
    payload,
    errors,
    clearPayload,
    loading,
    onChangeCombo,
  };
};
