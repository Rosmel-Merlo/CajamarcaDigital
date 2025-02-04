import { Body2, Title3 } from "@fluentui/react-components";
interface IHeaderPanel {
  titulo: string;
  subTitulo: string;
}
const HeaderPanel = (props: IHeaderPanel) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Title3>{props.titulo}</Title3>
      <Body2>{props.subTitulo}</Body2>
    </div>
  );
};

export default HeaderPanel;
