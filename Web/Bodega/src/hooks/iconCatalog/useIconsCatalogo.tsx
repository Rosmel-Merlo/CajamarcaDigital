import { IICON } from "../../interfaces/IICon/IIcon";
import {
  DeleteRegular,
  AddRegular,
  ArrowClockwiseRegular,
  FilterRegular,
  ArrowExitRegular,
  AppsListFilled,
  ArrowDownloadRegular,
  FilterDismissRegular,
  ClockRegular,
  GridDots24Filled,
  AlertRegular,
  SettingsRegular,
  bundleIcon,
  AddFilled,
  AppsListRegular,
  DeleteFilled,
  EditRegular,
  EditFilled,
  ArrowClockwiseFilled,
} from "@fluentui/react-icons";

import { FlechaDerecha, FlechaIzquierda } from "../../utils/IconsSVG";

const AgregarIcon = bundleIcon(AddFilled, AddRegular);
const EliminarIcon = bundleIcon(DeleteFilled, DeleteRegular);
const EditarIcon = bundleIcon(EditFilled, EditRegular);
const DetalleIcon = bundleIcon(AppsListFilled, AppsListRegular);
const RefrescarIcon = bundleIcon(ArrowClockwiseFilled, ArrowClockwiseRegular);
export const useIconsCatalogo = (size: number) => {
  const iconos: IICON[] = [
    {
      text: "Agregar",
      icon: <AgregarIcon fontSize={size} />,
    },
    {
      text: "Editar",
      icon: <EditarIcon fontSize={size} />,
    },
    {
      text: "Eliminar",
      icon: <EliminarIcon fontSize={size} />,
    },
    {
      text: "Refrescar",
      icon: <RefrescarIcon fontSize={size} />,
    },
    {
      text: "Detalle",
      icon: <DetalleIcon fontSize={size} />,
    },
    {
      text: "Menu",
      icon: <GridDots24Filled fontSize={size} />,
    },
    {
      text: "Filtro",
      icon: <FilterRegular fontSize={size} />,
    },
    {
      text: "SalirLogin",
      icon: <ArrowExitRegular fontSize={size} />,
    },
    {
      text: "Descargar",
      icon: <ArrowDownloadRegular fontSize={size} />,
    },
    {
      text: "Limpiar Filtro",
      icon: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "Ingresar",
      icon: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "Reportes",
      icon: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "FechasIzquierda",
      icon: <FlechaIzquierda />,
    },
    {
      text: "FechasDerecha",
      icon: <FlechaDerecha />,
    },
    {
      text: "Reloj",
      icon: <ClockRegular fontSize={size} />,
    },
    {
      text: "Alerta",
      icon: <AlertRegular fontSize={size} />,
    },
    {
      text: "Configuraciones",
      icon: <SettingsRegular fontSize={size} />,
    },
  ];
  type ValoresUnion =
    | "Eliminar"
    | "Menu"
    | "Agregar"
    | "Refrescar"
    | "Filtro"
    | "SalirLogin"
    | "Detalle"
    | "Limpiar Filtro"
    | "Ingresar"
    | "Reportes"
    | "Descargar"
    | "FechasIzquierda"
    | "FechasDerecha"
    | "Reloj"
    | "Alerta"
    | "Configuraciones";

  const Icon = (textIcon: ValoresUnion) => {
    const aux = iconos.filter((item) => item.text === textIcon);

    return aux[0]?.icon;
  };

  return { Icon };
};
