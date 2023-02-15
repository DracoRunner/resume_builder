import { Tabs } from "react-daisyui";
import UserPersonalDetails from "./user-personal-details";
import React from "react";

export default function ReactiveFrom({
  handleSubmit,
  tabValue,
  ...props
}: any) {
  return (
    <form onSubmit={handleSubmit}>
      {tabValue === 1 && <UserPersonalDetails></UserPersonalDetails>}
      {/* <UserProfessionalDetails></UserProfessionalDetails>
      <UserEmpHistory></UserEmpHistory>
      <UserEducation></UserEducation>
      <UserSocial></UserSocial> */}
    </form>
  );
}
