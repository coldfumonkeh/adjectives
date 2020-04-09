<template>
  <div id="app">
    <b-container fluid>
      <Home />
    </b-container>
    <footer class="footer text-muted docs-border">
      <div class="container">
        <div class="row justify-content-center">
          <div class="text-center">
            <p class="footerText">Developed with love by <a href="https://www.monkehworks.com" target="_blank">Matt Gifford</a> and <a href="https://www.linkedin.com/in/tim-gifford-212b4a2a" target="_blank">Tim Gifford</a>.</p>
            <p class="footerText">Built under quarantine conditions 2020. Stay Home. Stay Safe</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem 0;
  text-align: center;
  background-color: #eee;
  font-size: .875rem;
}
p.footerText {
  margin-bottom: 0;
}
.text-muted {
    color: #6c757d!important;
}

@media (min-width: 576px)
.bd-footer {
    text-align: left;
}

</style>
