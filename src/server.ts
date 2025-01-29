import express, { Request, Response } from "express";
import cors from "cors";

import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

const currentDate = new Date();
const isoTimestamp = currentDate.toISOString();

app.get("/api/info", (req: Request, res: Response) => {
  try {
    const info = {
      email: "gakiiviolet1@gmail.com",
      current_datetime: isoTimestamp,
      github_url: "https://github.com/G-Gakii/dev-info-api",
    };
    res.status(200).json(info);
    return;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unexpected error occurred.Please try again" });
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
