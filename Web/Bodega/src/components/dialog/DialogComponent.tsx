import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
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
    <Dialog open={props.isOpen} onOpenChange={props.onDismiss}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>{props.children}</DialogContent>
          <DialogActions>
            {props.onRenderFooter}
            {/*   <Button appearance="primary">Do Something</Button>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger> */}
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
