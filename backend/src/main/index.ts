import express from "express";
import routes from "./config/routes";
import cors from "cors";

const app = express();

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
app.use(express.json());
routes(app);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server runnit at: ${Port} `);
});
