<template>
    <div class='app'>
        <navbar/>
        <intro/>
        <education/>
        <projects/>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import Education from './components/Education.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',

  components: {
    'navbar': Navbar,
    'intro': Intro,
    'education': Education, 
    'projects': Projects
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import './styles/global';

  .app {
    background: $custom-c4;
  }
</style>