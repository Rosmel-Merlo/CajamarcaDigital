import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  useRestoreFocusSource,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

interface ISideBar {
  isOpen: boolean;
  onDismiss: () => void;
}
const SideBar = (props: ISideBar) => {
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <div>
      <Drawer
        {...restoreFocusSourceAttributes}
        type={"inline"}
        separator
        open={props.isOpen}
        onOpenChange={() => props.onDismiss()}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => props.onDismiss()}
              />
            }
          >
            Default Drawer
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </Drawer>
    </div>
  );
};

export default SideBar;
