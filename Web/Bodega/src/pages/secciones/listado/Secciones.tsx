import { IColumn } from "../../../interfaces/ITableComponent/ITableComponent";
import { CabeceraComponent } from "../../../components/tablas/cabeceras/CabeceraComponent";
import { TableComponent } from "../../../components/tablas/TableComponent";
import { IButtonGroup } from "../../../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";
import { PanelAgregarSeccion } from "./PanelAgregarSeccion";
import { useBoolean } from "@fluentui/react-hooks";
import { useListarSecciones } from "../hooks/useListarSecciones";
import { Button } from "@fluentui/react-components";
import { useEliminarSecciones } from "../hooks/useEliminarSecciones";

const Secciones = () => {
  const { items, getListarCategorias, loadingTabel } = useListarSecciones();
  const { Icon } = useIconsCatalogo(24);

  const [isOpenAdd, { setTrue: openPanelAdd, setFalse: onDismissPanel }] =
    useBoolean(false);
  const { deleteSeccion } = useEliminarSecciones({
    listarSecciones: getListarCategorias,
  });

  const columnas: IColumn[] = [
    {
      key: 2,
      name: "Nombre Seccion",
      fieldName: "nombre",
      minWidth: 20,
    },
    {
      key: 3,
      name: "Description",
      fieldName: "descripcion",
      minWidth: 20,
    },
    {
      key: 4,
      name: "Opciones",
      fieldName: "",
      minWidth: 20,
      onRender(item, index) {
        return (
          <>
            <Button
              key={index}
              appearance="transparent"
              onClick={() => {
                deleteSeccion(item.seccionId)
                console.log(item);
              }}
              style={{ fontSize: "12px", fontWeight: "normal" }}
              icon={Icon("Eliminar")}
            />
          </>
        );
      },
    },
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
      type: "subtle",
      icon: Icon("Refrescar"),
      onClick: getListarCategorias,
    },
  ];
  return (
    <>
      <CabeceraComponent subTitulo="Secciones" titulo="Listado de Secciones" />
      <TableComponent
        column={columnas}
        data={items}
        isLoading={loadingTabel}
        leftButtons={LeftBottom}
      />
      <PanelAgregarSeccion isOpen={isOpenAdd} onDismiss={onDismissPanel} />
    </>
  );
};

export default Secciones;
