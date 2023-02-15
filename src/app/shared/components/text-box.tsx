import { Input } from "react-daisyui";

export default function TextBox({ label, error, info, ...props }: any) {
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="font-semibold">{label}</span>
        </label>
        <Input className={`border-2 ${error && "border-error"}`} />
        <label className="label">
          {error && <span className="label-text-alt text-error">{error}</span>}
          {info && <span className="label-text-alt">{info}</span>}
        </label>
      </div>
    </>
  );
}
