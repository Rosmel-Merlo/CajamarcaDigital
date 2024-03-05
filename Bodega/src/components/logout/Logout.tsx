import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  OverlayDrawer,
} from "@fluentui/react-components";

interface ILogout {
  isOpen: boolean;
  onDismiss: () => void;
  customSize: number;
}
export const Logout = (props: ILogout) => {
  return (
    <>
      <OverlayDrawer
        open={props.isOpen}
        position="end"
        onOpenChange={props.onDismiss}
        style={{
          width: `${props.customSize}px`,
          height: "210px",
          marginTop: "48px",
        }}
      >
        <DrawerHeader>
          {/*  <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setOpen(false)}
              />
            }
          >
            Drawer with {customSize}px size
          </DrawerHeaderTitle> */}
        </DrawerHeader>

        <DrawerBody></DrawerBody>
        <DrawerFooter style={{ padding: "0px" }}>
          <Button
            style={{ width: "100%", height: "40px", background: "#CDD8EF" }}
          >
            Cerrar Sesión
          </Button>
        </DrawerFooter>
      </OverlayDrawer>
    </>
  );
};
