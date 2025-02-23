import { ChangeEvent, useState } from "react";
import EndPointsProveedor from "../../../api/bodega/endpoints/EndPointsProveedor";
import {
  ICrearProveedor,
  InitialCrearProveedor,
} from "../../../api/bodega/interfaces/Proveedor/ICrearProveedor";
import { InputOnChangeData } from "@fluentui/react-components";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { crearProveedorValidationRules } from "../validation/crearProveedorValidationRules";
import { useBoolean } from "@fluentui/react-hooks";

export const useCrearProveedor = () => {
  const { validateForm } = useValidateform();
  const [loading, { setTrue: LoadingTrue, setFalse: LoadingFalse }] =
    useBoolean(false);
  const [payload, setPayload] = useState<ICrearProveedor>(
    InitialCrearProveedor
  );
  const [errors, setErrors] = useState<ValidationErrors<ICrearProveedor>>({});

  const onChangeCrearProveedor = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
    campo: string
  ) => {
    if (ev!) {
      switch (campo) {
        case "ruc":
          setPayload({ ...payload, ruc: data.value });
          break;
        case "nombreContacto":
          setPayload({ ...payload, nombreContacto: data.value });
          break;
        case "telefonoContacto":
          setPayload({ ...payload, telefonoContacto: data.value });
          break;
        case "telefono":
          setPayload({ ...payload, telefono: data.value });
          break;
        case "email":
          setPayload({ ...payload, email: data.value });
          break;
        case "direccion":
          setPayload({ ...payload, direccion: data.value });
          break;
        default:
          break;
      }
    }
  };
  const viewErrors = async () => {
    var errors = await validateForm(payload, crearProveedorValidationRules);
    setErrors(errors);
    return errors;
  };

  const clearPayload = () => {
    setPayload(InitialCrearProveedor);
    setErrors({});
  };
  const postCrearProveedor = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      LoadingTrue();
      EndPointsProveedor.postCrearProveedor(payload).then((res) => {
        if (res.status === 200) {
          console.log("estea es la data");
        }
        LoadingFalse();
      });
    }
  };

  return {
    postCrearProveedor,
    onChangeCrearProveedor,
    payload,
    clearPayload,
    errors,
    loading,
  };
};
