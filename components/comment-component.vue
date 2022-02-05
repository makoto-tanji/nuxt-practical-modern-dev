<template>
  <div class="container">
    <div class="status">
      <h2 class="username">test</h2>
      <img src="@/assets/imgs/heart.png" class="img small-img" title="イイね">
      <p>0</p>
      <img src="@/assets/imgs/cross.png" class="img small-img" title="削除">
      <NuxtLink to="/comment">
        <img src="@/assets/imgs/detail.png" class="img small-img" title="コメントする">
      </NuxtLink>
    </div>
    <div class="comment">
      <p>test-comment</p>
    </div>
  </div>
</template>

<style scoped>
  .container{
    width: 100%;
    border: 1px solid #fff;
  }
  .status{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
  .status *{
    margin: 0px 10px;
  }
  .comment{
    margin: 10px 0 10px 10px;
  }
</style>