<template>

  <div class="bann">
    <mt-loadmore :top-method="loadTop" ref="loadmore" class="loadmore1">
      <div class="banner">
        <div class="banner-png">
          <mt-swipe :auto="2000">
            <mt-swipe-item class="png-a">
              <a >
                <img src="./lunbotu1.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item class="png-a">
              <a >
                <img src="./lunbotu1.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item class="png-a">
              <a >
                <img src="./lunbotu1.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item class="png-a">
              <a >
                <img src="./lunbotu1.jpg" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item class="png-a">
              <a >
                <img src="./lunbotu1.jpg" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="banner-item">
        <div class="items">
          <div class="item-img1">
            <img src="./item-img.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img2">
            <img src="./item-img2.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img3">
            <img src="./item3.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img4">
            <img src="./item-img4.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img5">
            <img src="./item-img5.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img6">
            <img src="./item-img6.jpg" alt="">
          </div>
        </div>
        <div class="items">
          <div class="item-img7">
            <img src="./item-img7.jpg" alt="">
          </div>
        </div>
        <div class="foot1">没有了</div>
      </div>
    </mt-loadmore>
    <!--<BackTop :defaultProps="200" :date="300" class="backtop"></BackTop>-->
  </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import { Navbar, TabItem } from 'mint-ui';
  import { Loadmore } from 'mint-ui';
//  import BackTop from 'vue-backtop'
  export default {
    components:{
      Swipe,
      SwipeItem,
//      BackTop,
      Navbar,
      TabItem,
      Loadmore
    },
    methods:{
      loadTop() {
        this.$refs.loadmore.onTopLoaded()
      }
    }
  }
</script>
<style scoped>
  .loadmore1 {
    margin-top: 96px;
  }
  .banner{
    height: 250px;
    width: 100%;
    position: relative;
    background: #f8f8f8
  }
  .banner-png{
    overflow: hidden;
    height: 250px;
  }
  .png-a {
    position: absolute;
  }
  .png-a img{
    width: 100%;
  }
  .items{
    margin-bottom: 12px;
  }
  .item-img1{
    width: 100%;
    height: 90px;
  }
  .item-img1 img{
    width: 100%;
  }
  .item-img2{
    height: 150px;
  }
  .item-img2 img{
    width: 100%;
  }
  .item-img3{
    height: 925px;
  }
  .item-img3 img{
    width: 100%;
  }
  .item-img4{
    height: 238px;
  }
  .item-img4 img{
    width: 100%;
  }
  .item-img5{
    height: 310px;
  }
  .item-img5 img{
    width: 100%;
  }
  .item-img6{
    height: 100px;
  }
  .item-img6 img{
    width: 100%;
  }
  .item-img7{
    height: 690px;
  }
  .item-img7 img{
    width: 100%;
  }
  .foot1{
    width: 100%;
    height: 32px;
    text-align: center;
    color: #888;
    padding-bottom: 50px
  }
  .backtop{
    position: absolute;
    right: 13px !important;
    bottom: 58px !important;
  }
</style>
