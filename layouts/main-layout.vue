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
      // const resData = this.$axios.get(
      //   "http://127.0.0.1:8000/api/user/"
      // );
      // this.userLists = resData.data.data;
      // for (let i = 0; i<this.userLists.length; i++){
      //   if(this.$store.state.displayName === this.userLists[i].name){
      //     this.$store.commit('updateUserId', this.userLists[i].id);
      //   }
      // }
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