<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar>
        <AppNav></AppNav>
      </md-app-toolbar>
      <md-app-content>
      <div class="md-layout md-gutter portfolio-header">
        <div class="inner-portfolio-container">
            <div class="md-layout-item md-size-60 md-small-size-100">
              <router-link class="back-link" to="/"><i class="material-icons">chevron_left</i>Back to Work</router-link>
              <h3 class="md-display-3">Cru at UConn</h3>
              <h3 class="md-display-1">Becoming relevant</h3>
              <p class="md-headline">
                Cru at UConn needed a space to attract new students, communicate currents events, stay in touch with alumni, and encourage contact from interested students on campus. The organization had an outdate, cramped, hard-to-find site. Most students had never
                heard of it, and for good reason. Marketing to a college demographic with an outdated site was a disastrous strategy.
              </p>
              <p>Check out <a href="https://www.cruatuconn.org/">Cru at UConn's website</a></p>
            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/cru-homepage.png">

            </div>
        </div>
          </div>
        <div class="inner-portfolio-container">


          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/cru-conference-responsive.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Setting expectations</h3>
              <p>
                We created a set of goals for a new Cru site.
                <ul>
                  <li>Clean look and feel. </li>
                  <li>Responsive across devices, mobile through desktop.</li>
                  <li>Easy future maintenance by a non-technical webmaster.</li>
                  <li>Ability to feature upcoming events</li>
                  <li>Prominent contact form that connected with a Cru specific email address.</li>
                  <li>A running blog for meeting updates and student pieces.</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">A solution that works</h3>

              <p class="main-content">
                Beyond what Cru had asked for, I wanted to make sure the new site would have a clean, modern look and feel on mobile especially. Since our target audience would likely be accessing the site from mobile devices almost exclusively, I designed the site to
                be mobile-first and scale gracefully to desktop.</p>
              <p> To allow for featured upcoming events, I created a dynamic section right from the homepage where Cru could feature upcoming events as need. The photography used in the site features college studnents. As a brand, Cru seeks to be relevant to
                students and I wanted to maintain that through copy, photography, and responsiveness. </p>
              <p> I chose Squarespace for its intuitive interface, beautiful templates, and hosting included. Cru manages one password for all things "website" and is able to easily add in events, manage submissions to their contact forms, and post photos of
                semester meetings.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/cru-mobile-three-up.png">
            </div>
          </div>
        </div>

        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="main-content md-headline" style="font-weight:300">
              The results? A beautiful site that Cru is proud to advertise to new students. A new venue for posting content and reaching students.
            </p>
          </div>
        </div>
        <div class="md-layout md-gutter portfolio-header">
        </div>
        <div class="portfolio-navigation">
          <md-button class="md-primary " button>
            <md-icon>chevron_left</md-icon>

            <router-link to="/root-cellar">The Root Cellar: Revitalizing a site fallen wayside
            </router-link>
          </md-button>
          <md-button class="md-primary " button>
            <router-link to="/amistad">Amistad: A total refresh
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
  name: 'CruWork',
};
</script>

<style lang="scss">
  .inner-page-title {
    color: white!important;
    font-weight: 500;
  }

  .header-icon-button {
    color: white!important;
  }

  .back-link {
    font-size: 	0.875rem;
    
    i {
      vertical-align: top;
    }
  }

  .inner-portfolio-container {
    max-width: 90%;
    margin: 0 auto;
    border: none!important;
    @media screen and (min-width: 840px) {
      max-width: 80%;
    }
    @media screen and (min-width: 1440px) {
      max-width: 75%;
    }
    .md-layout {
      margin-bottom: 80px;
    }
    .image-container {
      display: flex;
      img {
        justify-self: center;
        align-self: center;
      }
    }
  }

  .portfolio-header {
    // background-color: #fafafa;
    h3.md-display-1 {
      color: var(--md-theme-default-primary)!important;
    }
    .md-headline {
      font-weight: 300;
    }
    img {
      margin-top: 50px;
    }
  }

  .results {
    padding-top: 50px;
    padding-bottom: 80px;
    background-color: #EEEEEE;
    .results-inner {
      max-width: 90%;
      margin: 0 auto;
      @media screen and (min-width: 600px) {
        max-width: 70%;
      }
      @media screen and (min-width: 1024px) {
        max-width: 50%;
      }
      h3.md-display-1 {
        color: var(--md-theme-default-primary)!important;
      }
    }
  }

  .portfolio-navigation {
    display: flex;
    justify-content: space-around;
    margin-top: 36px;
    margin-bottom: 36px;
    md-button {
      border: 1px solid #40c4ff;
      border-radius: 5px;
      padding-left: 8px;
      padding-right: 8px
    }
  }
</style>
