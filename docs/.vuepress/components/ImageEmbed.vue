<template>
  <picture :class="'img-preview '+classes" :data-alt="name">
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
  .img-preview {
    display: block;
    margin: 20px;
    width: 100%;
  }
  .img-preview.left,
  .img-preview.right {
    max-width: 50%;
  }
  .img-preview.left {
    float: left;
  }
  .img-preview.right {
    float: right;
  }
  .img-preview img {
    width: 100%;
  }
  h2,
  h3 {
    clear: both;
  }
</style>
