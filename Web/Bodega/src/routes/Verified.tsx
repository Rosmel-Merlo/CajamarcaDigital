import { TreeMenu } from "../interfaces/ISiderBar/ISiderBar";
import NavBar from "../components/navbar/NavBar";
import { IButtonGroup } from "../interfaces/IButtonsGroup/IButtonGroup";
import { useIconsCatalogo } from "../hooks/iconCatalog/useIconsCatalogo";
import { SiderBar } from "../components/siderBar/SiderBar";
import { Outlet } from "react-router-dom";
export const Verified = () => {
  const { Icon } = useIconsCatalogo(100);
  const linkGroups: TreeMenu[] = [
    {
      name: "Productos",
      links: [
        {
          key: "1",
          name: "Listado Productos",
          url: "productos",
          icon: "DocumentOnePageAdd20Regular",
        },
      ],
    },
    {
      name: "Secciones",
      links: [
        {
          key: "1",
          name: "Listado Secciones",
          url: "secciones",
          icon: "DocumentOnePageAdd20Regular",
        },
      ],
    },
    {
      name: "Categorias",
      links: [
        {
          key: "1",
          name: "Listado Categorias",
          url: "categorias",
          icon: "DocumentOnePageAdd20Regular",
        },
      ],
    },
    {
      name: "Proveedores",
      links: [
        {
          key: "1",
          name: "Listado Proveedores",
          url: "proveedores",
          icon: "DocumentOnePageAdd20Regular",
        },
      ],
    },
  ];

  const _leftButton: IButtonGroup[] = [
    {
      text: "Actualizar",
      icon: Icon("Menu"),
      //  onClick: postListarTablaControlAcceso,
    },
  ];
  const _rightButton: IButtonGroup[] = [
    {
      text: "Limpiar Filtro",
      icon: Icon("Configuraciones"),
      // onClick: limpiarFiltro,
    },
    {
      text: "Filtrar",
      icon: Icon("Alerta"),
      //  onClick: openPanelAdd,
    },
  ];
  return (
    <div style={{ height: "calc(100vh" }}>
      <NavBar leftButtons={_leftButton} rightButton={_rightButton} />

      <div style={{ display: "flex" }}>
        <SiderBar width={350} isOpen={true} linkNavGroups={linkGroups} />
        <div style={{ width: "100%", padding: "10px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
