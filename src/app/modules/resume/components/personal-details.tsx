import { FaPen } from "react-icons/fa";
import TextBox from "../../../shared/components/text-box";
const UserPersonalDetailFrom = [
  { type: "text", label: "Job Title" },
  { type: "text", label: "First Name" },
  { type: "text", label: "Last Name" },
  { type: "email", label: "Email" },
  { type: "number", label: "Phone" },
  { type: "text", label: "Country" },
  { type: "text", label: "City" },
  { type: "text", label: "Postal Code" },
  { type: "text", label: "Date Of Birth" },
];

export default function PersonalDetails() {
  return (
    <section className="flex flex-col">
      <header className="flex flex-row gap-2 items-center">
        <label className="text-2xl">Personal Details</label>
        <FaPen></FaPen>
      </header>
      <div className="grid grid-cols-2 gap-3">
        {UserPersonalDetailFrom.map((item: any) => {
          return <TextBox {...item} />;
        })}
      </div>
    </section>
  );
}
