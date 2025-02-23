import { ChangeEvent, useState } from "react";
import EndPointsSeccion from "../../../api/bodega/endpoints/EndPointsSeccion";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import {
  ICrearSeccion,
  InitialCrearSeccion,
} from "../../../api/bodega/interfaces/Seccion/ICrearSeccion";
import { useBoolean } from "@fluentui/react-hooks";
import { InputOnChangeData } from "@fluentui/react-components";
import { CrearSeccionValidationRules } from "../validation/crearSeccionValidationRules";

export const useAgregarSecciones = () => {
  const { validateForm } = useValidateform();
  const [payload, setPayload] = useState<ICrearSeccion>(InitialCrearSeccion);
  const [errors, setErrors] = useState<ValidationErrors<ICrearSeccion>>({});

  const [loading, { setTrue: LoadingTrue, setFalse: LoadingFalse }] =
    useBoolean(false);

  const onChangeCrearSecciones = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    campo: string
  ) => {
    if (ev!) {
      switch (campo) {
        case "nombre":
          setPayload({ ...payload, nombre: data.value });
          break;
        case "descripcion":
          setPayload({ ...payload, descripcion: data.value });
          break;
        default:
          break;
      }
    }
  };
  const viewErrors = async () => {
    var errors = await validateForm(payload, CrearSeccionValidationRules);
    setErrors(errors);
    return errors;
  };

  const clearPayload = () => {
    setPayload(InitialCrearSeccion);
    setErrors({});
  };
  const postAgregarSeccion = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      LoadingTrue();
      EndPointsSeccion.postAgregarSeccion(payload).then((res) => {
        if (res.status === 200) {
          console.log("Producto Creado");
        }
        LoadingFalse();
      });
    }
  };

  return {
    clearPayload,
    postAgregarSeccion,
    onChangeCrearSecciones,
    payload,
    errors,
    loading,
  };
};
