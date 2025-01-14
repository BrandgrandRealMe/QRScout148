import { resetSections } from '../../../store/store';

export type ResetButtonProps = {
  disabled?: boolean;
};

export function ResetButton(props: ResetButtonProps) {
  return (
    <button
      className="focus:shadow-outline mx-2 my-6 rounded bg-white py-2 font-bold uppercase text-red-rhr hover:bg-red-200 focus:outline-none dark:bg-gray-400 dark:text-white dark:hover:bg-gray-400"
      type="button"
      onClick={() => resetSections()}
      disabled={props.disabled}
    >
      Reset Form
    </button>
  );
}
