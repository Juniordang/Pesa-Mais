import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./src/routers/router.js";
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.on("pronto", () => {
    app.listen(PORT, () => console.log("server is running http://localhost:3333"));
})
try {
    await mongoose.connect(process.env.CONNECTIONSTRING);
    console.log("banco conectado");
    app.emit("pronto");
} catch (e) {
    console.log(e);
}

