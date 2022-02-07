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
    <div class="table">
      <h2>連絡先リスト</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
        <tr v-for="item in userLists" :key="item.id">
          <td>{{ item.id }}</td>
          <td><input type="text" v-model="item.name" /></td>
          <td><input type="email" v-model="item.email" /></td>
        </tr>
      </table>
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
      userLists: [],
    }
  },
  methods: {
    async register() {
      const sendData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/user/", sendData);
    },

    async getUser() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/user/"
      );
      this.userLists = resData.data.data;
    }
  }, //end methods
  created() {
    this.getUser();
  }
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