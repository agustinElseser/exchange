export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email?: string;
  password: string;
  rememberMe?: boolean;
  username: string;
  id_cliente?: string | number;
};

export type RegisterParams = {
  email: string;
  username: string;
  password: string;
};

export type UserDataType = {
  id: number;
  name: string;
  rol: "user" | "admin";
};

export type Company = {
  id: number;
  nombre: string;
};

export type AuthValuesType = {
  user: UserDataType | null;
  loading: boolean;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  logout: () => void;
};
