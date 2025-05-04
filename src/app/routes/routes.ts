import { Router } from "express";

const router = Router()

const moduleRoutes = [
    {
        path: "/blogs",
        route:""
    },
    {
        path: "/auth",
        route:"fdsf"
    }
]

moduleRoutes.forEach((route)=> router.use(route.path, route.route))

export default router