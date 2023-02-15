import React from "react";
import { Button } from "react-daisyui";
import { FaPen, FaPlus } from "react-icons/fa";
import EmploymentItem, { EmpItem } from "./employment-item";

export default function EmploymentHistory(params: any) {
  const [employments, setEmployments] = React.useState<EmpItem[]>([]);

  const addNewEmployment = () => {
    const employment = { open: true };
    const newEmployments = employments.map((emp: EmpItem) => ({
      ...emp,
      open: false,
    }));
    setEmployments([...newEmployments, employment]);
  };

  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-2 items-center">
          <label className="text-2xl">Employment History</label>
          <FaPen></FaPen>
        </div>
        <small>
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </small>
      </header>
      <div>
        <small></small>
        <div className="flex flex-col gap-4">
          {employments.map((empItem: EmpItem) => {
            return <EmploymentItem empItem={empItem} />;
          })}
          <div>
            <Button
              onClick={addNewEmployment}
              color="primary"
              startIcon={<FaPlus />}
            >
              {!employments.length
                ? "Add employment"
                : "Add on more employment"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
