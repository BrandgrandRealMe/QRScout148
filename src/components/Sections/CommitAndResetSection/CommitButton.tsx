export type CommitButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export function CommitButton(props: CommitButtonProps) {
  return (
    <button
      className="focus:shadow-outline mx-2 rounded bg-black-350 py-6 px-6 font-bold uppercase text-white hover:bg-black-350 focus:shadow-lg focus:outline-none disabled:bg-black-150 dark:bg-red-rhr"
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Commit
    </button>
  );
}
