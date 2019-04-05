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
              <h3 class="md-display-3">UX Research for Building Better Products</h3>
              <h3 class="md-display-1">Presentation</h3>
              <p class="md-headline">
                To give an overview of how to conduct UX research with a stratefy, a colleague and I presented at a company conference to an audience
                of product owners, UX folks, and developers.
              </p>
              <p class="md-headline">
                Check out
                <a
                  href="https://docs.google.com/presentation/d/1L12NmTZnqPe4NXQdroucNBLM4gd3XESrrpsWPEqXkK0/edit?usp=sharing"
                >the presentation</a>.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/placeholder.png">
            </div>
          </div>
        </div>

        <div class="inner-portfolio-container">
          <div class="md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-70 md-small-size-100">
              <h3 class="md-display-1">Please observe</h3>
              <p>If I told you to take two minutes and just observe.</p>
              <p>Go ahead. Observe.</p>
              <p></p>
              <p>Ok, two minutes up?</p>
              <p>Now, share with me some UX findings. What did you observe?</p>
              <p>
                What makes this exercise challenging is that there's too much to observe. What should I have been observing? you probably wondered.
                UX research without a strategy or a focus is just that - too much to observe or make sense of.
              </p>
              <blockquote
                class="md-display-1"
              >The challenge “lay in the fact of there being too much evidence. What was vital was overlaid and hidden by what was irrelevant.”</blockquote>
              <p>So how do we get to a UX research that has a strategy?</p>
              <ol>
                <li>Ask pivotal questions</li>
                <li>Get the logic right</li>
                <li>Make sense of the data</li>
                <li>Assess progress</li>
              </ol>
              <h3 class="md-display-1">1. Ask pivotal questions</h3>
              <p>Text here.</p>
              <h3 class="md-display-1">2. Get the logic right.</h3>
              <p>
                Ford predicted that their customers wanted a faster Ford. They created a newer car with a better engine.
                Sales didn't increase. When they sent employees to get in the car with Ford owners, what they heard was that
                owners wanted to
                <em>feel</em> their car's power. Power was all perceptual - in the shape of the car and the feel
                of the engine. When the mustang was re-released..... more text here.
              </p>
              <p>Imagine you want to design a new cafe. You might decide you want it to have bathrooms.</p>
              <p>
                Well, great, but that won't set you apart from any of your competition. Consider Startbucks' strategy as a coffee
                shop. They wanted to be a third space - after work and home, the third space where people go to "hang out." A Starbucks
                manager described it as We want to provide all the comforts of your home and office. You can sit in a nice chair, talk
                on your phone, look out the window, surf the web… oh, and drink coffee too.” Starbucks' interior is cozy, the decor is
                hip, the drinks are fancy, and outlets are prevalent.
              </p>
              <p>
                Consider an equally successful coffee shop: Dunkin Donuts. DD brands itself as coffee for folks on the go, priding
                itself in standard drinks and quick service. DD's interiors are often stark and its drinks are simple. You won't find
                college students seeking out DD to do their studying. But, their customers are just as loyal
              </p>Both Starbucks and DD used equally likely logic to guide their decisions. Starbucks: Create a Third Space. Dunkin:
              Serve no frills coffee. True logic has an equally likely opposite.
              <p></p>
            </div>
          </div>
        </div>

        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="md-headline" style="font-weight:300">Text here</p>
          </div>
        </div>
        <div class="portfolio-navigation">
          <md-button class="md-primary" button>
            <md-icon>chevron_left</md-icon>
            <router-link to="/cru-uconn">Cru at UConn: Becoming relevant</router-link>
          </md-button>
          <md-button class="md-primary" button>
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
  name: 'UXR',
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
