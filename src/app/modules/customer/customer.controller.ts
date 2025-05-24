import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { customerService } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
  const customer = req.body;
  const user = req.user;
  const updatedCustomer = {
    ...customer,
    email: user.email,
  }
  const result = await customerService.createCustomer(updatedCustomer, req.user);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

export const customerController = {
  createCustomer,
};
