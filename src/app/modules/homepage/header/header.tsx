import { Button } from "react-daisyui";
import "./header.scss";
export default function Header(params: any) {
  return (
    <header>
      <span>ONLINE RESUME BUILDER</span>
      <h1 className="text-4xl font-bold ">
        Only 2% of resumes make it past the first round. Be in the top 2%
      </h1>
      <h6>
        Use professional field-tested resume templates that follow the exact
        ‘resume rules’ employers look for. Easy to use and done within minutes -
        try now for free!
      </h6>
      <Button>Create My Resume</Button>
    </header>
  );
}
