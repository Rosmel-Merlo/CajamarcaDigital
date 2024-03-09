import { Body2, Title3 } from "@fluentui/react-components";

interface ICabeceraComponent {
  titulo: string;
  subTitulo: string;
}
export const CabeceraComponent = (props: ICabeceraComponent) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "20px 0px" }}
    >
      <Title3>{props.titulo}</Title3>
      <Body2>{props.subTitulo}</Body2>
    </div>
  );
};
