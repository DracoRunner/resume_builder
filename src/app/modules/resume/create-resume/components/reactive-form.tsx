import { Button } from "react-daisyui";
import React from "react";
import UserPersonalDetails from "./user-personal-details";
import UserProfessionalDetails from "./user-professional-summary";
import UserEmpHistory from "./user-employment-history";
import UserEducation from "./user-education";
import UserSocial from "./user-social-links";

export default function ReactiveFrom({ handleSubmit, ...props }: any) {
  const [tabValue, setTabValue] = React.useState(1);
  return (
    <form onSubmit={handleSubmit}>
      {tabValue === 1 && <UserPersonalDetails></UserPersonalDetails>}
      {tabValue === 2 && <UserProfessionalDetails></UserProfessionalDetails>}
      {tabValue === 3 && <UserEmpHistory></UserEmpHistory>}
      {tabValue === 4 && <UserEducation></UserEducation>}
      {tabValue === 5 && <UserSocial></UserSocial>}
      <div className="flex flex-row justify-end mt-10 gap-10">
        <Button
          hidden={tabValue === 1}
          onClick={() => setTabValue(tabValue - 1)}
        >
          Back
        </Button>
        <Button onClick={() => setTabValue(tabValue + 1)}>Next</Button>
      </div>
    </form>
  );
}
