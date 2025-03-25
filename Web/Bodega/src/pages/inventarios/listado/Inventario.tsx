import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";

export const Inventario = () => {
  const { Icon } = useIconsCatalogo(24);

  const columnas: IColumn[] = [
    { key: 1, name: "Nombre", fieldName: "nombreCategoria", minWidth: 20 },
    { key: 2, name: "Descripción", fieldName: "descripcion", minWidth: 20 },
    { key: 3, name: "Codigo", fieldName: "codigo", minWidth: 20 },
  ];
  const LeftBottom: IButtonGroup[] = [
    {
      text: "Agregar",
      type: "primary",
      icon: Icon("Agregar"),
      //onClick: openPanelAdd,
    },
    {
      text: "Actualizar",
      type: "outline",
      icon: Icon("Refrescar"),
      //onClick: getListarCategorias,
    },
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Inventario"
        titulo="Listado del Inventario"
      />
      <TableComponent
        column={columnas}
        data={[]}
        isLoading={false}
        leftButtons={LeftBottom}
      />
    </>
  );
};
