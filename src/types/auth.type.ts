export type TRegister = {
  name: string;
  photo?: string;
  email: string;
  password: string;
  role?: "ADMIN" | "CUSTOMER";
};
