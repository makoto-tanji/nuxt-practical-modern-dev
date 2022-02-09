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

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      userLists: [],
    }
  },
  methods:{
    async getUser() {
      const user = firebase.auth().currentUser;
      if(user !== null){
        this.$store.commit('updateUserExists', true);
        this.$store.commit('updateDisplayName', user.displayName);
        this.$store.commit('updateEmail', user.email);
      };
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

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
    margin-top: 50px;
  }
</style>