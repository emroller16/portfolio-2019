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
              <router-link class="back-link" to="/"><i class="material-icons">chevron_left</i>Back to Work</router-link>
              <h3 class="md-display-3">Katie Arnold Photography</h3>
              <h3 class="md-display-1">Expressing soulful love</h3>
              <p class="md-headline">
                A talented photographer, Katie needed a site to connect with clients and showcase high quality images.
              </p>

              <p class="md-headline">Check out <a href="https://katiearnoldphotography.com/">Katie's site</a>.</p>

            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/katie-home.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/katie-portrait.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Expressing Katie's brand</h3>
              <p>
                Katie and I discussed a number of goals for her site.
                <ul>
                  <li>Social media integration including Instagram and Pinterest</li>
                  <li>Full size high quality images</li>
                  <li>New color palette and typography</li>
                  <li>Allow Katie to continue to update the site on her own</li>
                  <li>Revisit site organization</li>
                  <li>Design a compelling landing page true to Katie's brand</li>
                  <li>Integrate with external CRM service</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Golden hour</h3>

              <p class="main-content">
              Katie's favorite time to shoot is what she calls "Golden Hour" - the hour just around dusk. Her style is inspired
              by the golden glow of the setting sun with its warmth and ease and natural settings as a canvas.
              To better express Katie's unique brand, we captured her love for Golden Hour in a custom color palette reflecting
              both muted sunset and natural colors.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/katie-colors.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/katie-mobile.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Mobile-first</h3>
              <p>
                 Katie's site is fully responsive and provides an experience that delights at multiple screen factors. I wanted to keep her
                 photos as large as possible on mobile to showcase her quality photogaphy.</p>
            </div>
          </div>


          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Key plugins</h3>
              <p class="main-content">
              To meet Katie's strategic goals for attracting clients through Pinterest and managing new leads through a third party app, I
              added a Pinterest plugin to allow users to pin photos from her website with no additional work on her part. I also embedded a
              contact form that integrates with her lead-capture app so that she can manage new leads and potential clients all through a 
              single third party app, instead of managing through her website or email in addition. 
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/katie-responsive.png">
            </div>
          </div>

        </div>


        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="md-headline" style="font-weight:300">
            "This is the site I always hoped I'd have!" Katie told me with excitement. Finally, a site that reflects the quality of her work
            and is true to her personal brand, while inviting potential customers to book online or learn more. From what I've set up for her
            in Wordpress, she's confident maintaining her site going forward.</p>
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
  name: 'KatieArnold',
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
