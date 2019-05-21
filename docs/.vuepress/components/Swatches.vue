<template>
  <div class="swatches">
    <div class="swatch" v-for="color in colors">
      <div class="color" v-bind:style="{backgroundColor: color}"></div>
      {{ color }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Swatches",
  props: {
    colors: Array
  }
}
</script>

<style>
  .swatches {
    display: flex;
    flex-flow: wrap row;
    margin: 20px auto;
  }
  .color {
    border-radius: 25px;
    height: 100px;
    margin: 0 auto 10px;
    width: 100px;
  }
  .swatch {
    font-weight: bold;
    margin: 0 10px;
    max-width: 100px;
    text-align: center;
  }
</style>
