const path = require("path");
const fs = require("fs");

class menuModule {
  static async menuList() {
    // console.log(t)
    var file = path.join(__dirname, "./menList.json"); //文件路径，__dirname为当前运行js文件的目录
    return new Promise((resolve, reject) => {
      fs.readFile(file, "utf-8", function(err, data) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  }
}

class menuController {
  //获取menu数据
  static async getMenuList(ctx) {
    const req = ctx.request.body;
    const token = ctx.headers.authorization;
    if (token) {
      try {
        // const query = await menuModule.menuList(req.mobileNo);
        // console.log('query====',query)
        if (!req.mobileNo) {
          return (ctx.body = {
            code: "-1",
            desc: "参数错误",
          });
        } else {
          await menuModule.menuList().then((res) => {
            ctx.response.status = 200;
            return ctx.body = {
              code: 0,
              desc: "操作成功",
              data:[JSON.parse(res)],
            };
          });
        }
      } catch (error) {
        console.log("error---", error);
        ctx.response.status = 416;
        ctx.body = {
          code: -1,
          desc: "参数不齐全",
        };
      }
    }
  }
}

module.exports = menuController;
