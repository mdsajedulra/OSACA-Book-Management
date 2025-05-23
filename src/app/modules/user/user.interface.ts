import { Model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  role?: "admin" | "librarian" | "customer";
  status: "active" | "blocked";
}

export interface UserModel extends Model<IUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
