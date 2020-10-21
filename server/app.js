const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const index = require("./routes/index");
const users = require("./routes/users");

//引入user路由
const user=require("./routes/user")

const koajwt = require("koa-jwt");

//解决跨域
const cors=require("koa-cors")
app.use(cors())
// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx,next) => {
  await next()
  const start = new Date()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.use(async (ctx,next)=>{
  return next().catch((err) => {
    if (err.status == 401) {
      ctx.status = 401;
      ctx.body = {
        code: "-2000",
        desc: "登录过期，请重新登录",
      };
    } else {
      throw err;
    }
  });
})

app.use(
  koajwt({
    secret: "123456",
  }).unless({
    path: [/^\/user\/regist/, /^\/user\/login/],
  })
);

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(user.routes(), user.allowedMethods());
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
