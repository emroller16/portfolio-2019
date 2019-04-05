<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar>
        <AppNav></AppNav>
      </md-app-toolbar>

      <md-app-content>
        <div class="inner-portfolio-container">

          <div class="md-layout md-gutter portfolio-header">
            <div class="md-layout-item md-size-60 md-small-size-100">
              <h3 class="md-display-3">Personal Portfolio</h3>
              <h3 class="md-display-1">A case in meta</h3>
              <p class="md-headline">
                Lorem ipsum dolor amet pour-over irony VHS direct trade yuccie chillwave shoreditch meditation green juice snackwave hell of pinterest venmo woke meh. Cronut plaid cloud bread health goth shabby chic, before they sold out keytar butcher copper mug vape
                tumeric vinyl drinking vinegar banh mi. Selfies street art fanny pack leggings vaporware palo santo tattooed +1. Hoodie mlkshk craft beer, bitters kogi brooklyn lo-fi PBR&B. Viral put a bird on it selfies, shabby chic stumptown microdosing
                typewriter slow-carb woke sartorial mumblecore four dollar toast gentrify humblebrag shoreditch.
              </p>

              <p class="md-headline">Check out <a href="https://amistadinc.com/">Amistad's site</a></p>

            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/amistad-home.png">
            </div>
          </div>


          <div class="results">
            <div class="results-inner">
              <h3 class="md-display-1">The result</h3>
              <p class="md-headline" style="font-weight:300">
                Lorem ipsum dolor amet pour-over irony VHS direct trade yuccie chillwave shoreditch meditation green juice snackwave hell of pinterest venmo woke meh. Cronut plaid cloud bread health goth shabby chic, before they sold out keytar butcher copper mug vape
                tumeric vinyl drinking vinegar banh mi. Selfies street art fanny pack leggings vaporware palo santo tattooed +1. Hoodie mlkshk craft beer, bitters kogi brooklyn lo-fi PBR&B. Viral put a bird on it selfies, shabby chic stumptown microdosing
                typewriter slow-carb woke sartorial mumblecore four dollar toast gentrify humblebrag shoreditch.
              </p>
            </div>
          </div>
        </div>
          <div class="portfolio-navigation">

            <md-button class="md-primary " button>
              <md-icon>chevron_left</md-icon>
              <router-link to="/cru-uconn">Cru at UConn: Becoming relevant
              </router-link>
            </md-button>
            <md-button class="md-primary " button>
              <router-link to="/root-cellar">The Root Cellar: Revitalizing a site fallen wayside
                <md-icon>chevron_right</md-icon>
              </router-link>
            </md-button>
          </div>
      </md-app-content>
    </md-app>
    </div>
</template>

<script>
import AppNav from '../../shared/appNav.vue';

export default {
  name: 'Portfolio',
};
</script>

<style lang="scss" scoped>
  .md-layout {
    margin-bottom: 100px;
  }

  .results {
    .md-headline {
      font-weight: 300;
    }
  }
</style>
