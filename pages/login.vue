<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
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
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      user: null,
      email: null,
      password: null,
      userLists: [],
    }
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/user/"
      );
      this.userLists = resData.data.data;
      //firebase
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/home')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    }
  } //end methods
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