<template>
<div class="row">
  <figure class="col-sm-6 fadeEle left">
    <div class="fig z-depth-5">
      <img :src="content.mainFig" />
      <figcaption :class="[content.captionBg ,'hidden-xs']">
        <span class="medium-x">{{content.mainFigCaption}}</span>
      </figcaption>
    </div>

    <button data-toggle="modal" data-target="#myModal">
      <img src="/src/assets/images/photo-camera.svg" class="camera-icon" />
      See more photos
    </button>
  </figure>

  <article class="col-sm-6 fadeEle right">
    <h1 :class="[content.spotNameColor]">{{content.spotName}}</h1>

    <time class="medium">
    <img src="/src/assets/images/clock.svg" />
    <span class="medium-x">{{content.tourTime}}</span>
    </time>
    
    <div class="block-intros">
      <p v-for="intro in content.intros" class="regular">{{intro}}</p>
    </div>

    <div class="block-summary">
      <p class="title medium">{{content.summary.title}}</p>
      <p v-for="item in content.summary.items" class="item regular">{{item}}</p>
    </div>
  </article>
</div>
</template>

<script>
export default {
  name: "tourIntro",
  props: [
    'content'
  ]
};
</script>

<style lang="scss" scoped>
@import "./global-variables";
@import "./browser-compatibility";

.row {
  margin-bottom: 80px;

  @media (min-width: $tabletMedia) {
    margin-bottom: 80px;
  }

  @media (min-width: $lgMedia) {
    margin-bottom: 130px;
  }

  h1 {
    &.about-title {
      text-align: center;
      margin-bottom: 86px;
    }
  }
}

figure {
  padding: 0;

  @media (min-width: $tabletMedia) {
    padding-left: 48px;
  }
  @media (min-width: $lgMedia) {
    padding: 0;
  }

  .fig {
    position: relative;
    width: 240px;
    height: 240px;
    overflow: hidden;

    text-align: center;

    border-radius: 50%;
    margin: 0 auto 52px auto;

    @media (min-width: $tabletMedia) {
      width: 100%;
      height: 504px;

      border-radius: 4px;
      margin: 0;
      margin-bottom: 20px;
    }

    @media (min-width: $lgMedia) {
      width: 440px;
      height: 656px;

      border-radius: 4px;
      margin-bottom: 28px;
    }

    img {
      width: 100%;
    }

    figcaption {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 136px;

      &.blue-wave {
        background-image: url("/src/assets/images/blue-wave-2.svg");
        background-size: 100% 120%;
        background-repeat: no-repeat;

        border-radius: 4px;

        @media (min-width: $tabletMedia) {
          background-size: 100% 120%;
        }
        @media (min-width: $lgMedia) {
          background-size: 100% 113%;
        }
      }

      &.red-wave {
        background-image: url("/src/assets/images/red-wave-2.svg");
        background-size: 115% 120%;
        background-repeat: no-repeat;

        border-radius: 4px;

        @media (min-width: $tabletMedia) {
          background-size: 115% 120%;
        }
        @media (min-width: $lgMedia) {
          background-size: 115% 100%;
        }
      }

      &.green-wave {
        background-image: url("/src/assets/images/3rd-wave-green.svg");
        background-size: 100% 122% !important;
        background-repeat: no-repeat;

        border-radius: 4px;

        @media (min-width: $tabletMedia) {
          background-size: 115% 120%;
        }

        @media (min-width: $lgMedia) {
          background-size: 115% 100%;
        }
      }

      span {
        position: absolute;
        bottom: 17px;
        left: 24px;

        font-family: Heiti TC, "sans-serif";
        color: white;
      }
    }
  }

  button {
    width: 100%;

    background: none;
    font-weight: bold;
    text-align: right;
    color: #1a272d;

    border: none;
    margin-bottom: 40px;

    outline: none;

    @media (min-width: $tabletMedia) {
      font-size: 16px;
      text-align: left;

      margin: 0;
    }

    .camera-icon {
      width: 46px;
      margin-bottom: 4px;

      @media (min-width: $tabletMedia) {
        width: 50px;
        margin: 0;
        margin-right: 4px;
      }

      @media (min-width: $lgMedia) {
        width: 60px;
        margin-right: 4px;
      }
    }
  }
}

article {
  padding: 0;

  @media (min-width: $tabletMedia) {
    padding: 58px 64px 0 48px;
  }
  @media (min-width: $lgMedia) {
    padding: 64px 14px 0 72px;
  }

  h1 {
    font-family: "Pacifico", "cursive";
    font-size: 30px;
    text-align: center;
    color: #2e3a3f;
    font-weight: normal;
    letter-spacing: 0.8px;

    margin-bottom: 26px;

    @media (min-width: $tabletMedia) {
      text-align: justify;

      margin-bottom: 22px;
    }

    @media (min-width: $lgMedia) {
      font-size: 40px;

      margin-bottom: 30px;
    }

    &.blue {
      color: #005eb8;
    }

    &.red {
      color: #ce5e54;
    }

    &.green {
      color: #4c7f76;
    }
  }

  time {
    @include display-flex;
    @include flex-flow(column);
    @include justify-content(center);
    @include align-items(center);

    font-family: "ClearSans";
    font-weight: medium;

    margin-bottom: 64px;

    @media (min-width: $tabletMedia) {
      @include flex-flow(row);
      @include justify-content(flex-start);

      margin-bottom: 32px;
    }

    @media (min-width: $lgMedia) {
      margin-bottom: 24px;
    }

    span {
      color: #404951;

      padding: 0 12px;
    }

    img {
      width: 24px;
      margin-bottom: 1px;

      @media (min-width: $tabletMedia) {
        width: 22px;
      }
    }
  }

  p {
    font-family: "Open Sans", "sans-serif";
    text-align: left;
    line-height: 1.7;

    margin-bottom: 16px;
  }

  .block-intros {
    margin-bottom: 32px;
  }

  .block-summary {
    .title {
      font-family: ClearSans;
      font-weight: medium;
    }

    .item {
      margin: 0;
    }
  }
}
</style>