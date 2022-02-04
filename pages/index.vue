<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/imgs/logo.png" class="img">
      <div class="header-right">
        <NuxtLink to="/register">新規登録</NuxtLink>
        <NuxtLink to="/login">ログイン</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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