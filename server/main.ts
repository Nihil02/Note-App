import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

//Extracting the credentials from the .env file
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(router)

//Start server
app.listen(port, () => {
  console.log("Running in " + port);
});
