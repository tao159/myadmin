//引入db配置
const db=require('../config/db')

//引入sequelize对象
const Sequelize=db.sequelize

// 引入数据表模型
const {User}=require('../module/user')

//引入jwt做token验证
const jwt=require('jsonwebtoken')

//解析token
const tools=require('../public/javascripts/tools')

//统一设置token有效时间，为了方便观察，设置为10s
const expireTime='10s'

//数据库操作类
class userModule {
    static async userRegist(data) {
        return await User.create({
            password: data.password,
            mobileNo: data.mobileNo
        })
    }

    static async getUserInfo(mobileNo) {
        return await User.findOne({
            where: {
                mobileNo
            }
        })
    }
}

//userController类
class userController{
    //用户注册
    static async create(ctx) {
        
        const req = ctx.request.body;

        if (req.mobileNo && req.password) {
            try {
                const query = await userModule.getUserInfo(req.mobileNo);
                
                if (query) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: -1,
                        desc: '用户已存在'
                    }
                } else {
                    const param = {
                        password: req.password,
                        mobileNo: req.mobileNo,
                        userName: req.mobileNo
                    }
                    const data = await userModule.userRegist(param);

                    ctx.response.status = 200;
                    ctx.body = {
                        code: 0,
                        desc: '用户注册成功',
                        userInfo: {
                            mobileNo: req.mobileNo
                        }
                    }
                }

            } catch (error) {
                console.log(error)
                ctx.response.status = 416;
                ctx.body = {
                    code: -1,
                    desc: '参数不齐全'
                }
            }
        }
    }

    //用户登录
    static async login(ctx){
        const req=ctx.request.body
        console.log(ctx.request.body);
        if(!req.mobileNo||!req.password){
           
            return ctx.body={
                code:'-1',
                msg:'用户名或密码不能为空'
            }
        }else{
            const data=await userModule.getUserInfo(req.mobileNo)
            if(data){
                if(data.password===req.password){
                    //生成token,验证登录有效期
                    const token=jwt.sign({
                        user:req.mobileNo,
                        password:req.password
                    },'123456',{expiresIn:expireTime});
                    const info={
                        createdAt:data.createdAt,
                        updatedAt:data.updatedAt,
                        mobileNo:data.mobileNo,
                        userId:data.userId
                    }
                    return ctx.body={
                        code:'0',
                        token:token,
                        userInfo:JSON.stringify(info),
                        desc:'登录成功'
                    }
                }else{
                    return ctx.body={
                        code:'-1',
                        desc:'用户密码错误'
                    }
                }
            }else{
                return ctx.body={
                    code:'-1',
                    desc:'该用户尚未注册'
                }
            }
        }
    }

    //获取用户信息
    static async getUserInfo(ctx){
        const req=ctx.request.body
        const token=ctx.headers.authorization
        if(token){
            try{
                const result=await tools.verToken(token)
                if(!req.mobleNo){
                    return ctx.body={
                        code:'-1',
                        desc:'参数错误'
                    }
                }else{
                    let data=await userModule.getUserInfo(req.mobileNo)
                    if(rq.mobileNo==data.mobileNo){
                        const info={
                            createdAt:data.createdAt,
                            updatedAt:data.updatedAt,
                            mobileNo:data.mobileNo,
                            userId:data.userId
                        }
                        return ctx.body={
                            code:'0',
                            userInfo:JSON.stringify(info),
                            desc:'获取用户信息成功'
                        }
                    }
                }
            }catch(error){
                ctx.status=401
                return ctx.body={
                    code:'-1',
                    desc:'登录过期，请重新登录'
                }
            }
        }else{
            ctx.status=401
            return ctx.body={
                code:'-1',
                desc:'登录过期，请重新登录'
            }
        }
    }
}

module.exports=userController