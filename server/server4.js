/**
 * Created by dong on 2019/3/12.
 */
const Koa = require("koa2");
const Router =require("koa-router");
const static =require("koa-static");
const path =require("path");
let server =new Koa();
server.listen("9098");
server.context.a ="hahaha"
server.use(static,"",{

});

let router = new Router();
router.get("/user/",async (ctx,next)=>{
    ctx.body=`拿到了`+ctx.a;
    console.log("参数",ctx.query);
    // await next();
});
server.use(router.routes());