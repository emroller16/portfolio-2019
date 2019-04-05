<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>


export default {
  name: 'app',
};
</script>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: #613A43, // The primary color of your brand
  accent: #849974 // The secondary color of your brand
));

@import "~vue-material/dist/theme/all"; // Apply the theme

// @import url(https://fonts.googleapis.com/css?family=Poiret+One);
// @import url(https://fonts.googleapis.com/css?family=Didactic+Gothic);
@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);
@import url(https://fonts.googleapis.com/css?family=Material+Icons);


$primary-charcoal: #36384C;
$primary-fresh: #849974;
$primary-burgundy: #613A43;
$accent-petal:#E3BAB3;
$accent-cream:#E9DCCD;

body {
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Nunito Sans', sans-serif;
}

.md-theme-default a:not(.md-button) {
  color: $primary-fresh!important;
}

h1, h2, h3, h4, h5, h6, h7 {
  font-family: 'Questrial', serif;
}

  .md-app-toolbar {
    box-shadow: none!important;
    background-color: white!important;
  }

.sub-items {
  li:nth-child(even) {
    list-style-type: none;
  }
}



// p {
//   font-family: 'Didactic Gothic', sans-serif;
// }

</style>
