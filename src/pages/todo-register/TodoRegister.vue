<style lang="scss" scoped >
.page-title {
  text-align: center;
}
.create-button {
	margin: 0 10px;
	font-size: 13px;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="todo"></navbar>
  <div class="page-content">
    <h3 class="page-title">register</h3>
    <v-ons-input style="border-bottom: 1px solid #BDBDBD; margin: 0 20px" placeholder="どこにいきたい" float v-model="name"></v-ons-input>
    <v-ons-button @click="addData" modifier="outline" class="create-button">追加</v-ons-button>	
		<br><br>
		<div id="visi" style="visibility:hidden; margin: 0 20px; color: red">{{ message }}</div>	
		<!-- <div class="right">Hello {{ name || 'anonymous' }}!</div> -->
  </div>
</v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'posts-page',
  components: {
    Navbar,
	},
	data() {
    return {
			name: '',
			message: '',
    };
	},
	methods: {
		addData(){
			if(this.name == ''){
				this.message = '行きたいところを入力してください。';
			}else{
				// 入力情報をサーバに送信
				this.message = this.name + ' を追加しました。';
			}
			document.getElementById("visi").style.visibility="visible";
		},
	},
};
</script>
