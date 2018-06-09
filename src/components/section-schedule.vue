<template>
<section id="schedule" class="container-thin">

  <div class="section-header">
    <figure></figure>
    <div class="top-container">
      <hgroup>
        <h1>Schedule</h1>
        <img src="/src/assets/images/clock-icon.svg" class="clock-icon"/>
        <span>10 Hrs Duration</span>
      </hgroup>
    </div>
  </div>

  <div class="section-body">
    <button class="btn-print waves-effect waves-light btn z-depth-3">Download PDF Schedule</button>

    <img src="/src/assets/images/blue-2nd-schedule-wave.svg" class="wave second" />

    <div class="row start">
      <label class="fadeEle left">09:00 AM</label>
      <article class="fadeEle right">
        <h1>
          Meet up in front of the
          <a href="https://goo.gl/4aEeDp" target="_blank" class="a-station-map">East Gate 3<i class="material-icons place-icon">place</i></a> 
          <span style="display: block">of Taipei main train station.</span>
        </h1>
        <iframe class="station-map" frameborder="0" style="border:0" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.6280971900728!2d121.51734185944677!3d25.047521150646478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a972740c7de7%3A0x8fa8299def566abc!2z6Ie65YyX6LuK56uZKOadseS4iemWgCk!5e0!3m2!1szh-TW!2stw!4v1511188053986"></iframe>
      </article>
    </div>

    <div class="row yeliu">
      <label class="fadeEle left">10:00 AM</label>
      <article class="fadeEle right">
        <h1>Arive at Yeliu Geopark.</h1>
      </article>
    </div>

    <div class="row jiufen">
      <label class="fadeEle left">12:30 PM</label>
      <article class="fadeEle right">
        <h1>Arrive at Jiufen historical street.</h1>
        <p><span style="font-family:ClearSans-Medium; font-size:18px; padding-bottom:24px;">Recommended snacks:</span></p>
        <p class="recommdation">~ Aunt Kan's Yam Dish</p>
        <p class="recommdation">~ Lan's Herb Mochi</p>
      </article>
    </div>

    <div class="row meal">
      <label class="fadeEle left">
      <img src="/src/assets/images/ramen.svg" class="meal-icon" />
      </label>
      <article class="fadeEle right">
        <h1 class="meal white">Lunch will be on your own account, in one of the small shops or restaurants nearby.</h1>
      </article>
    </div>

    <div class="row pingxi">
      <label class="fadeEle left">03:30 PM</label>
      <article class="fadeEle right">
        <h1>Arrive at Pingxi District.</h1>
      </article>
    </div>

    <div class="row end">
      <label class="fadeEle left">07:30 PM</label>
      <article class="fadeEle right">
        <h1>Back to Taipei main station.</h1>
      </article>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'sectionSchedule'
}
</script>

<style lang="scss" scoped>
@import "./global-variables";
@import "./browser-compatibility";

