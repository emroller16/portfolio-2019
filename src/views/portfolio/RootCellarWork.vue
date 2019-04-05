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
              <h3 class="md-display-3">The Root Cellar</h3>
              <h3 class="md-display-1">Revitalizing a site fallen wayside</h3>
              <p class="md-headline">
                The Root Cellar Portland had recently focused on a social media facelift. They wanted to feature a broad variety of programs as well as attract new volunteers and donors. The problem? Their website reflected none of it. The website screamed "dated template"!
                And seemed to be a mash of colors and layouts. In the midst of runnig essential programs, the site had fallen to the wayside.
              </p>

              <p class="md-headline">Check out <a href="http://www.therootcellarport.org/">The Root Cellar's site</a></p>

            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/root-cellar-programs.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/root-cellar-values.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Creating a new look</h3>
              <p>
                I met with the director of the Root Cellar to discuss his priorities for the site. Through our conversation, it became clear to me that the Root Cellar had a story to tell - a story buried behiind six paragraphs of plain text, two levels of navigation
                deep. I want to elevate their founding story as well as feature current work. Together we laid out some goals for the project.
                <ul>
                  <li>Clean look and feel</li>
                  <li>A revamped "Our story" section</li>
                  <li>Streamlined "volunteer" section that encourages new volunteers</li>
                  <li>Reducing overall text on the site</li>
                  <li>Better incorporation of branding and appropriate colors</li>
                  <li>Prominent donation portal</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Telling the story</h3>

              <p class="main-content">
                As I started working on the site, the first thing I wanted to tackle was to incorporate more of the Root Cellar's brand, in tandem with efforts to create a social media brand. When I asked for a branding document, the director wasn't even sure he had
                one. Luckily, they did. I used the branding palette throughout the site to create a unified look and feel.
              </p>
              <p>
                The original site had been very text heavy. I focused on color, quotes, and imagery to allow the site to breathe, and give it a more conversational feel.
              </p>
              <p> Finally, I wanted to tell the Root Cellar's story. I elevated their story to be a top nav item and used a layout that features color and quotes to draw visitors into the nonprofit's humble roots (pun intended.)
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/root-cellar-our-story.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/root-cellar-donate.png">
            </div>
            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Applying psychology to donations</h3>

              <p class="main-content">
                The Root Cellar relies on support from the community. Drawing on a psychological principle that holds that people are more likely to take action when they can picture concrete results, I wanted to frame the Root Cellar's call to donate in a way that clearly
                links donations to outcomes. I categorized typical donations and their expected outcomes. Additionally, research has demonstrated that people tend to rely on defaults and suggestions. Tapping into this research, I offered three specific
                donation amounts to reduce cognitive effort around donating.</p>
            </div>

          </div>
        </div>

        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="main-content md-headline" style="font-weight:300">
              The results? A clean, conversational site that features The Root Cellar's initiatives, showcases their story, invites people to donate, and calls potential volunteers to action.
            </p>
          </div>
        </div>
        <div class="portfolio-navigation">
          <md-button class="md-primary " button>
            <md-icon>chevron_left</md-icon>

            <router-link to="/amistad">Amistad: A total refresh
            </router-link>
          </md-button>
          <md-button class="md-primary " button>
            <router-link to="/cru-uconn">Cru: Becoming relevant
              <md-icon>chevron_right</md-icon>
            </router-link>
          </md-button>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// import AppNav from '../../shared/appNav.vue';

export default {
  name: 'RootCellarWork',
};
</script>

<style lang="scss" scoped>
  .md-layout {
    margin-bottom: 100px;
  }
</style>
