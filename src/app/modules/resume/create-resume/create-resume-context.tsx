import React from "react";

export const ResumeContext = React.createContext<any>("light");

// eslint-disable-next-line
export default ({ children }: any) => {
  const [user, setSetUser] = React.useState({});

  const defaultContext = {
    user,
    setSetUser,
  };

  return (
    <ResumeContext.Provider value={defaultContext}>
      {children}
    </ResumeContext.Provider>
  );
};
