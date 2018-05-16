<style lang="scss" scoped >
.centering {
  text-align: center;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="todo"></navbar>
  <div class="page-content centering">
    <h3 style="margin-bottom: 30px">register</h3>
		<gmap-autocomplete
          placeholder="行きたいスポットを入力してください。"
          style="font-size:15px; margin: 5px; width:40%"
          :value="course.content"
          @place_changed="setPlace"
          :options="{
            bounds: {north: 45, south: 20, east: 153, west: 122},
            strictBounds: true
          }">
		</gmap-autocomplete><br><br>		
		<div id="visi" style="visibility:hidden; margin: 5px; color: red">{{ message }}</div>
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
			message: '',
			course: {
        content: '',
				lat: '',
				lng: '',
				user_id: Math.floor(Math.random() * 100000),
        thumbnail: '',
      },
    };
	},
	methods: {
		setPlace(place) {												
				this.course.content = place.name;
				this.course.lat = place.geometry.location.lat();
				this.course.lng = place.geometry.location.lng();				

				this.axios.post('http://59.157.6.140:3001/todos', {
        todo: this.course,
				})
				.then(res => {
					this.message = this.course.content + ' を追加しました。';
					document.getElementById("visi").style.visibility="visible";

					var event = new Event('close-register');
					window.dispatchEvent(event);
					// this.$ons.notification.alert('プランを作成しました');
				});

		},
	},
};
</script>
