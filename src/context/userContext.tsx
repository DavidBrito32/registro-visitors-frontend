import { ReactElement, createContext, useState } from "react";

interface Props {
  state: {
    name: string;
    email: string;
    token: string;
    role: string
  };
  setState: React.Dispatch<React.SetStateAction<UserType>>;
}

interface UserType {
    name: string;
    email: string;
    token: string;
    role: string;
}

const DEFAULT_VALUE = {
  state: {
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    role: localStorage.getItem("role") || "",
    token: localStorage.getItem("token") || "",
  },
  setState: () => {},
};

export const UserContext = createContext<Props>(DEFAULT_VALUE);

export const UserContextProvider = ({ children }: {children: ReactElement}): JSX.Element => {
  const [state, setState] = useState<UserType>(DEFAULT_VALUE.state);

  return (
    <>
      <UserContext.Provider value={{ state, setState }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
