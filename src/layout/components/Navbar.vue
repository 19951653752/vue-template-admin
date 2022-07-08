<template>
  <div class="navbar">
    <div class="left">
      K军模拟训练与评估系统
    </div>
    <div class="right">
      <div @click="SignOut"><i class="el-icon-switch-button"></i>注销</div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    SignOut(e) {
      e.preventDefault();
      const that = this;
      that
        .$confirm("此操作将退出登录, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(async() => {
          await that.$store.dispatch('user/FedLogOut')
          that.$router.push('/login')
        })
        .catch(() => { });
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: fixed;
  top: 0;
  background: #fff;
  margin-left: -210px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  z-index: 1000;

  .left {
    width: 210px;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    line-height: 50px;
    padding-left: 10px;
    background: #3476ff;
  }

  .right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    color: #3476ff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    .el-icon-switch-button {
      margin-right: 7px;
      font-weight: 800;
    }
  }
}
</style>
