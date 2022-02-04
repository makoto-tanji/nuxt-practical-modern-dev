<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
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