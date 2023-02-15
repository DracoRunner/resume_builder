import { Select } from "react-daisyui";

export default function SelectBox({
  label,
  error,
  info,
  options,
  ...props
}: any) {
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="font-semibold">{label}</span>
        </label>
        <Select className={`border-2 ${error && "border-error"}`}>
          {options?.map((opt: any) => {
            return <Select.Option value={opt.value}>{opt.text}</Select.Option>;
          })}
        </Select>
        <label className="label">
          {error && <span className="label-text-alt text-error">{error}</span>}
          {info && <span className="label-text-alt">{info}</span>}
        </label>
      </div>
    </>
  );
}
