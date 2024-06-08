import { TUser } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  return jwtDecode(token) as TUser;
};
