import { FaUser } from "react-icons/fa";
import TextBox from "../../../../shared/components/text-box";

const UserPersonalDetailFrom = [
  { type: "text", label: "Job Title" },
  { type: "text", label: "First Name" },
  { type: "text", label: "Last Name" },
  { type: "email", label: "Email" },
  { type: "number", label: "Phone" },
  { type: "text", label: "Country" },
  { type: "text", label: "Postal Code" },
];

export default function UserPersonalDetails() {
  return (
    <div className="user-ps-container flex flex-col p-5 gap-5">
      <span className="text-xl font-bold">Personal Details</span>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-5">
        <div className="col-span-full lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <div className="flex justify-center border items-center  user-avatar bg-base-100">
            <FaUser size={100} />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 md:col-span-3">
          <TextBox {...UserPersonalDetailFrom[0]} />
          <div className="lg:grid md:grid grid-cols-2 gap-3">
            <TextBox {...UserPersonalDetailFrom[1]} />
            <TextBox {...UserPersonalDetailFrom[2]} />
            <TextBox {...UserPersonalDetailFrom[3]} />
            <TextBox {...UserPersonalDetailFrom[4]} />
            <TextBox {...UserPersonalDetailFrom[5]} />
            <TextBox {...UserPersonalDetailFrom[6]} />
          </div>
        </div>
      </div>
    </div>
  );
}
