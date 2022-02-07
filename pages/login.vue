<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <div class="form-card">
      <h2>ログイン</h2>
      <div class="email">
        <input type="email" placeholder="メールアドレス" required v-model="email">
      </div>
      <div class="password">
        <input type="password" placeholder="パスワード" required v-model="password">
      </div>
      <button class="btn" @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      userLists: [],
    }
  },
  methods: {
    async login() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/user/"
      );
      this.userLists = resData.data.data;
    }
  } //end methods
}
</script>

<style scoped>
  input{
    width:300px;
  }
  .form-card{
  width: 350px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #000;
  margin: 100px auto 30px auto;
  padding: 20px 30px;
  border-radius: 10px;
}
.form-card *{
  margin-top: 10px;
}
</style>