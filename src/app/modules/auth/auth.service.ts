import { IUser } from "../user/user.interface";
import userModel from "../user/user.model";

const register = async (payload: IUser) => {
  const user = await userModel.create(payload);
};


export  const authService = {
    register
}