import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { useBoolean } from "@fluentui/react-hooks";
import { PanelAgregarCategoria } from "./PanelAgregarCategoria";
import { useListarCategoria } from "../hooks/useListarCategoria";

const Categorias = () => {
  const { Icon } = useIconsCatalogo(24);
  const { getListarCategorias, items } = useListarCategoria();
  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);

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
      onClick: openPanelAdd,
    },
    {
      text: "Actualizar",
      type: "outline",
      icon: Icon("Refrescar"),
      onClick: getListarCategorias,
    },
  ];
  return (
    <>
      <CabeceraComponent
        subTitulo="Categorias"
        titulo="Listado de Categorias"
      />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={false}
        leftButtons={LeftBottom}
      />
      <PanelAgregarCategoria isOpen={isOpenAdd} onDismiss={onDismissPanel} />
    </>
  );
};

export default Categorias;
