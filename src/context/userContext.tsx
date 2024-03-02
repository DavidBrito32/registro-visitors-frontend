import { ReactElement, createContext, useState } from "react";

interface Props {
  state: {
    name: string | null;
    email: string | null;
    token: string | null;
    role: string | null;
  };
  setState: React.Dispatch<React.SetStateAction<UserType>>;
}

interface UserType {
    name: string | null;
    email: string | null;
    token: string | null;
    role: string | null;
}

const DEFAULT_VALUE = {
  state: {
    name: localStorage.getItem("name") || null,
    email: localStorage.getItem("email") || null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("token") || null,
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
