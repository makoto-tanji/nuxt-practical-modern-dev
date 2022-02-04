<template>
  <div class="main-container">
    <div class="left-container">
      <SidebarComponent></SidebarComponent>
    </div>
    <div class="right-container">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
  .main-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .left-container{
    width: 25vw;
    margin-top: 20px;
  }
  .right-container{
    width: 70vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
  }
</style>