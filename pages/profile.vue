<template>
  <div class="container">
    <h2>登録情報</h2>
    <div class="user-info">
      <p>ユーザー名：{{$store.state.displayName}}</p>
      <p>メールアドレス：{{$store.state.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main-layout'
}
</script>

<style scoped>
  .user-info *{
    margin-top: 15px;
  }
</style>