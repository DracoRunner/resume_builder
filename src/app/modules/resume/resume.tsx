import CreateResume from "./create-resume/create-resume";
import CreateResumeContext from "./create-resume/create-resume-context";

export default function Resume(params: any) {
  return (
    <CreateResumeContext>
      <CreateResume />
    </CreateResumeContext>
  );
}
