/**
 * Created by dong on 2019/3/12.
 */
const Koa = require("koa2");
const Router =require("koa-router");
const path =require("path");
let server =new Koa();
server.listen("9098");
server.context.a ="hahaha"


let router = new Router();
router.get("/user/",async (ctx,next)=>{
    ctx.body=`拿到了`+ctx.a;
    console.log("参数",ctx.query);
    // await next();
});
router.get("/login",async (ctx,next)=>{
    // ctx.assert(ctx.query.user,400,"参数错误2");
    // ctx.redirect("/user")
    // ctx.attachment(path.resolve(__dirname,"server/server.js"))
    // if(!ctx.query.user){
    //     ctx.throw(400,"信息错误");
    // }
});
// router.get("/user/:id",async ctx=>{
//     ctx.body+=`拿到了${ctx.params.id}`;
//     console.log("参数",ctx.params);
// });
server.use(router.routes());