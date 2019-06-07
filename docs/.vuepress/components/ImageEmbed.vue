<template>
  <picture :class="'preview '+classes" :data-alt="name">
    <source :srcset="'/images/'+preview+'.png'" type="image/png">
    <source :srcset="'/images/'+preview+'.webp'" type="image/webp">
    <img :src="'/images/'+preview+'.png'" :alt="name">
  </picture>
</template>

<script>
export default {
  name: "ImageEmbed",
  props: {
    preview: String,
    name: String,
    classes: String
  }
}
</script>

<style>
  .preview {
    display: block;
    margin: 20px;
    width: 100%;
  }
  .preview.left,
  .preview.right {
    max-width: 50%;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .preview img {
    width: 100%;
  }
  h2,
  h3 {
    clear: both;
  }
</style>
