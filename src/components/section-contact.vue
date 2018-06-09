<template>
<section id="contact" class="z-depth-2">

<div class="section-body container-thin">
  <address class="col-sm-6 fadeEle left">
    <h1>Contact Us</h1>
    <h2>Address:</h2>
    <h3>No. 161, Section 1, Zhongshan Road, Banqiao District<br>New Taipei City 22001, Taiwan</h3>
    <h2>Phone：(+886) 02-1234-5678</h2>
    <h4>8:30 AM - 6:00 PM, Mon-Fri</h4>
    <h5>We speak English and Chinese.</h5>
  </address>

  <form class="col-sm-6 fadeEle right">
    <label class="name-label">
    Name<br/>
    <input type="text" autocorrect="off" spellcheck="false"/>
    </label>
    <label class="email-label">
    Email<br/>
    <input type="email" autocorrect="off" spellcheck="false"/>
    </label>
    <label class="message-label">
    How can we help?<br/>
    <textarea autocorrect="off" spellcheck="false"></textarea>
    </label>
    <button>SEND<i class="material-icons">keyboard_arrow_right</i></button>
  </form>
</div>

</section>
</template>

<script>
export default {
  name: 'sectionContact'
}
</script>

<style lang="scss" scoped>
@import "./global-variables";
@import "./browser-compatibility";

#contact {
  height: auto;

  @media (min-width: $lgMedia) {
    margin-bottom: 144px;
    background-position-x: 38%;
  }

  // section body ------------------------------------------
  .section-body {
    overflow: hidden;

    background-image: url("/src/assets/images/yellow-circles-mobile.svg");
    background-size: 445px;
    background-position: 50% 100%;
    background-repeat: no-repeat;

    padding: 168px 32px 80px 32px;

    @media (min-width: $tabletMedia) {
      background-image: url("/src/assets/images/yellow-circles-contact-v2.svg");
      background-size: 104%;
      background-position: 20% 14%;

      padding: 0;
      padding-bottom: 72px;
    }

    address {
      text-align: center;

      padding: 0;

      margin-bottom: 100px;

      @media (min-width: $tabletMedia) {
        text-align: left;

        padding: 76px 0 0 110px;

        margin: 0;
      }

      @media (min-width: $lgMedia) {
        padding: 71px 0 0 112px;
      }

      h1 {
        font-family: "ClearSans", "sans-serif";
        font-size: 22px;
        font-weight: medium;
        color: #000f15;

        margin-bottom: 24px;
      }

      h2 {
        font-size: 19px;
        font-family: "ClearSans", "sans-serif";
        font-size: 18px;
        font-weight: medium;
        color: #000f15;

        margin-bottom: 8px;
      }

      h3 {
        font-family: "Open Sans", "sans-serif";
        font-size: 16px;
        color: #000f15;
        line-height: 1.4;

        margin-bottom: 28px;

        @media (min-width: $tabletMedia) {
          font-size: 14px;
        }
      }

      h4 {
        font-family: "ClearSans", "sans-serif";
        font-size: 15px;

        margin-bottom: 9px;
      }

      h5 {
        font-family: "ClearSans", "sans-serif";
        font-size: 13px;
      }
    }

    form {
      padding: 0;

      @media (min-width: $tabletMedia) {
        padding-top: 84px;
        padding-left: 47px;
      }

      @media (min-width: $lgMedia) {
        padding-top: 84px;
        padding-left: 40px;
      }

      label {
        display: block;

        font-family: "Heiti TC", "sans-serif";
        font-size: 15px;
        letter-spacing: 0.3px;
        color: #000f15;

        &.name-label {
          margin-bottom: 12px;
        }

        &.email-label {
          margin-bottom: 29px;
        }

        &.message-label {
          width: 336px;
        }
      }

      input,
      textarea {
        border: none;
        border-radius: 2px;

        background: #f6f4f0;

        outline: white;
        padding-left: 8px;
      }

      input {
        width: 100%;
        height: 38px;

        font-size: 16px;

        &:focus {
          border: 1px solid #ffa659;

          background: #fefefd;
          transition: 0.3s;
        }

        @media (min-width: $tabletMedia) {
          width: 240px;
        }
      }

      input[type="text"] {
        margin-bottom: 12px;
      }

      input[type="email"] {
        margin-bottom: 24px;
      }

      textarea {
        width: 100%;
        height: 84px;

        margin-bottom: 50px;
        padding-top: 8px;

        outline: white;

        &:focus {
          border: 1px solid #db6e43;

          background: #fefefd;
          transition: 0.3s;
        }

        &:visited {
          background: #fefefd;
          transition: 0.3s;
        }

        @media (min-width: $tabletMedia) {
          width: 295px;
        }
        @media (min-width: $lgMedia) {
          width: 326px;
        }
      }

      button {
        position: relative;
        width: 132px;
        height: 32px;

        background: none;
        font-family: "Open Sans", "sans-serif";
        font-size: 15px;
        letter-spacing: 0.4px;
        outline: none;

        border: 1.5px solid #000f15;
        border-radius: 2px;

        transition: 0.8s;

        &:hover {
          background: #000f15;
          color: #f7f9fb;
        }

        &:active {
          outline: none;
        }

        .material-icons {
          margin-right: 4px;

          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>