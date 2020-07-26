import { config } from "./config"
import express from "express";
import http from "http";
import middleware from "./middleware";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

const server = http.createServer(router);

server.listen(config.port, () =>
    console.log(`Server is running http://localhost:${config.port}...`)
);