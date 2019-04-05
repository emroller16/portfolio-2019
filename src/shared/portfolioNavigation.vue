<template>
    <div>
        <md-button class="md-primary md-raised" button>
            <router-link :to="items.link">Back {{items.pageName}}</router-link>
        </md-button>
        <md-button class="md-primary md-raised" button>
            <router-link to="/">Back to main page</router-link>
        </md-button>
    </div>
</template>

<script>
import CruWork from '../views/portfolio/CruWork.vue';

export default {
  name: 'portfolioNavigation',
//   props: [items],
  // data: function() {
  //     items: [{
  //             link: '/amistad',
  //             pageName: 'Amistad'
  //         },
  //         {
  //             link: '/cru-uconn',
  //             pageName: 'Cru at UConn'
  //         },
  //         {
  //             link: '/root-cellar',
  //             pageName: 'Root Cellar'
  //         }]
  // }
};
</script>

<style lang="scss">

</style>
