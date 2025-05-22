import { Router } from "express";
import bookRoute from "../modules/book/book.route";
import authRouter from "../modules/auth/auth.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
