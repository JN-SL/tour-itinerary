<template>
<header id="home">
  <hgroup>
    <h1 class="large-4x">North Coast - Fall Tour</h1>
    <h2 class="large">－ Yehliu, Jiufen and Pingxi －</h2>
  </hgroup>
  
  <img class="down-icon visible-xs" style="display: none;" src="/src/assets/images/arrow-down-mobile.svg" alt=""/>
</header>
</template>

<script>
export default {
  name: "bannerHeader"
};
</script>

<style lang="scss" scoped>
@import "./global-variables";
@import "./_browser-compatibility";

header {
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: url("/src/assets/images/header-full.jpg");
  background-size: auto 100%;

  @media (min-width: $tabletMedia) {
    height: 488px;

    background-size: 100%;
  }

  @media (min-width: $lgMedia) {
    height: 600px;

    background-position: top;

    margin-bottom: 192px;
  }

  hgroup {
    position: absolute;
    top: 300px;
    right: 0;
    width: 100%;

    background: rgba(0, 0, 0, 0.87);

    font-family: "ClearSans", "sans-serif";
    text-align: center;
    color: white;

    padding: 0px;

    @media (min-width: $tabletMedia) {
      top: 49%;
      width: 600px;

      text-align: left;

      padding: 8px 0px 16px 28px;

      margin-right: 28px;
    }

    @media (min-width: $lgMedia) {
      top: 52%;
      width: 600px;

      padding: 0px;

      margin-right: 20px;
    }

    h1 {
      font-family: "Pacifico", "sans-serif";
      letter-spacing: 0.4px;

      text-align: center;

      margin-bottom: 20px;

      @media (min-width: $tabletMedia) {
        text-align: left;

        margin-bottom: 39px;
      }
    }

    h2 {
      font-family: 'Open Sans';
      letter-spacing: 0.3px;
      white-space: nowrap;
      text-align: center;

      @media (min-width: $tabletMedia) {
        text-align: right;
        word-spacing: 1px;

        padding-right: 63px;

        margin-bottom: 16px;
      }

      @media (min-width: $lgMedia) {
        padding-right: 108px;
      }
    }
  }

  .down-icon {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>