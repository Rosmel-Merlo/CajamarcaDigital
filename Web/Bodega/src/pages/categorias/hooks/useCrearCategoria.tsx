import { InputOnChangeData } from "@fluentui/react-components";
import { ChangeEvent, useState } from "react";
import {
  ICrearCategoria,
  InitICrearCategoria,
} from "../../../api/bodega/interfaces/Categoria/ICrearCategoria";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { crearCategoriaValidationRules } from "../validation/crearCategoriaValidationRules";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";
import { useBoolean } from "@fluentui/react-hooks";

export const useCrearCategoria = () => {
  const { validateForm } = useValidateform();
  const [loading, { setTrue: LoadingTrue, setFalse: LoadingFalse }] =
    useBoolean(false);

  const [payload, setPayload] = useState<ICrearCategoria>(InitICrearCategoria);
  const [errors, setErrors] = useState<ValidationErrors<ICrearCategoria>>({});

  const onChangeCrearCategoria = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    campo: string
  ) => {
    if (ev!) {
      switch (campo) {
        case "nombre":
          setPayload({ ...payload, nombre: data.value });
          break;
        case "codigo":
          setPayload({ ...payload, codigo: data.value });
          break;
        case "descripcion":
          setPayload({ ...payload, descripcion: data.value });
          break;

        default:
          break;
      }
    }
  };

  const clearPayload = () => {
    setPayload(InitICrearCategoria);
    setErrors({});
  };
  const viewErrors = async () => {
    var errors = await validateForm(payload, crearCategoriaValidationRules);
    setErrors(errors);
    return errors;
  };

  const postAgregarCategoria = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      LoadingTrue();
      EndPointsCategoria.postCrearCategoria(payload).then((res) => {
        if (res.status === 200) {
          console.log("Producto Creado");
        }
        LoadingFalse();
      });
    }
  };
  return {
    onChangeCrearCategoria,
    payload,
    clearPayload,
    errors,
    loading,
    postAgregarCategoria,
  };
};
