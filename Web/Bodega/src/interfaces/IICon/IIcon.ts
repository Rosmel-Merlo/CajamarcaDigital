import { Slot } from "@fluentui/react-components";
import { FluentIcon } from "@fluentui/react-icons";

export interface IICONBUNDLE {
  text: string;
  icon: Slot<"span">;
  iconRegular?: JSX.Element;
}
export interface IComponenteIcon extends FluentIcon {
  nameIcon: string;
}
