import { ChangeEvent, useState } from "react";
import EndPointInventario from "../../../api/bodega/endpoints/EndPointInventario";
import {
  ICrearInventario,
  InitCrearInventario,
} from "../../../api/bodega/interfaces/Inventario/ICrearInventario";
import {
  InputOnChangeData,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";

export const useCrearInventario = () => {
  const [dataCrearInventario, setDataCrearInventario] =
    useState<ICrearInventario>(InitCrearInventario);

  const onChangeInpunt = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    if (ev != undefined) {
      setDataCrearInventario({
        ...dataCrearInventario,
        cantidad: Number(data.value),
      });
    }
  };
  const onChangeCombo = (
    event: SelectionEvents,
    data: OptionOnSelectData,
    text: string
  ) => {
    if (event != undefined) {
      switch (text) {
        case "productoCombo":
          setDataCrearInventario({
            ...dataCrearInventario,
            productoId: data.optionValue,
          });
          break;
        case "seccionCombo":
          setDataCrearInventario({
            ...dataCrearInventario,
            seccionId: data.optionValue,
          });
          break;
      }
    }
  };

  const PostCrearInventario = async () => {
    EndPointInventario.postCrearInventario(dataCrearInventario).then(
      (response) => {
        if (response.status === 200) {
          return response.data;
        }
      }
    );
  };

  return { dataCrearInventario, PostCrearInventario, onChangeCombo, onChangeInpunt };
};
