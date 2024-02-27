import { CopyButton } from './CopyButton';

export type PreviewTextProps = {
  data: string;
};
export function PreviewText(props: PreviewTextProps) {
  const chunks = props.data.split('\t');
  return (
    <div className="flex flex-col items-center gap-2 shadow-md bg-dark-gray-300 m-2 p-2 rounded-md">
      <div className="text-justify p-2 rounded bg-dark-gray-300 ">
        <p className=" font-mono text-wrap break-all text-dark-gray-200 ">
          {chunks.map((c, i) => (
            <>
              <span key={i + c}>{c}</span>

              <span key={i + c + 'tab'} className="text-dark-gray-500">
                {i !== chunks.length - 1 ? '|' : ' ↵'}
              </span>
            </>
          ))}
        </p>
      </div>

      <CopyButton onCopy={() => navigator.clipboard.writeText(props.data)} />
    </div>
  );
}
