import {
  Link,
  Slot,
  Toast,
  ToastBody,
  ToastFooter,
  ToastPosition,
  ToastTitle,
  useId,
  useToastController,
} from "@fluentui/react-components";

export const useToastNotify = () => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  interface INotifyProps {
    title?: string;
    subtitle?: string;
    subtitleBody?: Slot<"div">;
    footer?: JSX.Element;
    actionTitle?: Slot<"div">;
    position?: ToastPosition;
    intent?: "success" | "error" | "warning" | "info";
  }

  const notify = (props: INotifyProps) =>
    dispatchToast(
      <Toast>
        <ToastTitle action={props.actionTitle}>{props.title}</ToastTitle>
        <ToastBody subtitle={props.subtitleBody}/>
        <ToastFooter>{props.footer}</ToastFooter>
      </Toast>,
      { position: props.position, intent: props.intent }
    );

  return { notify, toasterId };
};
