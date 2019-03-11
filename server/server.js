/**
 * Created by dong on 2019/3/11.
 */
const koa = require("koa2");
const Router =require("koa-router");
let server = new koa();

server.listen(" 9097");
let router = new Router();
let userRouter = new Router();
let companyRouter = new Router();
let adminRouter = new Router();
let company = new Router();
company.get("/a",async ctx=>{
    console.log("ctx", ctx);
    ctx.body="公司router";
});
let admin = new Router();
admin.get("/a",async ctx=>{
    ctx.body="个人中心router";
});
userRouter.get("/",ctx=>{
    ctx.body="userRouter";
});
userRouter.use("/company",company.routes());
userRouter.use("/admin",admin.routes());
router.use("/user",userRouter.routes());
router.use("/company",companyRouter.routes());
router.use("/admin",adminRouter.routes());
// userRouter.use(companyRouter,adminRouter);
server.use(router.routes());