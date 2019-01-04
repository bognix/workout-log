<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <router-link to="/" class="navbar-item">
          Home
        </router-link>
        <router-link to="/admin" class="navbar-item">
          Admin
        </router-link>
      </div>
    </nav>
    <div class="section">
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import 'bulma';
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';
@import "~@fortawesome/fontawesome-free/scss/solid";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
