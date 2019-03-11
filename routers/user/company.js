/**
 * Created by dong on 2019/3/11.
 */
let Router = require("koa-router");
let router = new Router();
router.get("/a",async ctx=>{
    ctx.body="公司router";
});
module.exports = router.routes();