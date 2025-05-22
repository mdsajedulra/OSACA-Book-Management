import catchAsync from "../../utils/catchAsync";
import { authService } from "./auth.service";

const register = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authService.register(payload);
});

export const authController = {
    register
}