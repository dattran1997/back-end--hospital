import express from "express";
import homeController from "../controllers/homeController"
import userController from "../controllers/UserController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/crud", homeController.getCRUD)

    router.post('/api/login', userController.handleLogin)

    return app.use("/", router);
}

module.exports = initWebRoutes;