<template>
  <div class="login">
    <div>
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
       <el-button @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
