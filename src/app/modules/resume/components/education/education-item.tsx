import React from "react";
import { Collapse } from "react-daisyui";
import RtEditor from "../../../../shared/components/rte-editor";
import TextBox from "../../../../shared/components/text-box";
import { EduItem } from "./education";
const EducationFrom = [
  { type: "text", label: "School Name" },
  { type: "text", label: "Degree" },
  { type: "text", label: "Start Date" },
  { type: "text", label: "End Date" },
  { type: "text", label: "City" },
];

export default function EducationItem({ edu, ...params }: EduItem & any) {
  const [open, setOpen] = React.useState(false);

  // const [education, setEducation] = React.useState<EduItem>({
  //   open: false,
  // });

  React.useEffect(() => {
    setOpen(edu.open);
  }, [edu]);

  return (
    <Collapse
      open={open}
      icon="arrow"
      className="border border-base-100 bg-base-100"
    >
      <Collapse.Title onClick={() => setOpen(!open)}>
        <div className="flex flex-col">
          <span>Excellence</span>
          <small>
            {"May/2015"} - {"present"}
          </small>
        </div>
      </Collapse.Title>
      <Collapse.Content>
        <div className="grid grid-cols-2 gap-5">
          <TextBox {...EducationFrom[0]} value={edu.schoolName} />
          <TextBox {...EducationFrom[1]} value={edu.degree} />
          <div className="grid grid-cols-2 gap-5">
            <TextBox {...EducationFrom[2]} value={edu.startDate} />
            <TextBox {...EducationFrom[3]} value={edu.endDate} />
          </div>
          <TextBox {...EducationFrom[4]} value={edu.city} />
          <div className="col-span-2">
            <RtEditor value={edu.desc} />
          </div>
        </div>
      </Collapse.Content>
    </Collapse>
  );
}
