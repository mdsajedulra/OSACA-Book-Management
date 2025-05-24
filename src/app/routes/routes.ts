import { Router } from "express";
import bookRoute from "../modules/book/book.route";
import authRouter from "../modules/auth/auth.route";
import customerRouter from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/book",
    route: bookRoute,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/customer",
    route: customerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
