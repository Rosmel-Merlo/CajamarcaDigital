import BarcodeScanner from "../components/barcodeScanner/BarcodeScanner";
import Panel from "../components/panel/Panel";
interface IPanelMenu {
  isOpen: boolean;
  onDismiss: () => void;
}
export const PanelMenu = (props: IPanelMenu) => {
  return (
    <Panel
      type="inline"
      position="start"
      size="large"
      isOpen={props.isOpen}
      onDismiss={props.onDismiss}
    >
      <div>
        <BarcodeScanner />
      </div>
    </Panel>
  );
};
