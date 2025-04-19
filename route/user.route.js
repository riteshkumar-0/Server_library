import express from "express";
import { signup, login, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", (req, res) => {
    res.render("home", {
        user: req.user,
    });
});
router.put('/profile/:id', updateUser);

export default router;