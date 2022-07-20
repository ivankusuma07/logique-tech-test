<template>
  <div id="app" :class="vueAppClasses">
    <router-view @setAppClasses="setAppClasses" :key="$route.path" />
  </div>
</template>

<script>
import Home from "./views/Home"
import List from "./views/List"
export default {
  name: "App",
  components: { Home, List },
  data() {
    return {
      vueAppClasses: []
    }
  },
  methods: {
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr)
    }
  }
}
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
