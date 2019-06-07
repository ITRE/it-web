<template>
  <div class="resource">
    <picture v-if="preview" class="preview" :data-alt="name">
      <source :srcset="'/images/'+preview+'.png'" type="image/png">
      <source :srcset="'/images/'+preview+'.webp'" type="image/webp">
      <img :src="'/images/'+preview+'.png'" :alt="name">
    </picture>
    <div class="files">
      {{name}} Downloads:
      <ul>
        <li v-for="file in files">
          <a :href="'/resources/'+file.link">{{file.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resource",
  props: {
    preview: String,
    name: String,
    alt: String,
    files: Array
  }
}
</script>

<style>
  .resource {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 20px;
  }
  .preview {
    display: block;
    width: 200px;
    height: auto;
  }
  .preview img {
    width: 100%;
  }
  .files {
    flex: 1;
    margin-left: 30px;
  }
  .files ul {
    margin: 5px 0;
  }
</style>
