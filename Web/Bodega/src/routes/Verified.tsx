import { TreeMenu } from '../interfaces/ISiderBar/ISiderBar';
import NavBar from '../components/navbar/NavBar';
import "./VirifiedStyle.css"
import { IButtonGroup } from '../interfaces/IButtonsGroup/IButtonGroup';
import { useIconsCatalogo } from '../hooks/iconCatalog/useIconsCatalogo';
import { SiderBar } from '../components/siderBar/SiderBar';
import { Outlet } from 'react-router-dom';
export const Verified = () => {
    const { Icon } = useIconsCatalogo(100);
    const linkGroups: TreeMenu[] = [
        {
            name: "Personas",
            links: [
                {
                    key: "1",
                    name: "Listado Clientes",
                    url: "listado",
                    icon: "DocumentOnePageAdd20Regular",
                },

                {
                    key: "2",
                    name: "Reportes",
                    url: "reportes",
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
        <div className='virified-main'>
            <NavBar leftButtons={_leftButton} rightButton={_rightButton} />
            <div className='Verified-body'>
             <SiderBar width={350} isOpen={true} linkNavGroups={linkGroups} />
               <Outlet />
            </div>
        </div>
    )
}
