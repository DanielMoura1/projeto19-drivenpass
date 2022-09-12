import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import router from './routers/index.js';
var server = express();
server.use(express.json());
server.use(cors());
server.use(router);
//server.listen(5000, () => console.log(`
//    Server running on port ${5000}.
//`));
server.listen(process.env.PORT, function () { return console.log("\n    Server running on port ".concat(process.env.PORT, ".\n")); });
