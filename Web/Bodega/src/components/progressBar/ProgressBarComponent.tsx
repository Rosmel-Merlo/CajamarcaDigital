import { Field, ProgressBar } from "@fluentui/react-components";

interface IProgressBarComponent {
  text: string;
}
export const ProgressBarComponent = (props: IProgressBarComponent) => {
  return (
    <Field validationMessage={props.text} validationState="none">
      <ProgressBar />
    </Field>
  );
};
