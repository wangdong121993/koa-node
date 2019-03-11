/**
 * Created by dong on 2019/3/12.
 */
let Router = require("koa-router");
let company = require("./company");
let admin = require("./admin");


let userRouter = new Router();
userRouter.use("/company",company);
userRouter.use("/admin",admin);

module.exports = userRouter.routes();