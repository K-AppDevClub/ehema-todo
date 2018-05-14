<style lang="scss" scoped >
.page-title {
  text-align: center;
}
</style>
<template>
<v-ons-page>
  <navbar navType="back" msg="todo"></navbar>
  <div class="page-content">
    <h3 class="page-title">
      detail
    </h3>
    <p>ここにid,uid,content,lat,lng表示</p>
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
};
</script>
