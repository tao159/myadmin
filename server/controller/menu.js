const path = require("path");
const fs = require("fs");

class menuModule {
  static menuList() {
   
    var file = path.join(__dirname, "./menList.json"); //文件
    let pro=new Promise((resolve, reject) => {
      fs.readFile(file, "utf-8", function(err, data) {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
    return pro
  }
}

// class menuController {
//   //获取menu数据
//   static async getMenuList(ctx) {
//     const req = ctx.request.body;
//     const token = ctx.headers.authorization;
//     if (token) {
//       console.log(req);
//       try {
//         // const query = await menuModule.menuList(req.mobileNo);
//         // console.log('query====',query)
//         if (!req.mobileNo) {
//           return (ctx.body = {
//             code: "-1",
//             desc: "参数错误",
//           });
//         } else {
//           var file = path.join(__dirname, "./menList.json");
//           await fs.readFile(file, "utf-8", function(err, data) {
//             if (!err) {
//               ctx.response.status = 200;
//               return (ctx.body = {
//                 code: 0,
//                 desc: "操作成功",
//                 data: [JSON.parse(data)],
//               });
//             } else {
//               console.log(err);
//             }
//           });
//           // await menuModule.menuList().then((res) => {
//           //   ctx.response.status = 200;
//           //   return ctx.body = {
//           //     code: 0,
//           //     desc: "操作成功",
//           //     data:[JSON.parse(res)],
//           //   };
//           // });
//         }
//       } catch (error) {
//         console.log("error---", error);
//         ctx.response.status = 416;
//         ctx.body = {
//           code: -1,
//           desc: "参数不齐全",
//         };
//       }
//     }
//   }
// }

class menuController {
  static async getMenuList(ctx) {
    const req = ctx.request.body;
    const token = ctx.headers.authorization;
    try {
      if (!req.mobleNo) {
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
        })
      }
    } catch (error) {
      console.log('error======',error)
      ctx.status = 401;
      return (ctx.body = {
        code: "-2222",
        desc: "登录过期，请重新登录",
      });
    }
  }
}

module.exports = menuController;
