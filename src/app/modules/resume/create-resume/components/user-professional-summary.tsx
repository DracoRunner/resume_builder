import React from "react";

import CheckBox from "../../../../shared/components/check-box";
import RtEditor from "../../../../shared/components/rte-editor";
import SelectBox from "../../../../shared/components/select-box";
import TextBox from "../../../../shared/components/text-box";
import {
  months,
  selectionAry,
  years,
} from "../../../../shared/utils/calender-utils";
const UserProfessional = [
  { type: "text", label: "Company Name" },
  { type: "text", label: "Title" },
  { label: "Currently working" },
  { type: "text", label: "Start Month" },
  { type: "text", label: "Start Year" },
  { type: "text", label: "End Month" },
  { type: "email", label: "End Year" },
  { type: "text", label: "Postal Code" },
];
export default function UserProfessionalDetails() {
  const [isCurrent, SetIsCurrent] = React.useState(false);
  const yearsArr = selectionAry(years(20));
  const monthsArr = selectionAry(months);
  return (
    <div className="user-ps-container flex flex-col p-5 gap-5">
      <span className="text-xl font-bold">Professional Experience</span>
      <hr />
      <div className="grid grid-cols-2 gap-5">
        <TextBox {...UserProfessional[0]}></TextBox>
        <TextBox {...UserProfessional[1]}></TextBox>
        <div className="col-span-2">
          <CheckBox
            onChange={(event: any) => SetIsCurrent(event.target.checked)}
            {...UserProfessional[2]}
          />
        </div>
        <div className="grid grid-cols-2 gap-10 col-span-2">
          <div className="flex flex-row gap-3">
            <SelectBox options={monthsArr} {...UserProfessional[3]}></SelectBox>
            <SelectBox options={yearsArr} {...UserProfessional[4]}></SelectBox>
          </div>
          {!isCurrent && (
            <div className="flex flex-row gap-3">
              <SelectBox
                options={monthsArr}
                {...UserProfessional[5]}
              ></SelectBox>
              <SelectBox
                options={yearsArr}
                {...UserProfessional[6]}
              ></SelectBox>
            </div>
          )}
          <div className="col-span-2">
            <RtEditor></RtEditor>
          </div>
        </div>
      </div>
    </div>
  );
}
