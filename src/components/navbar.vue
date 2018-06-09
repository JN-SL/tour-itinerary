<template>
<nav :class="{navbar: true, 'navbar-fixed-top': true, transparent: transparent}">

  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <img src="/src/assets/images/burger-menu-tabletMedia.svg" class="visible-md visible-sm">
        <img src="/src/assets/images/burger-menu-mobile.svg" class="visible-xs">
      </button>
      <a class="navbar-brand en" href="#">Citizens Tour</a>
    </div>

    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li class="li-nav"><a href="#about">About</a></li>
        <li class="li-nav"><a href="#schedule">Schedule</a></li> 
        <li class="li-nav"><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </div>

</nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      transparent: false
    }
  },
  props: ['scrollY'],
  watch: {
    scrollY(value) {
      if (value > 100)
        this.transparent = true;
      else
        this.transparent = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./global-variables";
@import "./_browser-compatibility";

.navbar {
  border: none;
  margin: 0;

  transition: opacity 0.5s;

  @media (min-width: $tabletMedia) {
    height: 56px;

    background: white;

    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &.transparent {
    @media (max-width: $tabletMedia) {
      background: black;
    }

    opacity: 0.5;

    &:hover {
      opacity: 0.75;
    }
  }

  .container {
    padding: 0 42px 0 32px;
  }

  .icon-bar {
    background: white;

    @media (min-width: $tabletMedia) {
      background: black;
    }
  }

  .navbar-brand {
    font-family: ClearSans;
    font-size: 18px;
    font-weight: medium;
    color: white;

    cursor: default;

    padding: 18px 16px 18px 33px;

    @media (min-width: $tabletMedia) {
      color: #000f15;
    }
  }

  .navbar-collapse {
    background: white;
    width: 100%;

    @media (min-width: $tabletMedia) {
      width: 184px;

      float: right;
      border-radius: 2px;
    }

    @media (min-width: $lgMedia) {
      background: none;
      width: auto;
    }

    .navbar-nav.navbar-right {
      @media (min-width: $tabletMedia) {
        height: 200px;
        width: 65%;
        text-align: center;

        margin: 0 auto;

        border-radius: 4px;
      }

      @media (min-width: $lgMedia) {
        width: auto;
        margin: auto;
      }
    }
  }

  .nav {
    .dropdown {
      .dropdown-toggle {
        @include display-flex;
        @include justify-content(center);
        @include align-items(center);
        width: 100%;

        background: none;
        font-size: 16px;

        padding: 15px 8px 0 8px;

        border: none;

        @media (min-width: $tabletMedia) {
          width: auto;

          font-size: 18px;
          //line-height: 44px;
        }
      }

      .dropdown-menu {
        border-radius: 4px !important;
        border: none;
      }

      .world-icon {
        width: 14px;
        margin: 0 4px 0 0;
      }

      span {
        font-family: ClearSans;
        font-size: 15px;

        padding: 0 8px;
      }

      .material-icons {
        font-size: 20px;

        margin-left: -8px;
      }

      li {
        text-align: center;
      }
    }

    .li-nav {
      a {
        position: relative;
        width: 100%;

        background: none;

        font-family: "ClearSans", "sans-serif";
        font-size: 16px;
        font-weight: medium;
        color: #2e3a3f;
        text-align: center;
        line-height: 34px;
        text-transform: uppercase;
        text-decoration: none;
        outline: white;

        padding: 8px 8px 10px 8px;

        @media (min-width: $tabletMedia) {
          width: auto;

          font-size: 18px;
        }

        @media (min-width: $lgMedia) {
          width: auto;
          margin: 0 10px;
        }

        &::before,
        &::after {
          backface-visibility: hidden;
          border: 1px solid rgba(#fece40, 0);
          bottom: 0px;

          content: " ";
          display: block;
          margin: 0 auto;
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        &:hover:before,
        &:hover:after {
          backface-visibility: hidden;
          width: 100%;

          border-color: #fece40;
          margin: auto;

          transition: width 350ms ease-in-out;
        }

        &:hover:before {
          bottom: auto;
          top: 0;
        }
      }
    }
  }
}

// Override navbar breakpoint
@media (max-width: 1200px) {
  .navbar-header {
    float: none;
  }
  .navbar-left,
  .navbar-right {
    float: none !important;
  }
  .navbar-toggle {
    display: block;
  }
  .navbar-collapse {
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px;
  }
  .navbar-collapse.collapse {
    display: none !important;
  }
  .navbar-nav {
    overflow: hidden;
    float: none !important;
    margin-top: 7.5px;
  }
  .navbar-nav > li {
    float: none;
  }
  .navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .navbar-collapse {
    padding: 0;

    ul {
      width: 100%;

      margin: 0;
    }
  }
  .collapse.in {
    display: block !important;
  }
}
</style>