#schedule {
  @media (min-width: $tabletMedia) {
    margin-bottom: 136px;
  }

  @media (min-width: $lgMedia) {
    margin-bottom: 120px;
    border-radius: 4px;
  }

  box-shadow: 0 16px 18px 2px rgba(0, 94, 184, 0.14),
    0 6px 65px 5px rgba(0, 94, 184, 0.12), 0 8px 10px -5px rgba(0, 94, 184, 0.3);

  .top-container {
    padding: 48px 0 50px 0;

    box-shadow: 0 3px 14px 2px rgba(0, 94, 184, 0.12),
      0 5px 5px -3px rgba(0, 94, 184, 0);

    @media (min-width: $tabletMedia) {
      padding: 44px 0 38px 0;
    }

    @media (min-width: $lgMedia) {
      padding: 16px 0 40px 0;
    }
  }

  .section-header {
    position: relative;
    overflow: hidden;

    text-align: center;

    padding-bottom: 40px;

    border-radius: 4px 4px 0 0;

    figure {
      height: 232px;
      background-image: url("/src/assets/images/imahe-5-Yehliu.jpg");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;

      @media (min-width: $tabletMedia) {
        height: 353px;
      }

      @media (min-width: $lgMedia) {
        height: 348px;
      }
    }

    h1 {
      font-family: "Heiti TC", "Microsoft JhengHei";

      font-size: 34px;
      color: #2e3a3f;
      letter-spacing: 0.3px;

      margin-bottom: 16px;

      @media (min-width: $tabletMedia) {
        margin-bottom: 28px;
      }

      @media (min-width: $lgMedia) {
        font-size: 37px;
        margin-bottom: 12px;
        margin-top: 24px;
      }
    }

    .clock-icon {
      width: 28px;
      color: #2e3a3f;
    }

    span {
      display: block;
      margin-top: 14px;
      padding-bottom: 2px;
    }
  }

  .section-body {
    position: relative;

    padding: 45px 32px 96px 32px;

    @media (min-width: $tabletMedia) {
      padding: 45px 0 100px 0;
    }
    @media (min-width: $lgMedia) {
      padding: 8px 0 130px 0;
    }

    .btn-print {
      display: block;
      width: 100%;
      height: 36px;

      background: #fff;

      font-family: "Open Sans", "Heiti TC", "sans-serif";
      font-size: 15px;
      word-spacing: 2px;

      border: none;
      border-radius: 2px;
      margin: 0 auto 93px auto;

      outline: white;

      transition: 0.8s;

      @media (min-width: $tabletMedia) {
        width: 232px;
      }

      &:hover {
        width: 25%;

        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
          0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
      }

      &:active {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        transition: 0.4s;
      }
    }

    img.wave {
      position: absolute;
      top: 69%;
      left: 0;
      width: 100%;

      @media (min-width: $tabletMedia) {
        top: 49%;
      }
      @media (min-width: $lgMedia) {
        top: 48%;
      }
    }

    .row {
      position: relative;
      z-index: 3;

      margin-bottom: 40px;

      @media (min-width: $tabletMedia) {
        display: -webkit-flex;
        display: flex;
      }

      &.meal {
        @media (min-width: $tabletMedia) {
          display: flex;
          align-items: baseline;
        }
      }

      &.end {
        margin-bottom: 0;
      }

      label {
        display: block;

        font-family: ClearSans;
        font-size: 28px;
        font-weight: medium;
        text-align: center;

        margin-bottom: 48px;
        letter-spacing: 0.3px;

        @media (min-width: $tabletMedia) {
          width: 296px;

          font-size: 22px;

          padding-top: 8px;

          margin: 0;
        }

        @media (min-width: $lgMedia) {
          width: 327px;

          font-size: 21px;

          padding-top: 8px;
          padding-left: 39px;
        }

        .meal-icon {
          width: 90px;

          padding-top: 15px;
          @media (min-width: $tabletMedia) {
            width: 94px;
          }
        }
      }

      article {
        padding: 0;

        @media (min-width: $tabletMedia) {
          flex: 1;

          padding-right: 80px;
        }
        @media (min-width: $lgMedia) {
          padding-right: 104px;
        }

        hgroup {
          margin-bottom: 64px;
        }

        h1 {
          font-family: "Open Sans", "sans-serif";
          font-size: 18px;
          line-height: 2.6;
          text-align: center;

          margin-bottom: 0;

          @media (min-width: $tabletMedia) {
            text-align: left;
          }

          @media (min-width: $lgMedia) {
            line-height: 2.7;
          }

          .a-station-map {
            display: block;
            @media (min-width: $tabletMedia) {
              display: inline;
            }
          }
        }

        p {
          font-size: 18px;
          text-align: center;

          @media (min-width: $tabletMedia) {
            font-size: 26px;
            text-align: left;
          }
          @media (min-width: $lgMedia) {
          }

          &.recommdation {
            font-size: 16px;
            font-family: "ClearSans", "sans-serif";

            margin: 0;
          }
        }

        .station-map {
          width: 100%;
          height: 400px;

          @media (min-width: $tabletMedia) {
            width: 387px;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>