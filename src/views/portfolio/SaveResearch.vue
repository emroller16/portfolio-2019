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
              <h3 class="md-display-3">Hold that Thought: The UX of editing</h3>
              <h3 class="md-display-1">Presentation</h3>
              <p class="md-headline">
                To help a team structure an editing experience, I wanted to break down the experience of editing into its core parts and provide
                guidance at each stage. I partnered with two researchers at Tyler Tech to deliver a theoretical framework and practical design
                suggestions.
              </p>
              <p class="md-headline">Check out <a href="https://docs.google.com/presentation/d/1chz94M_hI3iLM_GicFOHDMoEopk-o3vbb5TbfoXdFQM/edit?usp=sharing">the presentation</a>.</p>
            </div>
            <div class="md-layout-item md-small-size-100">
              <img src="../../assets/placeholder.png">
            </div>
          </div>
          </div>

          <div class="inner-portfolio-container">
          <div class="md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-70 md-small-size-100">
              <h3 class="md-display-1">When is saving implicit?</h3>
              <p>
                The other day I made changes to some billing preferences on my credit card, only to discover something alarming. When I went to
                save my changes - ensure that my payment really would occur automatically next term - the UI was missing a key element: the save
                button. In a moment of panic I wondered if the system would auto-save my preferences or whether I had missed a "save" button
                somewhere along the way. None to be found. Frustrated, I decided to assume it had saved my preferences and cross my fingers that
                the edits held and that I wouldn't in fact be late on my payment next month. Checking my email an hour later, I found a cheerful
                email from said credit card company, letting me know that my auto-pay preferences had been successfully updated. Crisis averted.
                But why couldn't they let me know my changes had been saved in the application?</p>

                <p>I've seen a growing shift toward this idea of "implicit" save on the web - where applications handily save changes so we humans
                don't have to, and presumably so that we humans avoid the dreaded lost files with no auto-recover option. The concept makes sense
                in the context of word editing, where saving is easily forgotten and large amounts of work can be lost due to carelessness. But,
                is this a pattern that should be used everywhere? I wanted to dive in.</p>

                <img src="../../assets/placeholder.png" alt="Editing on the web is comprised of four parts: Initiating, changing, saving, and publishing">

                <p>First, let's set some groundwork. Saving can be manual (prompt the user to "Save" or "Cancel" or automatic (the system saves changes
                at predictable intervals) but it should never be implicit. Whether manual or automatic,
                our applications should always provide visibility into what's happening. Let's be upfront with our users, the way we expect our
                friends to be up-front with us. Microsoft, Google, and Dropbox all save changes automatically and do a great job informing their
                users that changes are indeed
                being saved and that they can safely navigate away. Apps that use manual save can provide visibility in an analogous way by providing
                clear "Save" and "Cancel" controls.</p>


                <img src="../../assets/placeholder.png">


                <p>Outlook uses manual save in its draft editing and prompts the user to save changes when navigating away from a page. Gmail uses automatic
                saving and informs the user that changes will be saved on exit with a quick tooltip. Both create expectations for their users.
              </p>

              <img src="../../assets/placeholder.png">


              <h3 class="md-display-1">The model</h3>
              <p>
                Editing information in an application can essentially be broken down into four major parts:
                <ul class="sub-items">
                  <li>Initiate</li>
                  <li>Decide we want to transition from purely viewing information to modifying it.</li>
                  <li>Change</li>
                  <li>Edit, revise, change, remove, and add information.</li>
                  <li>Save</li>
                  <li>Decide to keep our changes and allow them to be remembered.</li>
                  <li>Publish</li>
                  <li>If applicable, allow our remembered edits to be publicized, shared, or create changes in a system.</li>
                </ul>
              </p>
              <img src="../../assets/human-machine-save.png">

              <h3 class="md-display-1">Responsibilities</h3>
              <p>When we do work with an application or system, we're essentially working together with a machine to increase our own output. Basic
                economics teaches us that collaborations do best when each trade partner specializes in their own strengths. So, how can we capitalize
                on both human strengths and machine strengths here? Our users' goals in this context are primarily to write, edit, and save information
                successfully and efficiently. The system (machine) acts to support and assist the user in writing, editing, and saving. To return to our
                model of saving, we can identify and capitalize on human and machine strengths at each stage.</p>

            <h3 class="md-display-1">1. Initiate</h3>
            Match the ease of edting with frequency of initiation.
            <ul>
              <li>Is the user's primary goal to edit or make changes in your application?<br>
                  Initiate the application in an edit mode.
              </li>
              <li>Is the user's primary goal to preview information in the application, making edits or changes occasionally?<br>
                  Initiate the application in a preview mode and invite the user to edit with an explicit control or click to edit inputs.
              </li>
            </ul>

            <h3 class="md-display-1">2. Change</h3>
            Interpret inputs. Show current changes, history, and consequences. Allow actions to be undone.
            <ul>
              <li>Allow users to enter data in a way that feels natural to them.<br>
                If offering a date-picker, for example, allow users to enter their date in numeric format OR to pick a date from a calendar - each contextual benefits to the goal in mind. If prompting
                  Initiate the application in an edit mode.
              </li>
              <li>If possible, allow users to see and restore previous drafts of work.
              </li>
            </ul>
            <h3 class="md-display-1">3. Save</h3>
            <p>
            Inform your user how changes are saved. Show history and provide access to it (revert). Minimize information loss through drafts.

            Automatic versus manual save
            <ul>
              <li>are they doing work which requires a state of flow (ie, writing a chapter)?<br>
                Use automatic saving to facilitate flow and minimize data loss. Allow users to undo or cancel actions - whether
                through native chortcuts such as Ctrl (Cmd) + Z, or through explicit "Undo" or "Revert Changes" options.
              </li>
              <li>Are your users making specific hunt and peck edits (ie, updating system settings)?<br>
              Opt for an explicit save model, which allows users a greater sense of control over the changes they're making.
              </li>
              <li>Will edits have downstream consequences(ie, updating system settings)?<br>
              Opt for an explicit save model to give users greater control.
              </li>
            </ul>

            Placement of controls (if using manual save)
            <ul>
              <li>Are users editing a single field at a time?<br>
                Use contextual controls, close to the changed field. Use standard tabbing conventions. (Jira provides contextual controls,
                but still allows users to tab to the next field to save their changes).
              </li>
              <li>Are your users editing forms as a whole?<br>
                Use consistent global "Save" and "Cancel" controls that are persistently visible.
              </li>
            </ul>
              </p>

            <h3 class="md-display-1">4. Publish (optional)</h3>
            For changes that will be public or will change a "live" dataset. Allow for checks and preview before publishing.
            Interpret inputs. Show current changes, history, and consequences. Allow actions to be undone.
            <ul>
              <li>Separate "publish" from save, if appropriate.</li>
              <li>Indicate the extent: when will it be published.</li>
              <li>Indicate the extent: who will see it.</li>
            </ul>
            </div>
          </div>
          </div>

        <div class="results">
          <div class="results-inner">
            <h3 class="md-display-1">The result</h3>
            <p class="md-headline" style="font-weight:300">
            Text here</p>
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
  name: 'SaveResearch',
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
