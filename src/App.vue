<template>
    <div>
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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

</style>