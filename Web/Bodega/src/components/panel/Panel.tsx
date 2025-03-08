import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { DismissSquareRegular } from "@fluentui/react-icons";
import { ProgressBarComponent } from "../progressBar/ProgressBarComponent";
interface IPanel {
  isOpen: boolean;
  onDismiss: () => void;
  size?: "full" | "small" | "medium" | "large";
  onRenderHeader?: () => JSX.Element;
  onRenderFooter?: () => JSX.Element;
  children?: any;
  loading?: Boolean;
  position?: "start" | "end";
  type?: "inline" | "overlay";
}

const Panel = (props: IPanel) => {
  return (
    <div>
      <Drawer
        type={props.type}
        size={props.size ?? "small"}
        position={props.position == undefined ? "end" : props.position}
        open={props.isOpen}
        onOpenChange={props.onDismiss}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<DismissSquareRegular />}
                onClick={() => props.onDismiss()}
              />
            }
          >
            {!props.onRenderHeader ? <></> : <>{props.onRenderHeader()}</>}
          </DrawerHeaderTitle>
          <Divider appearance="brand"></Divider>
        </DrawerHeader>

        <DrawerBody>
          {!props.loading ? (
            props.children
          ) : (
            <ProgressBarComponent text="Se estan validando los datos, espero porfavor"></ProgressBarComponent>
          )}
        </DrawerBody>

        <DrawerFooter>
          {!props.onRenderFooter ? <>si</> : <>{props.onRenderFooter()}</>}
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default Panel;
