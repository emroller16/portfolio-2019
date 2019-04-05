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
              <router-link style="font-size:14px" to="/">Back to home</router-link>
              <h3 class="md-display-3">Tyler Utility Billing Portal</h3>
              <h3 class="md-display-1">A Responsive Web App</h3>
              <p class="md-headline">
                Tyler needed a new citizen-facing utility billing portal that went beyond simply a citizen self service tool
                to be a citizen engagement tool. The app needed to be engaging to public users and responsive for multiple
                devices - two areas that were relatively new for a company that primarily deals with data heavy enterprise
                solutions. Additionally, the project aimed to pilot a newer look and feel, a new tech stack, and a commitment
                to agile methodologies.
              </p>

              <p class="md-headline">Check back for a demo once the portal is released to clients.</p>

            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/placeholder.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/placeholder.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Process goals</h3>
              <p>
                The project was a key initiative for Tyler to pilot a number of new development processes.
                <ul>
                  <li>Agile and dual track scrum</li>
                  <li>Front-end-first development</li>
                  <li>Mobile first design</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Adopting agile</h3>

              <p class="main-content">
              From the outside, the team trained on agile methodologies. We tried techniques, and through trial and error and a good
                amount of retrospectives, came to a solution that worked. Working with a designer was a new concept for the team, but
                we embraced "dual track scrum" in which design and research sprints run in tandem with development sprints, but seek to
                stay a full two sprints ahead of the developers. The goal was to break up designs into concrete user stories and paths,
                and take a sprint to design the appropriate flows. User research and testing should occur the next sprint, with time for
                revisions and tweaks as necessary. Designs went into development either the next sprint or within a few sprints after.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/placeholder.png">
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100 image-container">
              <img src="../../assets/placeholder.png">

            </div>

            <div class="md-layout-item md-small-size-100">
              <h3 class="md-display-1">Close collaboration</h3>
              <p>
                 In using dual-track scrum, my goal was to maintain a close relationship with the team. I wanted to not only provide
                 designs early on, but to continue to be involved as designs went into development. After a few sprints, I found my
                 rhythm. What worked for me was to involve our front-end developer in the initial design planning meetings with our
                 product owner, then I'd create designs with feedback from the PO. Once designs were ready to be handed off, I'd
                 provide the designs, breakpoints, and specs. Then let the discussion begin. The developer was based in a different
                 state than me, but we had an ongoing Slack conversation with questions, screenshots, and changes on the fly if needed, as
                 he implemented the designs. As a final review, I had a "UX Acceptance" task on our Jira board for a final UX review
                 before the code was committed to master. This resulted in a healthy working relationship between the two of us as well
                 development that was essentially exact to spec. (Shoutout to Invision's "Inspect tool" for making simplifying my spec.)
                 </p>
            </div>
          </div>


          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="md-display-1">Front-end first development</h3>

              <p class="main-content">
              Throughout the project, the team came to embrace the concept of front-end first development - where design drives the database
              structure. Since the project was new, we had the luxury of writing our own database structure, but the paradigm shift was new
              for much of the team. What this looked like in practice was designs that drove a front-end with mock data. Once we were satisfied
              with a specific portion of the project, we began writing a database structure to match what our front-end looked like.
              </p>
            </div>
            <div class="md-layout-item md-small-size-100 image-container">
              <img src="../../assets/placeholder.png">
            </div>
          </div>

        </div>


        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="md-headline" style="font-weight:300">
            Not only did this project result in a competitive Utility Billing Portal but it also served as a pilot in many ways. As the project
            draws to a close, our team has found ourselves mentoring teams who want to try similar approaches: agile scrum, dual track scrum,
            front-end first development, mobile first design practices. We learned a lot along the way and we're excited to share. </p>
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
  name: 'UtilityBillingPortal',
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
