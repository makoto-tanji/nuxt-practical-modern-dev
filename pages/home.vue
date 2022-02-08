<template>
  <div class="container">
    <h2>ホーム</h2>
    <div v-for="item in commentLists" :key="item.id" class="comment-list">
      <div class="comment-card">
        <div class="status">
          <h2 class="username">{{item.user_id}}</h2>
          <img 
            v-if="heartIsClicked"
            @click="clickHeart(item)"
            src="@/assets/imgs/heart-pink.png"
            class="img small-img"
            title="イイね解除"
          >
          <img
            v-else
            @click="clickHeart(item)"
            src="@/assets/imgs/heart.png"
            class="img small-img"
            title="イイね"
          >
          <p>{{ item.good_count}}</p>
          <img
            src="@/assets/imgs/cross.png"
            class="img small-img"
            title="削除"
            @click="deleteComment(item.id)"
          >
          <img src="@/assets/imgs/detail.png" class="img small-img" title="コメントする" @click="transitionComment(item.id)">
        </div>
        <div class="comment">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <!-- end v-for -->
  </div>
</template>

<script>
export default {
  layout: 'main-layout',
  data() {
    return {
      commentLists: [],
      heartIsClicked: false,
    }
  }, //end data
  methods: {
    async getComments() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/mainComment/"
      );
      this.commentLists = resData.data.data;
    },
    async deleteComment(id){
      await this.$axios.delete("http://127.0.0.1:8000/api/mainComment/" + id);
      this.getComments();
    },
    async clickHeart(item){
      if(this.heartIsClicked){
        this.heartIsClicked = false;
      } else {
        this.heartIsClicked = true;
      }
    },
    transitionComment(id){
      const url = "/comments/" + id;
      this.$router.replace(url);
    }
  }, //end methods
  created() {
    this.getComments();
  }
}
</script>

<style scoped>
  .comment-list{
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