import {

  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
} from "@fluentui/react-components";
interface IDialogComponent {
  title?: string;
  isOpen: boolean;
  onRenderFooter?: JSX.Element;
  onDismiss: () => void;
  children?: JSX.Element;
}

export const DialogComponent = (props: IDialogComponent) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onDismiss} inertTrapFocus={true}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>{props.children}</DialogContent>
          <DialogActions>
            {props.onRenderFooter}
            
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
