<template>
  <div class="container">
    <h1>仮登録完了</h1>
    <p>仮登録が完了しました。メールをご確認ください。</p>
    <!-- <button class="btn" @click="$router.push('/')">戻る</button> -->
    <NuxtLink to="/login">ログインする</NuxtLink>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }
</style>