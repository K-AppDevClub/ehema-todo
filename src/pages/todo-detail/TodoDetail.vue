<style lang="scss" scoped >
.page-title {
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
  <navbar navType="back" msg="todo"></navbar>
  <v-ons-popover cancelable
    :visible.sync="popoverVisible"
    :target="popoverTarget"
    :direction="popoverDirection"
    :cover-target="coverTarget"
  >
    <!-- aaaaaaaa -->
    <div class="popover">{{ infos.content }}</div>
  </v-ons-popover>
  <div class="page-content">
    <h3 class="page-title">{{ infos.content }}の所在地！</h3>
    <!-- <div style="margin: 10px" v-for="(value, key) in infos" v-bind:key="value">{{ key }}: {{ value }}</div> -->
  </div>
  <div align="center">
    <GmapMap
      :center="{lat:infos.lat, lng:infos.lng}"
      :zoom="16"
      map-type-id="roadmap"
      style="width: 80%; height: 400px"
    >
      <GmapMarker
        :position="{lat:infos.lat, lng:infos.lng}"
        :clickable="true"
        :draggable="true"
        @click="showPopover($event, 'up')"
      />
    </GmapMap>

    <!-- <iframe width="80%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" v-bind:src=MapSrc></iframe> -->
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
  methods: {
    Alert() {
      this.$ons.notification.alert('場所を入力してください');
    },
    toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    },
    showPopover(event, direction, coverTarget = false) {
      console.log(event)
      this.popoverTarget = event.Ia;
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
      this.popoverVisible = true;
    },
  },
  data() {
    return {
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: 'up',
      coverTarget: false,
    }
  },
  computed: {
    MapSrc() {
      return "http://maps.google.co.jp/maps?ll=" + this.infos.lat.toString() + "," + this.infos.lng.toString() + "&q=" + this.infos.lat.toString() + "," + this.infos.lng.toString() + "&output=embed&t=m&z=16"
    }
  },
};
</script>
