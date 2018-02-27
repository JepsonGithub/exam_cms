<template>
  <div class="numberbox">
    <mt-button class="minus" @click="minus">-</mt-button>
    <input class="number" type="number" v-model="num">
    <mt-button class="add" @click="add">+</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    minus() {
      if ( this.num <=0 ) return
      this.num--;
    },
    add() {
      this.num++;
    }
  }
}
</script>

<style scoped>
.numberbox {
  height: 30px;
  line-height: 28px;
  font-size: 0;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  padding: 0 10px;
}
.minus {
  width: 40px;
  height: 100%;
  vertical-align: bottom;
}
.add {
  width: 40px;
  height: 100%;
  vertical-align: bottom;
}
.number {
  width: 40px;
  height: 100%;
  border: 1px solid #ccc;
  vertical-align: bottom;
  font-size: 16px;
  overflow: hidden;
  padding: 0 3px;
  text-align: center;
}
</style>