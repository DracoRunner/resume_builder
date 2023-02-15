import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import "./header.scss";
export default function Header(params: any) {
  const navigate = useNavigate();
  return (
    <header>
      <span>ONLINE RESUME BUILDER</span>
      <h1 className="text-4xl font-bold ">
        Get Noticed and Hired Faster with a Professional Resume and Cover Letter
      </h1>
      <h6>
        Ultimate career toolkit, designed to help you create a professional,
        attention-grabbing resume that showcases your skills and experience.
        With an easy-to-use interface and a library of{" "}
        <b className="uppercase">expertly crafted </b>
        templates
      </h6>
      <Button onClick={() => navigate("/create-resume")}>
        Create My Resume
      </Button>
    </header>
  );
}
