<template>
  <head>
    <link type="text/css" rel="stylesheet" href="https://irradiare-scripts.s3.amazonaws.com/font-awesome/5.13.0/css/all.min.css">
       <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic">
       <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mansalva&display=swap">
   
     
       <link type="text/css" rel="stylesheet" href="https://irradiare-scripts.s3.amazonaws.com/bootstrap/4.6.1/css/bootstrap.min.css" />
       <link type="text/css" rel="stylesheet" href="https://irradiare-scripts.s3.amazonaws.com/bootstrap-vue/2.21.2/bootstrap-vue.min.css" />
       <link type="text/css" rel="stylesheet" href="https://irradiare-scripts.s3.amazonaws.com/animate.css/4.1.1/animate.min.css" />
       <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
       <link type="text/css" rel="stylesheet" href="https://irradiare-scripts.s3.amazonaws.com/aos/2.3.4/dist/aos.css">
       <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@5.10.0/main.min.css">
       <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fullcalendar/common@5.10.0/main.min.css">
       <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@5.10.0/main.min.css">
       <link type="text/css" rel="stylesheet" href="css/template.css" />
  </head>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/agenda">Agenda</router-link> |
    <router-link to="/speakers">Speakers</router-link>
  </nav>-->
  <div data-v-7fe02e6f="">
<nav class="navbar navbar-light bg-light fixed-top navbar-expand-lg">
  <div class="navbar-brand" data-v-7fe02e6f="">
<a class="navbar-brand" data-v-7fe02e6f="" href="https://www.living-in.eu/" target="_blank">
  <b data-v-7fe02e6f="">LIVING-IN.EU</b>
</a>
|
<a class="navbar-brand" data-v-7fe02e6f="" href="https://cor.europa.eu/en/our-work/Pages/network-of-regional-hubs.aspx" target="_blank">
  <b data-v-7fe02e6f="">#RegHub</b>
</a>
<br data-v-7fe02e6f="">
<a class="navbar-brand" data-v-7fe02e6f="" to="/">
  <img data-v-7fe02e6f="" src="https://s3.eu-west-1.amazonaws.com/cdn.irradiare.biz/eu-smart.community/2022-edition/images/LogoEUSummit2022-Horiz-2.svg" alt="logo" height="55">
</a>
  </div>
  <button class="navbar-toggler collapsed" data-v-7fe02e6f="" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-collapse" style="overflow-anchor: none;">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div id="nav-collapse" class="navbar-collapse collapse" data-v-7fe02e6f="" style="display: none;">
  <ul class="navbar-nav ml-auto" data-v-7fe02e6f="" pills="">
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="/">Home</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="/agenda">Agenda</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="/speakers">Speakers</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Regions</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Celebration</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Culture</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Venue</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Partners</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">Contacts</router-link></a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link active router-link-active" data-v-7fe02e6f="" target="_self" aria-current="page"><router-link to="#">2021 edition</router-link></a></li>
  </ul>
  <ul class="navbar-nav ml-auto" data-v-7fe02e6f="" pills="">
    <li class="nav-item btn btn-main btn-sm" data-v-7fe02e6f=""><a class="nav-link" data-v-7fe02e6f="" href="#/alentejo-protocol" target="_self">
      <svg class="bi-chat-left-quote-fill b-icon bi b-icon-animation-fade" data-v-7fe02e6f="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="chat left quote fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <g data-v-7fe02e6f="">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"></path>
        </g>
      </svg>
      Alentejo Protocol
    </a></li>
    <li class="nav-item" data-v-7fe02e6f=""><a class="nav-link" data-v-7fe02e6f="" href="#/call-for-papers" target="_self">Call for papers
      </a></li>
  </ul>
  </div>
</nav>
    </div>
  <router-view/>
</template>


<style>
  /*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>

<script>
 /* import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `My website`
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },
})*/
</script>