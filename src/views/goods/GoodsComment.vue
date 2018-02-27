<template>
  <div class="goodsComment">
    <comment :newsid="this.$route.params.goodsid "></comment>
  </div>
</template>

<script>
import comment from "@/components/comment/Comment"

export default {
  data() {
    return {

    }
  },
  components: {
    comment
  }
}
</script>

<style>
.goodsComment {
  padding: 10px;
}
</style>