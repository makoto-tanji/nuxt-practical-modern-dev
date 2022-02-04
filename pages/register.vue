<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <div class="form-card">
      <h2>新規登録</h2>
      <div class="name">
        <input type="text" placeholder="ユーザーネーム" required v-model="name">
      </div>
      <div class="email">
        <input type="email" placeholder="メールアドレス" required v-model="email">
      </div>
      <div class="password">
        <input type="password" placeholder="パスワード(6文字以上)" required v-model="password">
      </div>
      <button class="btn" @click="register">新規登録</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
    }
  }, //end methods
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