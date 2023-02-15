import { Checkbox as FormCheck } from "react-daisyui";

export default function CheckBox({
  label,
  error,
  info,
  onChange,
  ...props
}: any) {
  return (
    <>
      <div className="form-control w-full">
        <div className="flex flex-row items-center gap-2">
          <label className="label">
            <span className="font-semibold">{label}</span>
          </label>
          <FormCheck
            onChange={onChange}
            className={`border-2 ${error && "border-error"}`}
          />
        </div>

        <label className="label">
          {error && <span className="label-text-alt text-error">{error}</span>}
          {info && <span className="label-text-alt">{info}</span>}
        </label>
      </div>
    </>
  );
}
