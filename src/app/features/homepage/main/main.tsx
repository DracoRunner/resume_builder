import img_1 from "../../../../assets/images/img-1.png";
import img_2 from "../../../../assets/images/img-2.png";
import img_3 from "../../../../assets/images/img-3.png";
import Features from "./features/features";
import "./main.scss";

const featuresArr = [
  {
    imgURl: img_1,
    headerText: "Create a Professional Resume and Cover Letter in Minutes",
    descText:
      "Our easy-to-use platform allows you to create a polished and professional resume and cover letter in a matter of minutes. Choose from a variety of customizable templates, add your own content, and download or print your finished product in no time. Say goodbye to the hassle of writing a resume and cover letter from scratch and get started today.",
    btnName: "Build a mistake-free resume",
  },
  {
    imgURl: img_2,
    headerText:
      "Impress Hiring Managers with a Customized Resume and Cover Letter",
    descText:
      "Take control of your job search by creating a customized resume and cover letter that showcases your unique skills and experiences. Our platform offers a variety of templates and customizable sections, allowing you to tailor your documents to meet the specific requirements of each job you apply for. Impress hiring managers and stand out from other applicants with a resume and cover letter that truly represents you.",
    btnName: "Build a mistake-free resume",
  },
  {
    imgURl: img_3,
    headerText:
      "Transform Your Job Search with a Standout Resume and Cover Letter",
    descText:
      "Say goodbye to generic and forgettable resumes and cover letters. With our platform, you can create a standout document that truly represents your skills, experiences, and goals. Our templates and customizable sections make it easy to create a resume and cover letter that stands out from the crowd and showcases your unique qualities. Transform your job search and increase your chances of landing your dream job.",
    btnName: "Build a mistake-free resume",
  },
];

export default function Main() {
  return (
    <>
      <div className="feature-section">
        {featuresArr.map((ft) => {
          return <Features {...ft}></Features>;
        })}
      </div>
    </>
  );
}
