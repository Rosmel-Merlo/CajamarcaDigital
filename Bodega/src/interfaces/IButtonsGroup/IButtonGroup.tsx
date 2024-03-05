import { Slot } from "@fluentui/react-components";

export interface IButtonGroup {
  icon?: Slot<"span">;
  text: string;
  type?: "primary" | "outline" | "subtle" | "transparent";
  onClick?: () => void;
}
