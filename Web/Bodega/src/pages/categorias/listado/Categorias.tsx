import { useEffect, useState } from "react";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import EndPointsCategoria from "../../../api/bodega/endpoints/EndPointsCategoria";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { useBoolean } from "@fluentui/react-hooks";
import { PanelAgregarCategoria } from "./PanelAgregarCategoria";

const Categorias = () => {
  const { Icon } = useIconsCatalogo(24);

  const [items, setItems] = useState<[]>([]);

  const getListarCategorias = () => {
    EndPointsCategoria.getListarCategorias().then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      }
    });
  };
  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);
  useEffect(() => {
    getListarCategorias();
  }, []);

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
