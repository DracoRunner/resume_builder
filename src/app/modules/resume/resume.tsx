import { Progress } from "react-daisyui";
import { FaInfoCircle } from "react-icons/fa";
import Education from "./components/education/education";
import EmploymentHistory from "./components/employment-history/employment-history";
import PersonalDetails from "./components/personal-details";
import ProfessionalSummary from "./components/professional-summary";

export default function Resume(params: any) {
  return (
    <div className="grid grid-cols-4 h-full">
      <div className="flex flex-col col-span-2 col-start-2 w-full gap-8 bg-base-200 pl-5 pr-5">
        <header className="flex justify-center text-center mt-4">
          <span className="text-2xl">User Name</span>
        </header>
        <section className="flex flex-col w-full items-center">
          <div className="flex flex-row justify-between w-full items-center ">
            <label>43% Complete</label>
            <small className="flex flex-row items-center gap-1">
              <span>+7% Add Education</span>
              <FaInfoCircle />
            </small>
          </div>
          <Progress className="w-full" value={100} />
        </section>
        <PersonalDetails />
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
      </div>
      <div></div>
    </div>
  );
}
