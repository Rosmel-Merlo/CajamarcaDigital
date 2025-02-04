import { ChangeEvent, useState } from "react";
import EndPointsProducto from "../../../api/bodega/endpoints/EndPointsProducto";
import { ICrearProducto } from "../../../api/bodega/interfaces/Productos/ICrearProducto";
import { InputOnChangeData } from "@fluentui/react-components";

export const useAgregarProducto = () => {
  const [payload, setPayload] = useState<ICrearProducto>(null!);
  const onChangeListarProductos = (
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
        case "PrecioCompra":
          setPayload({ ...payload, precioCompra: 1 });
          break;
        case "PrecioVenta":
          setPayload({ ...payload, precioVenta:  1.5});
          break;
        case "codigo":
          setPayload({ ...payload, codigo: data.value });
          break;
        case "stockMinimo":
          setPayload({ ...payload, stockMinimo: data.value });
          break;
        case "categoriaId":
          setPayload({
            ...payload,
            categoriaId: "afdb8242-68af-4045-3187-08dd1359c1c4",
          });
          break;
        default:
          break;
      }
    }
  };

  const postAgregarProductos = () => {
    EndPointsProducto.postAgregarProducto(payload).then((res) => {
      if (res.status === 200) {
        console.log("Producto Creado");
      }
    });
  };

  return { onChangeListarProductos, postAgregarProductos, payload };
};
