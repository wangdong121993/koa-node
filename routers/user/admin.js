/**
 * Created by dong on 2019/3/12.
 */
let Router = require("koa-router");
let router = new Router();
router.get("/a",async ctx=>{
    ctx.body="个人中心router";
});
module.exports = router.routes();