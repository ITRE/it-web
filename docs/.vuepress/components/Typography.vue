<template>
  <div class="typography">
    <div class="font" v-for="font in fonts">
      <div class="fontFace" :style="{fontFamily:font.name}">
        <div class="large">Aa</div>
        <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p>1 2 3 4 5 6 7 8 9 0</p>
      </div>
      <div class="fontSpecs" :style="{fontFamily:font.name}">
        <div class="fontName">{{font.name}}</div>
        <div class="fontSizes" :style="{fontFamily:font.name, fontSize: font.size + 'px'}">
          <p>Body Size</p>
          <p>{{font.size * .75}}pt / {{font.size}}px / {{font.size / 16}}em</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Typography",
  props: {
    fonts: Array
  }
}
</script>

<style>
  .typography {
    background-color: #f4f4f4;
    margin: 20px auto;
    padding: 20px;
  }
  .font {
    align-items: center;
    display: flex;
    margin: 0 auto 30px;
  }
  .fontFace {
    flex: 1;
    font-size: 1em;
  }
  .fontFace .large {
    font-size: 3em;
    font-weight: bold;
  }
  .fontSpecs {
    margin-left: 10px;
    width: 150px;
  }
  .fontName {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: .5em;
  }
  .font p {
    margin: 0;
  }


</style>
