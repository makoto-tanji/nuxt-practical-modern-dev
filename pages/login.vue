<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/imgs/logo.png" class="img">
      <div class="header-right">
        <NuxtLink to="/register">新規登録</NuxtLink>
        <NuxtLink to="/login">ログイン</NuxtLink>
      </div>
    </div>
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
    }
  },
  methods: {
    login() {
    }
  } //end methods
}
</script>

<style scoped>
  input{
    width:300px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .header-right *{
    margin-right: 20px;
  }
</style>