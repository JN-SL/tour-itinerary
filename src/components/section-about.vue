<template>
<section id="about">

  <div class="section-header">
    <hgroup>
      <h1 class="large-2x">Our Fall Offer</h1>
      <h2><span class="date-weekdays medium">Weekdays</span><span class="price medium-x"> ~ &nbsp; 899 NTD</span></h2>
      <h2><span class="date-weekends medium">Weekends</span><span class="price medium-x"> ~ 1100 NTD</span></h2>
    </hgroup>
    <button class="btn-floating waves-effect waves-light">Book your tour</button>
  </div>

  <div class="section-body container-thin">
    <h1 class="section-body-title large-2x">Tour highlights</h1>

    <tour-intro v-for="content in contents" :content="content" />
  </div>
</section>
</template>

<script>
import tourIntro from './tour-intro'

// data structure
class tourContent {
  constructor(mainFig, captionBg, mainFigCaption, spotNameColor, spotName, tourTime, intros, summary) {
    this.mainFig = mainFig
    this.captionBg = captionBg
    this.mainFigCaption = mainFigCaption
    this.spotNameColor = spotNameColor
    this.spotName = spotName
    this.tourTime = tourTime
    this.intros = intros
    this.summary = summary
  }
}

export default {
  name: "sectionAbout",

  components: {
    'tour-intro': tourIntro
  },

  data() {
    return {
      contents: []
    }
  },

  created() {
    this.contents = [
      new tourContent(
        '/src/assets/images/image-2-lg-media.jpg',
        'blue-wave',
        'Nanya Stone',
        'blue',
        'Yehliu Geopark',
        '10:00 AM - 11:00 AM',
        [
          'Yehliu is a cape of about 1,700 m (5,280 ft) long, formed by Mount Datun reaching into the sea.',
          'Located in the Wanli District along the North Coast of Taipei, it is well known for its natural and unique rock formations formed by decades of sea erosion from earth and wind movements.',
          'When overlooked from above, the place looks like a giant turtle slowly descending into the sea. Thus, it is also called the "Yeliu Turtle."'
        ],
        {
          title: 'Must See',
          items: ["Queen's Head — Cute Princess", "Dragon's Head Rock — Fairy's Shoe"]
        }
      ),

      new tourContent(
        '/src/assets/images/image-3-lg-media.jpg',
        'red-wave',
        'Jiufen Old Street',
        'red',
        'Jiufen Street',
        '12:30 PM - 02:30 PM',
        [
          'Jiufen used to be a prosperous gold mining town, now turned into a popular tourist destination.',
          'Located within the hills of northeast Taiwan, the charming village is next to the mountain and facing the sea.',
        ],
        {
          title: 'Most well known for',
          items: ["Street food shops, restaurants and teahouses", "Studio Ghibli's Spirited Away animation"]
        }
      ),

      new tourContent(
        '/src/assets/images/image-4.jpg',
        'green-wave',
        'Pingxi Train Line',
        'green',
        'Pingxi District',
        '03:30 PM - 05:00 PM',
        [
          'Pingxi and Shifen</span> are just one of the two of several towns alongside the 106 highway, a narrow back road that runs between southern Taipei and southern Keelung.',
          'Pingxi Sky Lantern Festival is one of the three most popular and well known celebration event during the Lantern Festival.',
        ],
        {
          title: 'Things to do',
          items: ["Visit the Pingxi Rail Line", "Make your own Chinese lanterns"]
        }
      )
    ]
  }
};
</script>

<style lang="scss" scopoed>
@import "./global-variables";
@import "./browser-compatibility";

#about {
  margin-bottom: 105px;

  @media (min-width: $tabletMedia) {
    margin-bottom: 122px;
  }
  @media (min-width: $lgMedia) {
    margin-bottom: 186px;
  }

  // section-header ------------------------------------------
  .section-header {
    height: 712px;

    background-image: url("../assets/images/test.svg");
    background-position: top;

    background-repeat: no-repeat;
    text-align: center;

    padding-top: 200px;

    @media (min-width: $tabletMedia) {
      height: 536px;

      background-image: url("../assets/images/yellow-tablet-wave.svg");
      background-position: center; // <- and I move the original center to here

      padding-top: 150px;

      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
    }
    @media (min-width: $lgMedia) {
      height: 312px;

      background-image: url("../assets/images/yellow-and-red-about-wave.svg");

      padding-top: 56px;
    }

    hgroup {
      margin-bottom: 38px;

      h1 {
        letter-spacing: 0.3px;
        color: #2e3a3f;

        margin: 9px 0 22px 0;
      }

      h2 {
        color: #404951;

        .date-weekdays {
          padding-right: 6px;
        }

        .price {
          font-family: ClearSans;
          font-weight: medium;
        }
      }
    }

    button {
      width: 208px;
      height: 40px;

      background-color: #e86e63;
      letter-spacing: 0.3px;
      color: #fff;

      border: none;
      border-radius: 2px;
      outline: white;
      box-shadow: none;

      transition: 0.3s ease-out;

      &:hover {
        background-color: #fc843a;
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
          0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);

        font-size: 17px;
        letter-spacing: 0.3px;
      }
    }
  }

  // section-body ------------------------------------------

  .section-body {
    padding: 0 64px 0 72px;

    @media (min-width: $tabletMedia) {
      padding: 0;
      padding-top: 88px;
    }
    @media (min-width: $lgMedia) {
      padding-top: 248px;
    }
  }

  .section-body-title {
    text-align: center;

    margin-bottom: 86px;
  }
}
</style>