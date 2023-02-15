import React from "react";
import { Collapse } from "react-daisyui";
import RtEditor from "../../../../shared/components/rte-editor";
import TextBox from "../../../../shared/components/text-box";
const EmploymentFrom = [
  { type: "text", label: "Job Title" },
  { type: "text", label: "Employer" },
  { type: "text", label: "Start Date" },
  { type: "text", label: "End Date" },
  { type: "text", label: "City" },
];

export type EmpItem = {
  jobTitle?: string;
  employer?: string;
  startDate?: string;
  endDate?: string;
  city?: string;
  desc?: string;
  open: boolean;
};

export default function EmploymentItem({ empItem, ...props }: EmpItem & any) {
  const [open, setOpen] = React.useState(false);

  // const [education, setEducation] = React.useState<EmpItem>({
  //   open: false,
  // });

  React.useEffect(() => {
    setOpen(empItem.open);
  }, [empItem]);

  return (
    <Collapse
      open={open}
      icon="arrow"
      className="border border-base-100 bg-base-100"
    >
      <Collapse.Title onClick={() => setOpen(!open)}>
        <div className="flex flex-col">
          <span>Accenture (Full Stack Developer)</span>
          <small>Deb 2023 -Present</small>
        </div>
      </Collapse.Title>
      <Collapse.Content>
        <div className="grid grid-cols-2 gap-5">
          <TextBox {...EmploymentFrom[0]} />
          <TextBox {...EmploymentFrom[1]} />
          <div className="grid grid-cols-2 gap-5">
            <TextBox {...EmploymentFrom[2]} />
            <TextBox {...EmploymentFrom[3]} />
          </div>
          <TextBox {...EmploymentFrom[4]} />
          <div className="col-span-2">
            <RtEditor />
          </div>
        </div>
      </Collapse.Content>
    </Collapse>
  );
}
