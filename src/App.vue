<template>
    <v-content>
      <Navbar/>
      <HelloWorld/>
    </v-content>

</template>

<script>
import Navbar from './components/Navbar';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    Navbar, HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
