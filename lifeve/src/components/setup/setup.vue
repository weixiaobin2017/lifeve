<template>
  <div>
    <div class="isShow">
      <div id="topbar" class="header">
        <div class="header-content">
          <span class="btn-back">
            <router-link to="/center">
               <label class="leftback-img"></label>
            </router-link>
          </span>
          <p class="header-title">设置</p>
        </div>
      </div>
      <div class="uscenter-cont life-module">
        <div class="dashboard">
          <ul style="margin-bottom: 1rem;">
            <li @click="clearCache">
              <span class="pd20 item-title">清理缓存</span>
              <span class="arr-r"></span>
              <span class="item-tip"></span>
            </li>
            <li style="margin-top: 1rem;" @click="aboutEdition">
              <span class="pd20 item-title">关于LifeVC</span>
              <span class="arr-r"></span>
              <span class="item-tip">平台: browser 版本：5.1.2 - 261</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <mt-popup v-model="about" position="right" class="mt-popup" >
        <div class="header-content">
          <div class="header-title  font-large">
               <span class="btn-back" @click="aboutEdition" >
                  <label class="leftback-img"></label>
              </span>
            <p class="header-title">关于LifeVC</p></div>
        </div>
        <div class="container">
          <section class="sect-sub">
            <div class="client">
              <div class="client1">
                <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/client.png">
              </div>
              <div class="client2">
                <img src="http://i1.lifevccdn.com/Images/m/AboutLifeVC/weixin825.png">
              </div>
            </div>
            <div class="title">
              <div class="client-title1">
                <p>扫描二维码，</p>
                <p>下载LifeVC客户端</p>
              </div>
              <div class="client-title2">
                <p>扫描二维码，</p>
                <p>关注LifeVC官方微信</p>
              </div>
            </div>
          </section>
          <section class="sect-sub">
            <h3>公司简介</h3>
            <p>
              LifeVC，一个源自欧洲生活灵感的家居品牌，始终坚持品质和舒适实用的设计精神。从家居日用到家纺，从家饰到家具，LifeVC10000多种欧洲灵感家居产品，涵盖家的每一个角落。希望我们舒适实用的产品，陪你一起走过人生的每一个美好时刻。人生很短，家最重要。LifeVC，陪你生活一辈子！</p>
          </section>
        </div>
    </mt-popup>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui';
  import {Popup} from 'mint-ui';
  export default{
      data () {
        return {
          about:false
        }
      },
    methods: {
      clearCache () {
        MessageBox.confirm('确定要清除缓存吗?').then(action => {
        })
      },
      aboutEdition () {
          this.about = !this.about
      }
    },
    components: {
      MessageBox,
      Popup
    }
  }
</script>
<style scoped>
  .header-content {
    width: 100%;
    margin: 0 auto;
    position: relative;
    background: deeppink;
  }

  .header-content .btn-back {
    width: 10%;
    height: 3.8rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .header-content .btn-back label {
    left: 30%;
  }

  .leftback-img {
    width: 1rem;
    height: 2.6rem;
    display: block;
    float: left;
    background: url('./7.png') no-repeat;
    position: absolute;
    left: 4%;
    top: .6rem;
  }

  .header-title {
    margin: 0 auto;
    line-height: 4rem;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .isShow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: #F2F2F2;
    height: 100%;
    width: 100%;
  }

  .dashboard li {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    margin: -1px auto 0;
  }

  .dashboard li .item-tip, .dashboard li .item-title {
    display: inline-block;
    line-height: 5rem;
    text-decoration: none;
  }

  .dashboard li .item-title {
    float: left;
    vertical-align: 0;
    font-size: 1.4rem;
    color: #585858;
  }

  .dashboard li .arr-r {
    width: 10px;
    height: 10px;
    display: inline-block;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    transform: rotate(50deg);
  }

  .dashboard li .item-tip {
    height: 5rem;
    float: right;
    text-align: right;
    font-size: 1.2rem;
    color: #ccc;
    padding-right: 5px;
  }

  .pd20 {
    padding-left: 20px;
  }
  .sect-sub {
    width: 92%;
    overflow: hidden;
    background-color: #ffffff;
    border-style: solid;
    border-color: #e3e3e3;
    border-width: 1px 0;
    text-align: left;
    font-size: 1em;
    color: #989898;
    line-height: 1.6em;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 4% 4% 5%;
  }
  .sect-sub .client, .sect-sub .title {
    overflow: hidden;
    font-size: 0.9em;
  }
  .sect-sub .app-treasure {
    width: 90%;
    text-align: center;
    font-size: 1rem;
    color: #666666;
    line-height: 1.5rem;
    padding-top: 0.4rem;
  }
  .sect-sub .client1, .sect-sub .client2, .sect-sub .client-title1, .sect-sub .client-title2 {
    width: 42%;
    float: left;
    border: 1px solid #231815;
    padding: 1.5%;
  }
  .sect-sub .client2, .sect-sub .client-title2 {
    float: right;
  }
  .sect-sub .client1, .sect-sub .client2, .sect-sub .client-title1, .sect-sub .client-title2 {
    width: 42%;
    float: left;
    border: 1px solid #231815;
    padding: 1.5%;
  }
  img {
    border: none;
    max-width: 100%;
  }
  .mt-popup{
    height:100%;
  }
</style>
