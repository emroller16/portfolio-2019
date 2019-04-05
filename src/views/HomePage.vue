<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <AppNav></AppNav>
      </md-app-toolbar>
      <md-app-content>
        <section class="intro">
          <div
            class="md-layout md-gutter main-content md-alignment-top-center"
            style="min-height:40vh"
          >
            <div class="intro-text">
              <h1 class="md-display-1" style="margin-bottom:0px!important;">
                Hey there! I'm
                <span class="accent-text">Emily Roller.</span>
              </h1>
              <br>
              <h1
                class="md-display-1"
                style="margin-top:0px!important"
              >Digital designer, front-end dabbler, and psychology nerd.</h1>
            </div>
          </div>
        </section>

        <section class="portfolio">
          <div class="md-layout md-alignment-top-center">
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-xsmall-size-100 md-layout portfolio-item md-alignment-center-center"
              v-for="item in items"
              :key="item.index"
            >
              <div>
                <p class="md-subtitle">{{item.type}}</p>
                <p class="md-headline">{{item.name}}</p>
                <md-button class="md-raised portfolio-button">
                  <router-link :to="item.link">Read more</router-link>
                </md-button>
              </div>
            </div>
          </div>
          <div class="md-layout md-alignment-top-center">
            <h3 class="md-title">
              <router-link to="/work">More projects</router-link>
            </h3>
          </div>
        </section>

        <section class="about">
          <div class="md-layout md-gutter main-content md-alignment-top-center">
            <div class="about-text">
              <h3 class="md-display-1">If I'm not at my computer, I'm probably
                <span class="accent-text">hiking</span>,
                <span class="accent-text">caffeinating</span>, or
                <span class="accent-text">baking</span>.
              </h3>
              <h3 class="md-title">I'd love to meet you! Hit me up on
                <a href>LinkedIn</a>.
              </h3>
            </div>
          </div>
        </section>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
//Global styles
$primary-charcoal: #36384c;
$primary-fresh: #849974;
$primary-burgundy: #613a43;
$accent-petal: #e3bab3;
$accent-cream: #e9dccd;
.md-app .md-content.md-theme-default {
  border: none !important;
  height: 100vh;
}

.md-toolbar.md-theme-default .md-title,
.md-toolbar.md-theme-default .md-display-1,
.md-toolbar.md-theme-default .md-display-2 {
  color: $primary-burgundy !important;
}

button.md-button .md-theme-default .md-active {
  text-transform: initial !important;
}

.main-content {
  margin: 70px 46px 80px 46px;
}

.md-app-content {
  padding: 0 !important;
}

// Intro section styles
.intro-text {
  max-width: 550px;
  h1 {
    font-weight: 300;
  }
}

.accent-text {
  color: $primary-burgundy;
  font-weight: 400;
}

// Portfolio section styles
.portfolio {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.portfolio-item {
  min-height: 400px;
  .portfolio-button {
    @media screen and (min-width: 960px) {
      visibility: hidden;
      transition-timing-function: ease-in;
      margin-left: 0 !important;
      a {
        text-decoration: none !important;
      }
    }
  }
  &:hover .portfolio-button {
    visibility: visible;
  }
  &:nth-child(1) {
    background-color: $accent-cream;
    &:hover {
      background-color: darken($accent-cream, 10%);
    }
  }
  &:nth-child(2) {
    background-color: $primary-charcoal;
    color: white;
    &:hover {
      background-color: lighten($primary-charcoal, 10%);
    }
  }
  &:nth-child(3) {
    background-color: $primary-fresh;
    color: white;
    &:hover {
      background-color: darken($primary-fresh, 10%);
    }
  }
  &:nth-child(4) {
    background-color: $accent-petal;
    &:hover {
      background-color: darken($accent-petal, 10%);
    }
  }
}

.md-app.md-flexible .md-display-1,
.md-display-2 {
  position: initial !important;
}

// About section
.about-text {
  max-width: 550px;
}

// .portfolio-section {
//   .portfolio-item {
//     height: 300px;
//     margin: 24px 16px;
//     max-width: 33%;
//     margin-bottom: 80px;
//   }
//   img {
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 200px;
//     height: auto;
//   }
//   .cru-image {
//     max-width: 150px !important;
//   }
//   .md-button {
//     margin-left: 28%;
//   }
//   .portfolio-inner {
//     height: 150px;
//   }
//   .portfolio-text {
//     display: block;
//     padding-left: 30%;
//     margin-top: 32px;
//     p:first-child {
//       font-weight: 500;
//       color: rgba(0, 0, 0, 0.54);
//       padding-top: 16px;
//       margin-bottom: 0px;
//     }
//     p:last-child {
//       font-weight: 400;
//       font-size: 20px;
//       color: rgb(0, 0, 0);
//       padding-top: 0px;
//       margin-top: 0px;
//       margin-bottom: 0px;
//     }
//   }
// }
// .introduction-section {
//   margin: 70px 46px 80px 46px;
//   line-height: 1.7;
//   max-width: 60%;
// }
// .spacer {
//   width: 30px;
//   display: inline-block;
// }
</style>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import AppNav from '../shared/appNav.vue';

Vue.use(VueMaterial);

export default {
  name: 'HomePage',
  data: () => ({
    items: [
      {
        name: 'Katie Arnold Photography',
        type: 'Web Design',
        link: '/katie-arnold',
      },
      {
        name: 'Cru at UConn',
        type: 'Web Design',
        link: '/cru-uconn',
      },
      {
        name: 'Amistad',
        type: 'Web Design',
        link: '/amistad',
      },
      {
        name: 'A case in meta: Portfolio',
        type: 'Web development',
        link: '/portoflio',
      },
    ],
  }),
  methods: {},
};
</script>
