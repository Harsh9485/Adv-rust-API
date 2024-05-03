import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT || 3000,
  DB: process.env.DB || "mongodb://localhost:27017/test",
};

export const config = Object.freeze(_config);
