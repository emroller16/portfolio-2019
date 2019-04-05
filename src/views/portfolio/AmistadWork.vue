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
              <h3 class="md-display-3">Amistad</h3>
              <h3 class="md-display-1">A total refresh</h3>
              <p class="md-headline">
                Amistad needed a total refresh for their site. Constrained by a dated site designed only for desktop widths, their online presence suffered. The site failed to portray the breadth of Amistad's work and failed to attract volunteers, media, or donors.
              </p>

              <p class="md-headline">Check out <a href="https://amistadinc.com/">Amistad's site</a></p>

            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/amistad-home.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/amistad-mission.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Creating a new look</h3>
              <p>
                When I met with the director for Amistad, I asked him for credentials to his site. He provided them to me but admitted he'd given up on logging in. WIth an air of defeat, he told me didn't know how to navigate his Wordpress site. I sympathized with his
                frustration, but I was excited - he was ready for a total rewrite of the site. </p>
              <p> As we talked about Amistad's vision and far-reaching impact, it was clear to me that the existing site captured none of the true vision of the nonprofit. We talked ideas, brand, and vision. </p>
              <p>Together we created a list of goals for the redesign.
                <ul>
                  <li>Clean, positive website</li>
                  <li>Revamped branding of the site</li>
                  <li>Streamline and organize a bulky top nav</li>
                  <li>Build out spotlight pages for individual projects</li>
                  <li>Feature quotes and stories from those impacted by Amistad's work</li>
                  <li>Create a compelling donation experience and enable online donations</li>
                  <li>Create a site that Amistad could continue to manage on their own</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Telling the story</h3>

              <p class="main-content">
                Lorem ipsum dolor amet godard cloud bread chia hashtag salvia kinfolk. Pabst vinyl hot chicken tofu, shoreditch banh mi adaptogen offal letterpress chartreuse hammock succulents kinfolk subway tile brunch. Pickled glossier aesthetic YOLO ethical shabby
                chic polaroid. Farm-to-table hexagon shaman, microdosing fingerstache sustainable prism pabst whatever.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/amistad-responsive.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/amistad-mobile.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">A mobile strategy</h3>
              <p>
                Whereas Amistad's old site was barely usable on mobile, I took a mobile approach to the redesign. </p>
            </div>
          </div>

        </div>

        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="md-headline" style="font-weight:300">
              Sometime after the project completed, Amistad's director called me with great news. He was getting a major donation from someone who had found the nonprofit online, was impressed by their work and decided to give. I couldn't be more excited. My main goal
              was to help Amistad create an online presence that accurately respresents the work they do.</p>
            <p class="md-headline">The new mobile-first site complements the center's strategic initiatives around their social media presence.</p>
            <p class="md-headline">Amistad is able to continue to add to and grow the site on their own.</p>
          </div>
        </div>
        <div class="portfolio-navigation">
        
        <div :items="items" v-for="item in items" :key="item.name">text div here{{item.index}}</div>


          <md-button class="md-primary" button>
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
import WorkPage from '../WorkPage.vue';


export default {
  name: 'AmistadWork',
  props: ['items'],
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
