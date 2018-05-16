<style lang="scss" scoped >
.center {
  text-align: center;
}
.popover {
  text-align: center;
  height: 100px;
  line-height: 100px;
  width: 100%;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="ehama-todo"></navbar>
  <!-- <v-ons-popover cancelable
    :visible.sync="popoverVisible"
    :target="popoverTarget"
    :direction="popoverDirection"
    :cover-target="coverTarget"
  >
    <div class="popover">{{ mapIndex.content }}</div>
  </v-ons-popover> -->
  <div class="page-content center">
    <v-ons-button @click="goRegister" modifier="outline" style="margin: 15px; padding: 0 60px">登録</v-ons-button>
    <center><GmapMap
      :center="{lat:31.5699, lng:130.543}"
      :zoom="14"
      map-type-id="roadmap"
      style="width: 50%; height: 200px"
    >
      <GmapMarker
        :key="index"
        v-for="(infos, index) in arr"
        :position="{lat:infos.lat, lng:infos.lng}"
        :clickable="true"
        :draggable="true"
        @click="showPopover($event, 'up', index)"
      />
    </GmapMap></center>
    <v-ons-list> 
      <v-ons-list-header>
      <v-ons-icon icon="ion-favorite, material:md-favorite"></v-ons-icon>
        いきたいとこリスト
      </v-ons-list-header>
      <v-ons-list-item v-for="(item,index) in arr" v-bind:key="item.id" @click="goDetail(index)">
        {{ item.content }}
        <div class="right">
          <v-ons-button modifier="quiet" @click="remove(index,item.id);$event.stopPropagation()">
            <v-ons-icon icon="md-close"></v-ons-icon>
          </v-ons-button>
        </div>
      </v-ons-list-item>
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
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: 'up',
      coverTarget: false,
      currentIndex: 1,
    };
  },
  created(){
    this.getApi();

    window.addEventListener('close-register', (e) => {
      this.arr = [];
      this.getApi();
    }, false);
  },
  computed: {
    mapIndex() {
      return this.arr[this.currentIndex]
    },
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
    showPopover(event, direction, index, coverTarget = false) {
      console.log(event)
      console.log(index)
      this.currentIndex = index;
      this.popoverTarget = event.Ia;
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
      this.popoverVisible = true;
    },
    goRegister() {
      this.$emit('push-page', TodoRegisterPage)
    },
    remove(index,id){
      this.arr.splice(index,1);

      this.axios.delete(`http://59.157.6.140:3001/todos/${id}`)
      .then((res) => {
        console.log(`id : ${id} のデータを削除しましたった。`);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
