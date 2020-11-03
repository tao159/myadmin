<template>
  <el-row class="loginWrapper">
    <el-col :span="24">
      <div class="formWrapper">
        <h3>系统登录</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="mobileNo">
            <el-input
              placeholder="用户名"
              v-model="ruleForm.mobileNo"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              v-model="ruleForm.password"
              prefix-icon="el-icon-s-goods"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="el-btn-wrapper">
            <el-button type="primary" @click="loginSystem('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { loginAPI } from "@/api/login";
import { mapMutations } from "vuex";
import "@/styles/variables.scss";
export default {
  data() {
    return {
      ruleForm: {
        mobileNo: "15901525103",
        password: "123456",
      },
      rules: {
        mobileNo: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapMutations("user", {
      setMenuList: "SET_MENU_LIST",
      setToken:"SET_TOKEN",
      setUserInfo:"SET_USER_INFO"
    }),
    loginSystem(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginAPI(this.ruleForm).then(({ code, data }) => {
            if (code === 0) {
              this.setMenuList(data.menuList.result);
              this.setToken(data.token);
              this.setUserInfo(data.mobileNo)
              this.$router.replace({ name: "home" });
            }
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.loginWrapper {
  width: 100%;
  height: 100%;
  .el-col {
    display: flex;
    justify-content: center;
    // align-items: center;
    background: $loginBg;
    height: 100%;
    .formWrapper {
      width: 400px;
      margin-top: 200px;
      h3 {
        text-align: center;
        margin: 40px 0;
        font-size: 24px;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
      }
      .el-form-item {
        margin-bottom: 22px;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.1);
        .el-form-item__content {
          .el-input__inner {
            height: 40px;
            background: transparent;
            border: none;
            color: #fff;
          }
        }
      }
      .el-btn-wrapper {
        border: none !important;
        width: 100% !important;
        button {
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
