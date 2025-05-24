import { Router } from "express";
import { customerController } from "./customer.controller";
import auth from "../../middleware/auth";

const customerRouter = Router();

customerRouter.post("/", auth("customer"), customerController.createCustomer);

export default customerRouter;
