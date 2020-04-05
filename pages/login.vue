<template>
  <div>
    <h2>用户登录</h2>
    <el-input v-model="user.username"></el-input>
    <el-input type="password" v-model="user.password"></el-input>
    <el-button @click="onLogin">登录</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "blank",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      loginHandle: "user/login"
    }),
    onLogin() {
      this.$store.dispatch("user/login", this.user).then(ok => {
        console.log("ok", ok);
        // 登录成功重定向
        if (ok) {
          const redirect = this.$route.query.redirect || "/";
          this.$router.push(redirect);
        }
      });
    }
    // onLogin() {
    //   // console.log("========", this);
    //   this.loginHandle(this.user).then(res => {
    //     console.log("========", res);
    //   });
    // }
  }
};
</script>
