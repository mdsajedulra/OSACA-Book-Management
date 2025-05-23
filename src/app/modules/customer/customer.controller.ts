import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomer(req.body);
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
