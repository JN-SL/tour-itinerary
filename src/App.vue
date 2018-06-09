<template>
<div id="app">

  <navbar :scroll-y="scrollY" />

  <banner-header />

  <section-about />
  <section-schedule />
  <section-contact />

</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    setScrollY() {
      this.scrollY = window.scrollY
    }
  },
  created() {
    window.addEventListener('scroll', this.setScrollY)
  }
};
</script>

<style lang="scss">
@import "./components/global-variables";
@import "./components/style-guide";
@import "./components/browser-compatibility";

* {
  box-sizing: border-box;
}

body {
    overflow-x: hidden;
    
    font-family: "sans-serif", 'Heiti TC', 'Microsoft JhengHei';
    text-align: justify;
    text-rendering: optimizeLegibility;
    
    padding: 0 !important;
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

.container {
  position: relative;
  width: 100%;

  padding: 0;

  @media (min-width: $tabletMedia) {
    max-width: none;
    width: $tabletMedia;
  }

  @media (min-width: $lgMedia) {
    width: $lgMedia;
  }
}

.container-thin {
  position: relative;
  max-width: 375px;
  width: 100%;

  margin: 0 auto;

  @media (min-width: $tabletMedia) {
    max-width: none;
    width: $tabletMedia;
  }
  @media (min-width: $lgMedia) {
    width: 864px;
  }
}

.row {
  margin: 0;
}
.col-sm-6 {
  padding: 0;
}
</style>
