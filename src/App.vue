<template>
    <div class='app'>
        <intro/>
        <projects/>

    </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',

  components: {
    'intro': Intro, 
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