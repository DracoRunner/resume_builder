import { Avatar, Button, Input } from "react-daisyui";
import { FaUser } from "react-icons/fa";
import TextBox from "../../../../shared/components/text-box";

const UserPersonalDetailFrom = [
  { type: "text", label: "Job Title" },
  { type: "text", label: "First Name" },
  { type: "text", label: "Last Name" },
  { type: "email", label: "Email" },
  { type: "number", label: "Phone" },
  { type: "text", label: "Country" },
  { type: "text", label: "City" },
  { type: "text", label: "Address" },
  { type: "text", label: "Postal Code" },
  { type: "text", label: "Driving License" },
  { type: "text", label: "Nationality" },
  { type: "text", label: "Place Of Birth" },
  { type: "date", label: "Date Of Birth" },
];

export default function UserPersonalDetails() {
  return (
    <div className="user-ps-container flex flex-col p-10">
      <span className="text-xl font-bold">Personal Details</span>
      <hr />
      <div className="grid-cols-3 hidden lg:grid md:grid">
        <div className="col-span-3">
          <TextBox {...UserPersonalDetailFrom[0]} />
        </div>
        <div className="flex justify-center items-center">
          <FaUser size={100} />
        </div>
        <div className="col-span-2">
          <TextBox {...UserPersonalDetailFrom[1]} />
          <TextBox {...UserPersonalDetailFrom[2]} />
        </div>
      </div>

      <div className="hidden lg:grid md:grid grid-cols-4 gap-3">
        <TextBox {...UserPersonalDetailFrom[3]} />
        <TextBox {...UserPersonalDetailFrom[4]} />
        <TextBox {...UserPersonalDetailFrom[5]} />
        <TextBox {...UserPersonalDetailFrom[6]} />
      </div>
      <div className=" grid-cols-3 gap-5 hidden lg:grid md:grid">
        <div className="col-span-2">
          <TextBox {...UserPersonalDetailFrom[7]} />
        </div>
        <TextBox {...UserPersonalDetailFrom[8]} />
      </div>

      <div className="grid grid-cols-1 lg:hidden md:hidden">
        <div className="flex justify-center items-center">
          <FaUser size={100} />
        </div>
        <TextBox {...UserPersonalDetailFrom[0]} />
        <TextBox {...UserPersonalDetailFrom[1]} />
        <TextBox {...UserPersonalDetailFrom[2]} />
        <TextBox {...UserPersonalDetailFrom[3]} />
        <TextBox {...UserPersonalDetailFrom[4]} />
        <TextBox {...UserPersonalDetailFrom[5]} />
        <TextBox {...UserPersonalDetailFrom[6]} />
        <TextBox {...UserPersonalDetailFrom[7]} />
        <TextBox {...UserPersonalDetailFrom[8]} />
      </div>
    </div>
  );
}
