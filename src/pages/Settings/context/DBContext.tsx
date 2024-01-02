import { useState, createContext } from "react";

export type TypeDBContext = {
  options: SettingsOptions;
  handleOptions: (name: keyof SettingsOptions, value: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DBContext = createContext<TypeDBContext>({} as TypeDBContext);

export interface SettingsOptions {
  google_auth: boolean;
  withdraw: boolean;
  sms_auth: boolean;
  email_verify: boolean;
  interface_clean: boolean;
  whitelist: boolean;
}

interface IChildren {
  children: JSX.Element | JSX.Element[];
}

const initialState: SettingsOptions = {
  google_auth: false,
  withdraw: false,
  sms_auth: false,
  email_verify: false,
  interface_clean: false,
  whitelist: false,
};

export const DBProvider = ({ children }: IChildren) => {
  const [options, setOptions] = useState<SettingsOptions>(initialState);

  const handleOptions = (name: keyof SettingsOptions, value: boolean) => {
    setOptions((prevOptions) => {
      return { ...prevOptions, [name]: value };
    });
  };

  return <DBContext.Provider value={{ options, handleOptions }}>{children}</DBContext.Provider>;
};
