<template>
  <div class="app">
    <div class="app-content">
      <div class="hearder">
        <div class="hearder-top">
          <p class="text">全部产品</p>
        </div>
        <div class="hearder-bottom">
          <div class="bottom-left">
            <input type="search" placeholder="搜索商品" class="search">
            <input type="button" value="取消" class="searchSubmit">
          </div>
        </div>
      </div>
      <div class="good">
        <div class="good-1">
          <div class="good-ex">
            <div class="good-ex-ex">
                <div class="ex-h">
                  <span class="ex-h-h">家务</span>
                </div>
                <ul id="lis">
                  <li>
                    <img src="./jiawu.jpg" alt="">
                  </li>
                  <li>
                    <img src="./qinjieji.jpg" alt="">
                  </li>
                  <li>
                    <img src="./fanwu.jpg" alt="">
                  </li>
                  <li>
                    <img src="./xiangzi.jpg" alt="">
                  </li>
                  <li>
                    <img src="./shouna.jpg" alt="">
                  </li>
                  <li>
                    <img src="./xiyiye.jpg" alt="">
                  </li>
                  <li>
                    <img src="./moli.jpg" alt="">
                  </li>
                  <li>
                    <img src="./shenhuo.jpg" alt="">
                  </li>
                  <li>
                    <img src="./ditan.jpg" alt="">
                  </li>
                </ul>
              </div>
            <div class="good-ex-ex">
              <div class="ex-h">
                <span class="ex-h-h">家务</span>
              </div>
              <ul id="lis">
                <li>
                  <img src="./jiawu.jpg" alt="">
                </li>
                <li>
                  <img src="./qinjieji.jpg" alt="">
                </li>
                <li>
                  <img src="./fanwu.jpg" alt="">
                </li>
                <li>
                  <img src="./xiangzi.jpg" alt="">
                </li>
                <li>
                  <img src="./shouna.jpg" alt="">
                </li>
                <li>
                  <img src="./xiyiye.jpg" alt="">
                </li>
                <li>
                  <img src="./moli.jpg" alt="">
                </li>
                <li>
                  <img src="./shenhuo.jpg" alt="">
                </li>
                <li>
                  <img src="./ditan.jpg" alt="">
                </li>
              </ul>
            </div>
            <div class="good-ex-ex">
              <div class="ex-h">
                <span class="ex-h-h">家务</span>
              </div>
              <ul id="lis">
                <li>
                  <img src="./jiawu.jpg" alt="">
                </li>
                <li>
                  <img src="./qinjieji.jpg" alt="">
                </li>
                <li>
                  <img src="./fanwu.jpg" alt="">
                </li>
                <li>
                  <img src="./xiangzi.jpg" alt="">
                </li>
                <li>
                  <img src="./shouna.jpg" alt="">
                </li>
                <li>
                  <img src="./xiyiye.jpg" alt="">
                </li>
                <li>
                  <img src="./moli.jpg" alt="">
                </li>
                <li>
                  <img src="./shenhuo.jpg" alt="">
                </li>
                <li>
                  <img src="./ditan.jpg" alt="">
                </li>
              </ul>
            </div>
            <div class="good-ex-ex">
              <div class="ex-h">
                <span class="ex-h-h">家务</span>
              </div>
              <ul id="lis">
                <li>
                  <img src="./jiawu.jpg" alt="">
                </li>
                <li>
                  <img src="./qinjieji.jpg" alt="">
                </li>
                <li>
                  <img src="./fanwu.jpg" alt="">
                </li>
                <li>
                  <img src="./xiangzi.jpg" alt="">
                </li>
                <li>
                  <img src="./shouna.jpg" alt="">
                </li>
                <li>
                  <img src="./xiyiye.jpg" alt="">
                </li>
                <li>
                  <img src="./moli.jpg" alt="">
                </li>
                <li>
                  <img src="./shenhuo.jpg" alt="">
                </li>
                <li>
                  <img src="./ditan.jpg" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  .app{
  }
  .app-content{
    position: relative;
  }
  .hearder{
    width: 100%;
    position: fixed;
    z-index: 100;
    top:0;
    background: #89be48;
  }
  .hearder-top{
    width: 100%;

    text-align: center;
  }
  .text{
    width: 80%;
    font-size: 20px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }
  .hearder-bottom{
    width: 100%;
    background-color: #f2f2f2;
    padding: 6px 0;
    overflow: hidden;
  }
  .bottom-left{
    width: 94%;
    border-radius: 6px;
    height: 36px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .search{
    width: 100%;
    height: 36px;
    background-color: #fff;
    text-align: center;
    background-image: url("./83vb29b4d2jkaqudst78yq0krri72fm4.png");
    background-repeat: no-repeat;
    background-size: auto 70%;
    background-position: 37% 6px;
    font-size: 16px;
    padding-left: 24px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .searchSubmit{
    width:15%;
    height: 36px;
    display: block;
    float: right;
    outline: none;
    background-color: transparent;
    text-align: right;
    font-size: 18px;
    line-height: 36px;
    color: #83b842;
  }
  .good{
    position: absolute;
    width: 100%;
    top: 96px;
    height: 513px;
    overflow-y: scroll;
  }
  .good-1{
    overflow: hidden;
    background-color: #f2f2f2
  }
  .good-ex-ex{
    margin-top: 24px;
  }
  .good-ex{
    overflow: hidden;
  }
  .ex-h{
    width: 120px;
    margin: auto;
    text-align: center;
    height: 36px;
  }
  .ex-h-h{
    display: block;
    line-height: 28px;
    font-size: 20px;
    letter-spacing: 2.4px;
    font-family: Microsoft YaHei;
  }
  #lis{
    background: #fff;
    overflow: hidden;
  }
  #lis li{
    float: left;
  }
</style>
