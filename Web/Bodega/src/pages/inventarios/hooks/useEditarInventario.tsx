import {
  InputOnChangeData,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";
import EndPointInventario from "../../../api/bodega/endpoints/EndPointInventario";
import { ChangeEvent, useEffect, useState } from "react";
import { IActualizarInventario } from "../../../api/bodega/interfaces/Inventario/IActualizarInventario";
import { IListarInventario } from "../../../api/bodega/interfaces/Inventario/IListarInventario";
import { useValidateform } from "../../../hooks/validationForm/useValidateform";
import { actualizarValidationRules } from "../validation/actualizarValidationRules";

export const useEditarInventario = (props: IListarInventario | undefined) => {
  const { validateForm } = useValidateform();
  const [errors, setErrors] = useState<ValidationErrors<IActualizarInventario>>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [dataEditar, setDataEditar] = useState<IActualizarInventario>(null!);

  useEffect(() => {
    if (props != undefined) {
      setDataEditar({
        cantidad: props.cantidad,
        productoId: props.productoId,
        seccionId: props.seccionId,
      });
    }
  }, [props]);

  const onChangeCombo = (
    event: SelectionEvents,
    data: OptionOnSelectData,
    text: string
  ) => {
    if (event != undefined) {
      switch (text) {
        case "Producto":
          setDataEditar({
            ...dataEditar,
            productoId: data.optionValue ?? "",
          });
          break;
        case "Secciones":
          setDataEditar({
            ...dataEditar,
            seccionId: data.optionValue ?? "",
          });
          break;
      }
    }
  };

  const onChangeInput = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    if (ev != undefined) {
      console.log("esto es una prueba", data);
      setDataEditar({
        ...dataEditar,
        cantidad: Number(data.value),
      });
    }
  };

  const viewErrors = async () => {
    var errors = await validateForm(dataEditar, actualizarValidationRules);
    setErrors(errors);
    return errors;
  };

  const putEditarInventario = async () => {
    var errores = await viewErrors();
    if (Object.keys(errores).length === 0) {
      setLoading(true);
      EndPointInventario.putActualizarInventario(dataEditar).then(
        (response) => {
          if (response.status === 200) {
            console.log("esto es una prueba", response.data);
            setLoading(false);
          }
          setLoading(false);
        }
      );
    }
  };

  return {
    putEditarInventario,
    dataEditar,
    errors,
    loading,
    onChangeCombo,
    onChangeInput,
  };
};
