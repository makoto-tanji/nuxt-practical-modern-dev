<template>
  <div class="container">
    <h2>コメント画面</h2>
    <div class="comment-card">
      <div class="status">
        <h2 class="username">{{comment.user_id}}</h2>
        <img
          v-if="heartIsClicked"
          @click="clickHeart(item)"
          src="@/assets/imgs/heart-pink.png"
          class="img small-img"
          title="イイね解除"
        >
        <img
          v-else
          @click="clickHeart()"
          src="@/assets/imgs/heart.png"
          class="img small-img"
          title="イイね"
        >
        <p>{{ comment.good_count}}</p>
        <img
          src="@/assets/imgs/cross.png"
          class="img small-img"
          title="削除"
          @click="deleteComment(comment.id)"
        >
        <img src="@/assets/imgs/detail.png" class="img small-img" title="コメントする" @click="transitionComment(item.id)">
      </div>
      <div class="comment">
        <p>{{ comment.content }}</p>
      </div>
    </div>
    <!-- end comment-card -->
    <p>返信コメント</p>
    <div class="re-comment-lists">
      <div v-for="item in reCommentLists" :key="item.id" class="re-comment">
        <p>{{item.user_id}}</p>
        <p>{{item.content}}</p>
      </div>
    </div>
    <div class="re-comment-form">
      <input type="text" placeholder="コメントする" required v-model="content">
      <button class="btn share-btn" @click=storeReComment>コメント</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main-layout',
  data() {
    return {
      comment: "",
      reCommentLists:[],
      content: "",
    }
  },
  methods: {
    async getComment() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/mainComment/" + this.$route.params.id
      );
      this.comment = resData.data.data[0];
      const resReComment = await this.$axios.get(
        "http://127.0.0.1:8000/api/reComment/"
      );
      this.reCommentLists = resReComment.data.data;
    },
    async storeReComment(){
      if(!this.content){
        alert('コメントが入力されていません。')
        return
      }
      const sendData = {
        user_id: this.$store.state.displayName,
        content: this.content,
      }
      await this.$axios.post("http://127.0.0.1:8000/api/reComment/", sendData);
      location.reload();
    }
  },
  mounted() {
    this.getComment();
  }
}
</script>

<style scoped>
  .container >*{
    border: 1px solid #fff;
    padding: 10px;
  }
  .comment-card{
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
  .re-comment{
    border-bottom: 1px solid white;
    box-sizing: border-box;
  }
  .re-comment-form{
    border: none;
  }
  input{
  width:60vw;
  font-size:20px;
  line-height: 30px;
  color: #fff;
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgb(23, 32, 42);
  }
</style>