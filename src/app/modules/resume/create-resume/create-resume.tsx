import { Formik } from "formik";
import "./create-resume.scss";
import ReactiveFrom from "./components/reactive-form";
import { Steps, Tabs } from "react-daisyui";
import React from "react";

export default function CreateResume(params: any) {
  const UserDataFormik = {
    initialValues: { email: "" },
    onSubmit: async (values: any) => {},
  };

  const [tabValue, setTabValue] = React.useState(1);

  return (
    <div className="rc-container flex flex-col justify-center gap-10">
      <Steps className="w-full">
        <Steps.Step></Steps.Step>
        <Steps.Step></Steps.Step>
        <Steps.Step></Steps.Step>
      </Steps>

      <div>
        <Tabs value={tabValue} variant="lifted" onChange={setTabValue}>
          <Tabs.Tab className="text-base-content font-semibold" value={1}>
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab className="text-base-content font-semibold" value={2}>
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab className="text-base-content font-semibold" value={3}>
            Tab 1
          </Tabs.Tab>
        </Tabs>
        <div className="bg-base-300 p-2">
          <Formik {...UserDataFormik}>
            {(props) => <ReactiveFrom {...props} tabValue={tabValue} />}
          </Formik>
        </div>
      </div>
    </div>
  );
}
