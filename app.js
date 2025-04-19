import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';
import bodyParser from "body-parser"

const app = express()
app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.resolve("./public")));


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import listRoutes from "./route/list.route.js"
import bookrequest from "./route/bookrequest.js";

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/lists", listRoutes);
app.use("/request", bookrequest)
export { app }

