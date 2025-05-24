import { JwtPayload } from "jsonwebtoken";
import { ICustomer } from "./customer.interface";
import { customerSchema } from "./customer.model";

const createCustomer = async (customer: ICustomer, user: JwtPayload) => {
  console.log(user);
  const result = await customerSchema.create(customer);
  return result;
};

export const customerService = {
  createCustomer,
};
