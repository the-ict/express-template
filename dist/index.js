import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import logger from "./utils/loggers.js";
// configure dotenv
dotenv.config();
// initialize express
const app = express();
// middlewares
app.use(helmet());
app.use(morgan("combined"));
app.use(cors({
    origin: "http://localhost:5000",
}));
// routes
app.get("/", (req, res) => {
    res.send("Working !");
});
// error handler
app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});
// start server
app.listen(3000, () => {
    logger.info("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map