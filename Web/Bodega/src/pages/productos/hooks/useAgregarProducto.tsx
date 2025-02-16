import { ChangeEvent, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";
import {
  ICrearProducto,
  InitCrearProductoDTO,
} from "../../../api/bodega/interfaces/Productos/ICrearProducto";
import { InputOnChangeData } from "@fluentui/react-components";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { crearProductoValidationRules } from "../validation/crearProductoValidationRules";

export const useAgregarProducto = () => {
  const { validateForm } = useValidateform();
  const [payload, setPayload] = useState<ICrearProducto>(InitCrearProductoDTO);
  const [errors, setErrors] = useState<ValidationErrors<ICrearProducto>>({});

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
        case "categoriaId":
          setPayload({ ...payload, categoriaId: data.value });

          break;
        default:
          break;
      }
    }
  };

  const viewErrors = async () => {
    var errors = await validateForm(payload, crearProductoValidationRules);
    setErrors(errors);
    return errors;
  };

  const postAgregarProductos = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      EndPointsProducto.postAgregarProducto(payload).then((res) => {
        if (res.status === 200) {
          console.log("Producto Creado");
        }
      });
    }
  };

  return { onChangeCrearProductos, postAgregarProductos, payload, errors };
};
