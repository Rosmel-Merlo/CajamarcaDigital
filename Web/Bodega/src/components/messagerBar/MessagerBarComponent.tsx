import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
} from "@fluentui/react-components";
import { useIconsCatalogo } from "../../hooks/iconCatalog/useIconsCatalogo";

interface IMessagerBar {
  intent?: "success" | "error" | "warning" | "info";
  title?: string;
  message?: string;
  onDismiss?: () => void;
}

export const MessagerBarComponent = (props: IMessagerBar) => {
  const { Icon } = useIconsCatalogo(24);
  return (
    <MessageBar
      key={props.intent}
      intent={props.intent == undefined ? "success" : props.intent}
    >
      <MessageBarBody>
        <MessageBarTitle>{props.title ?? ""}</MessageBarTitle>
        {props.message ?? ""}
      </MessageBarBody>
      <MessageBarActions
        containerAction={
          <Button
            aria-label="dismiss"
            appearance="transparent"
            icon={Icon("Agregar")}
            onClick={props.onDismiss}
          />
        }
      >
      </MessageBarActions>
    </MessageBar>
  );
};
