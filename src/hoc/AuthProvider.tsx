import { createContext, useContext, useState } from "react";

export interface IUser {
  [key: string]: string;
  userLogin: string;
  userPassword: string;
  userEmail: string;
}

interface IAuthContext {
  user: IUser | null;
  signIn: (userInfo: IUser, cb: () => void) => void;
  signOut: (cb: () => void) => void;
}

interface IProps {
  children: JSX.Element;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = (props: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = (user: IUser, cb: () => void) => {
    setUser(user);
    cb();
  };

  const signOut = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const providerValue = { user, signIn, signOut };

  return (
    // <AuthContext.Provider value={providerValue}>
    // {props.children}
    {
      /* </AuthContext.Provider> */
    }
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
