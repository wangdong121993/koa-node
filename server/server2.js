/**
 * Created by dong on 2019/3/11.
 */
const koa = require("koa2");
const Router =require("koa-router");
let server = new koa();

server.listen(" 9097");


let router =new Router();
router.get("/",ctx=>{
   ctx.body = "主站";
});
router.use("/user",require("./../routers/user/index"))

server.use(router.routes());