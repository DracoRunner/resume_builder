import { FaPen } from "react-icons/fa";
import RtEditor from "../../../shared/components/rte-editor";

export default function ProfessionalSummary(params: any) {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-2 items-center">
          <label className="text-2xl">Professional Summary</label>
          <FaPen></FaPen>
        </div>
        <small>
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </small>
      </header>
      <div>
        <RtEditor></RtEditor>
      </div>
    </section>
  );
}
