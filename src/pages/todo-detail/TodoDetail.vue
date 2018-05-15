<style lang="scss" scoped >
.page-title {
  text-align: center;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="todo"></navbar>
  <div class="page-content">
    <h3 class="page-title">{{ infos.content }}の所在地！</h3>
    <!-- <div style="margin: 10px" v-for="(value, key) in infos" v-bind:key="value">{{ key }}: {{ value }}</div> -->
  </div>
  <div align="center">
    <iframe width="80%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" v-bind:src=MapSrc></iframe>
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
  props: {
    infos: [],
  },
  computed: {
    MapSrc() {
      return "http://maps.google.co.jp/maps?ll=" + this.infos.lat.toString() + "," + this.infos.lng.toString() + "&q=" + this.infos.lat.toString() + "," + this.infos.lng.toString() + "&output=embed&t=m&z=16"
    }
  },
};
</script>
