import { IComponenteIcon, IICONBUNDLE } from "../../interfaces/IICon/IIcon";
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
  TextBulletListSquareFilled,
  TextBulletListSquareRegular,
  BarcodeScannerFilled,
  BarcodeScannerRegular,
  BroomFilled,
  BroomRegular,
  TeachingFilled,
  TeachingRegular,
  LayoutRowTwoSplitBottomFilled,
  LayoutRowTwoSplitBottomRegular,
  VehicleTruckBagRegular,
  VehicleTruckBagFilled,
  ClipboardBulletListLtrFilled,
  ClipboardBulletListLtrRegular,
} from "@fluentui/react-icons";

import { FlechaDerecha, FlechaIzquierda } from "../../utils/IconsSVG";

const AgregarIcon = bundleIcon(AddFilled, AddRegular);
const EliminarIcon = bundleIcon(DeleteFilled, DeleteRegular);
const EditarIcon = bundleIcon(EditFilled, EditRegular);
const DetalleIcon = bundleIcon(AppsListFilled, AppsListRegular);
const RefrescarIcon = bundleIcon(ArrowClockwiseFilled, ArrowClockwiseRegular);
const Limpiar = bundleIcon(BroomFilled, BroomRegular);
const ListaProductosIcon = bundleIcon(TeachingFilled, TeachingRegular);
const ListaSeccionesIcon = bundleIcon(
  LayoutRowTwoSplitBottomFilled,
  LayoutRowTwoSplitBottomRegular
);
const ListarProveedoresIcon = bundleIcon(
  VehicleTruckBagFilled,
  VehicleTruckBagRegular
);
const ListarInventarioIcon = bundleIcon(
  ClipboardBulletListLtrFilled,
  ClipboardBulletListLtrRegular
);
const ListarIcon = bundleIcon(
  TextBulletListSquareFilled,
  TextBulletListSquareRegular
);
//BowlSaladRegular Productos
const CodeBarIcon = bundleIcon(BarcodeScannerFilled, BarcodeScannerRegular);
export const useIconsCatalogo = (size: number) => {
  const iconos: IICONBUNDLE[] = [
    {
      text: "Agregar",
      icon: <AgregarIcon fontSize={size} />,
      iconRegular: <AddRegular fontSize={size} />,
    },
    {
      text: "Editar",
      icon: <EditarIcon fontSize={size} />,
      iconRegular: <EditRegular fontSize={size} />,
    },
    {
      text: "Eliminar",
      icon: <EliminarIcon fontSize={size} />,
      iconRegular: <DeleteRegular fontSize={size} />,
    },
    {
      text: "Refrescar",
      icon: <RefrescarIcon fontSize={size} />,
      iconRegular: <ArrowClockwiseRegular fontSize={size} />,
    },
    {
      text: "Listar",
      icon: <ListarIcon fontSize={size} />,
      iconRegular: <TextBulletListSquareRegular fontSize={size} />,
    },
    {
      text: "ListaProductos",
      icon: <ListaProductosIcon fontSize={size} />,
      iconRegular: <TeachingRegular fontSize={size} />,
    },
    {
      text: "ListaSecciones",
      icon: <ListaSeccionesIcon fontSize={size} />,
      iconRegular: <LayoutRowTwoSplitBottomRegular fontSize={size} />,
    },
    {
      text: "ListaProveedores",
      icon: <ListarProveedoresIcon fontSize={size} />,
      iconRegular: <VehicleTruckBagRegular fontSize={size} />,
    },
    {
      text: "ListarInventario",
      icon: <ListarInventarioIcon fontSize={size} />,
      iconRegular: <ClipboardBulletListLtrRegular fontSize={size} />,
    },
    {
      text: "Escaner",
      icon: <BarcodeScannerFilled fontSize={size} />,
      iconRegular: <BarcodeScannerRegular fontSize={size} />,
    },
    {
      text: "Detalle",
      icon: <DetalleIcon fontSize={size} />,
      iconRegular: <AppsListRegular fontSize={size} />,
    },
    {
      text: "CodeBar",
      icon: <CodeBarIcon fontSize={size} />,
      iconRegular: <BarcodeScannerRegular fontSize={size} />,
    },
    {
      text: "Menu",
      icon: <GridDots24Filled fontSize={size} />,
      iconRegular: <GridDots24Filled fontSize={size} />,
    },
    {
      text: "Filtro",
      icon: <FilterRegular fontSize={size} />,
      iconRegular: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "SalirLogin",
      icon: <ArrowExitRegular fontSize={size} />,
      iconRegular: <ArrowExitRegular fontSize={size} />,
    },
    {
      text: "Descargar",
      icon: <ArrowDownloadRegular fontSize={size} />,
      iconRegular: <ArrowDownloadRegular fontSize={size} />,
    },
    {
      text: "Limpiar",
      icon: <Limpiar fontSize={size} />,
      iconRegular: <BroomRegular fontSize={size} />,
    },
    {
      text: "Limpiar Filtro",
      icon: <FilterDismissRegular fontSize={size} />,
      iconRegular: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "Ingresar",
      icon: <FilterDismissRegular fontSize={size} />,
      iconRegular: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "Reportes",
      icon: <FilterDismissRegular fontSize={size} />,
      iconRegular: <FilterDismissRegular fontSize={size} />,
    },
    {
      text: "FechasIzquierda",
      icon: <FlechaIzquierda />,
      iconRegular: <FlechaIzquierda />,
    },
    {
      text: "FechasDerecha",
      icon: <FlechaDerecha />,
      iconRegular: <FlechaDerecha />,
    },
    {
      text: "Reloj",
      icon: <ClockRegular fontSize={size} />,
      iconRegular: <ClockRegular fontSize={size} />,
    },
    {
      text: "Alerta",
      icon: <AlertRegular fontSize={size} />,
      iconRegular: <AlertRegular fontSize={size} />,
    },
    {
      text: "Configuraciones",
      icon: <SettingsRegular fontSize={size} />,
      iconRegular: <SettingsRegular fontSize={size} />,
    },
  ];
  type ValoresUnion =
    | "Eliminar"
    | "Menu"
    | "Agregar"
    | "Refrescar"
    | "Listar"
    | "Filtro"
    | "SalirLogin"
    | "Detalle"
    | "CodeBar"
    | "Limpiar Filtro"
    | "Limpiar"
    | "Ingresar"
    | "Reportes"
    | "Descargar"
    | "FechasIzquierda"
    | "FechasDerecha"
    | "Reloj"
    | "Alerta"
    | "ListaProductos"
    | "ListaSecciones"
    | "ListaProveedores"
    | "ListarInventario"
    | "Configuraciones";

  const Icon = (textIcon: ValoresUnion | string) => {
    const aux = iconos.filter((item) => item.text === textIcon);

    return aux[0]?.icon;
  };

  const ComponentIcon = ({ nameIcon }: { nameIcon: string }) => {
    return iconos.map((item) => (item.text === nameIcon ? item.iconRegular : <></>));
  };
  return { Icon, ComponentIcon };
};
