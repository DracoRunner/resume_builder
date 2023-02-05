import { Button } from "react-daisyui";
import Features from "./features/features";
import Header from "./header/header";
import "./homepage.scss";
export default function HomePage(params: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header></Header>
      <Features></Features>
    </div>
  );
}
