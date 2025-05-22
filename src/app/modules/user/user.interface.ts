export interface IUser {
  email: string;
  password: string;
  role: "admin" | "librarian" | "customer";
  status: "active" | "blocked";
}
