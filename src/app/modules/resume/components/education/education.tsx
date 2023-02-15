import React from "react";
import { Button } from "react-daisyui";
import { FaPen, FaPlus } from "react-icons/fa";
import EducationItem from "./education-item";
export type EduItem = {
  schoolName?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  city?: string;
  desc?: string;
  open: boolean;
};

export default function Education(params: any) {
  const [educations, setEducations] = React.useState<EduItem[]>([]);

  const addNewEducation = () => {
    const education = { open: true };
    const newEducations = educations.map((edu) => ({ ...edu, open: false }));
    setEducations([...newEducations, education]);
  };

  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-2 items-center">
          <label className="text-2xl">Education</label>
          <FaPen></FaPen>
        </div>
        <small>
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </small>
      </header>
      <div>
        <div className="flex flex-col gap-4">
          {educations.map((edu: EduItem) => {
            return <EducationItem edu={edu} />;
          })}
          <div>
            <Button
              onClick={addNewEducation}
              color="primary"
              startIcon={<FaPlus />}
            >
              {!educations.length ? "Add Education" : "Add on more Education"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
