<template>
    <div class='app'>
        <navbar/>
        <intro/>
        <experience/>
        <education/>
        <skills/>
        <projects/>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue';

export default {
  name: 'App',

  components: {
    'navbar': Navbar,
    'intro': Intro,
    'experience': Experience,
    'education': Education, 
    'skills': Skills,
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
    overflow-x: hidden;
  }
</style>