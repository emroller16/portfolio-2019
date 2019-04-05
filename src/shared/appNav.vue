<template>
  <div class="md-toolbar-row">
    <div class="md-toolbar-section-start">
      <span class="md-title">
        <router-link to="/" class="logo">Emily Roller</router-link>
      </span>
    </div>

    <div class="md-toolbar-section-end">
      <md-tabs md-sync-route>
        <md-tab md-label="work" to="/work">
        </md-tab>
        <md-tab md-label="about"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<style lang="scss">
//Global styles
$primary-charcoal: #36384c;
$primary-fresh: #849974;
$primary-burgundy: #613a43;
$accent-petal: #e3bab3;
$accent-cream: #e9dccd;

.md-theme-default a:not(.md-button) .logo {
  text-decoration: none !important;
  color: $primary-burgundy !important;

  &:hover {
    color: $primary-fresh !important;
    text-decoration: none !important;
  }
}
</style>

<script>
import VueRouter from 'vue-router';
import routes from '../routes';
import HomePage from '../views/HomePage.vue';

export default {
  name: 'AppNav',
};
</script>
