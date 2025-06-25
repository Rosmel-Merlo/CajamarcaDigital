import { Body2, Title3 } from "@fluentui/react-components";
import { useIconsCatalogo } from "../../../hooks/iconCatalog/useIconsCatalogo";

interface ICabeceraComponent {
  titulo: string;
  subTitulo: string;
  nameIcon: string;
}
export const CabeceraComponent = (props: ICabeceraComponent) => {
  const { ComponentIcon } = useIconsCatalogo(48);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ComponentIcon nameIcon={props.nameIcon} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 0px",
        }}
      >
        <Title3>{props.titulo}</Title3>
        <Body2>{props.subTitulo}</Body2>
      </div>
    </div>
  );
};
