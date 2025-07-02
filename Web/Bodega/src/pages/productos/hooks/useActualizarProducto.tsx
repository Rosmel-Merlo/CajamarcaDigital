import { InputOnChangeData } from "@fluentui/react-components";
import { ChangeEvent, useEffect, useState } from "react";
import { IListarProducto } from "../../../api/bodega/interfaces/Productos/IListarProducto";

export const useActualizarProducto = (props: IListarProducto) => {
  const [payloadActualizar, setPayloadActualizar] =
    useState<IListarProducto>(props);

  useEffect(() => {
    setPayloadActualizar(props);
  }, [props]);

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

  

  return { onChangeActualizarProductos, payloadActualizar };
};
