<style lang="scss" scoped >
.center {
  text-align: center;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="ehama-todo"></navbar>
  <div class="page-content center">
    <v-ons-button @click="goRegister" modifier="outline" style="margin: 15px; padding: 0 60px">登録</v-ons-button>
    <v-ons-list> 
      <v-ons-list-header>
        <v-ons-icon icon="ion-favorite, material:md-favorite"></v-ons-icon>
        いきたいとこリスト
      </v-ons-list-header>
      <v-ons-list-item v-for="(item,index) in arr" v-bind:key="item.id" @click="goDetail(index)">{{ item.content }}</v-ons-list-item>
    </v-ons-list>
  </div>
</v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import TodoDetailPage from '../../pages/todo-detail/TodoDetail';
import TodoRegisterPage from '../../pages/todo-register/TodoRegister';

export default {
  name: 'posts-page',
  components: {
    Navbar,
  },
  data() {
    return {
    arr: [],      
    };
  },
  created(){
    this.getApi();

    window.addEventListener('close-register', (e) => {
      this.arr = [];
      this.getApi();
    }, false);
  },
  methods: {
    getApi(){
      this.axios.get('http://59.157.6.140:3001/todos')
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {          
          this.arr.push(res.data[i]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },
    goDetail(id) {
      this.$emit('push-page', {
        extends: TodoDetailPage,
        onsNavigatorProps: {
          infos: this.arr[id],
        }
      })
    },
    goRegister() {
      this.$emit('push-page', TodoRegisterPage)
    },
  },
};
</script>
