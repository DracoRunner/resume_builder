import { Formik } from "formik";
import ReactiveFrom from "./components/reactive-form";
import "./create-resume.scss";

export default function CreateResume(params: any) {
  const UserDataFormik = {
    initialValues: { email: "" },
    onSubmit: async (values: any) => {},
  };

  return (
    <div className="rc-container">
      <Formik {...UserDataFormik}>
        {(props) => <ReactiveFrom {...props} />}
      </Formik>
    </div>
  );
}
