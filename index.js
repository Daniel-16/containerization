import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 6000 || process.env.PORT;

app.get("/", (req, res) => {
  res
    .status(201)
    .json({ title: "Welcome to docker", body: "This is a docker test api" });
});

app.listen(PORT, () => {
  console.log("Port listening on", PORT);
});
