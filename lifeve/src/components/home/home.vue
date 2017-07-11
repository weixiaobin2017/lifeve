<template>
  <div class="app">
    <div class="hearder">
      <div class="header-top">
        <div class="header-left"></div>
        <router-link to="/goods">
          <span class="header-right"></span>
        </router-link>
      </div>
      <div class="hearder-bottom">
        <ul class="nav">
          <li>
            <router-link to="/home/homepage">首页</router-link>
          </li>
          <li>
            <router-link to="/home/news">新品</router-link>
          </li>
          <li>
            <router-link to="/home/homework">家务</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">下厨</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">家居服</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">生活</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">软装</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">床品</router-link>
          </li>
          <li>
            <router-link to="/home/homepage">工作和旅行</router-link>
          </li>
          <li @click="show">
            <a href="#">解LifeVC</a>了
          </li>
        </ul>
      </div>
    </div>
    <transition name="fode">
      <div v-show="isShow" class="h-min">
        <div class="h-max">
          <div class="h-content">
            <div class="h-top">
          <span class="h-left" @click="show">
            <label class="s-l"></label>
          </span>
              <div class="h-right">
                了解LifeVC
              </div>
            </div>
          </div>
          <div class="container" >
            <section class="sect">
              <h3>0.3%</h3>
              <h4>我们质量瑕疵退货率：0.3%</h4>
              <div class="cont">
                <p>
                  我们的委托生产供应商，给欧美客户的外贸家居订单，产品质量瑕疵率标准，通常在1.5%左右，但我们对委托生产商的质量要求，是0.5%！而在过去一年的时间里，我们的产品，因为质量瑕疵的退货率，低至0.3% —— 即每售出100件商品，只有0.3件产品，会因为质量瑕疵而退货。我们像捍卫我们生命一样，在捍卫我们的产品质量。</p>
              </div>
            </section>
            <section class="sect">
              <h3>99.5%</h3>
              <h4>我们客服满意率：99.5%</h4>
              <div class="cont">
                <p>
                  如果你拨打我们的服务热线，在通话结束时，我们都会邀请你“对本次服务打分，满意请按1，不满意请按0”。放心，这个电话评分不是摆设，如果你按了0，第二天，我们客户服务中心的高级经理，就会亲自打电话给你，向你致歉，为你解决问题。</p>
                <p>正是因为日复一日、年复一年的自我纠错，我们目前的客服电话评分满意率，已经达到了99.5%—— 每100个来电，只有0.5个消费者，对我们的服务表示不满意，这令我们非常自豪，当然我们还需要继续努力。</p>
              </div>
            </section>
            <section class="sect">
              <h3>第1个</h3>
              <h4>每一件产品，我都是第一个试用者。</h4>
              <div class="cont">
                <p>
                  真的， 每一件新产品，我都是第一个试用者，当然，除了我以外，我们还有一个产品体验官部门，她们专门负责新品试用工作。“这件产品，我会用么？我会买么？我会满意么？”这三个问题，是我问的最多的问题。每一件新产品，我们既是设计者，也必须是第一个使用者，只有通过亲身试用，我们才能发现产品还不够完美的地方，并持续改进。对消费者负责，总归是对的！</p>
              </div>
            </section>
            <section class="sect">
              <h3>4级质检</h3>
              <h4>我们努力确保每一件产品0瑕疵</h4>
              <div class="cont">
                <p>
                  每天，我们将近100人的质量团队，会对正在销售的产品，进行4轮严格的质量检查：原材料质检、生产GB/QB质检、产品入库全检，以及包裹出库AQZ质检，努力确保你拿到的每件产品，都没有任何瑕疵。在中国，我们把大部分的精力，都投在了产品研发和质量控制中，因为我们相信，好产品，就是最好的广告。</p>
              </div>
            </section>
            <section class="sect">
              <h3>0时限</h3>
              <h4>质量原因退换货，永不设时限</h4>
              <div class="cont">
                <p>
                  “LifeVC，陪你生活一辈子”，这是我们的品牌梦想，也是我们的承诺：如果产品在使用过程中出现质量瑕疵，哪怕这件产品，你已经使用了一年、三年、五年，我们都会免费为你更换或者退货。陪你生活一辈子，就是承诺：对产品品质负责一辈子。</p>
                <p>
                  曾经有朋友问我：“你们承诺质量原因退换货，永不设时限，难道不怕有恶意的消费者钻空子？”我们问过自己，会有多少这样的消费者？0.1%？0.01%？可能有，但我们绝对不会因为这0.01%的消费者，而放弃对99.99%的消费者，提供更好服务的初衷。</p>
              </div>
            </section>
            <section class="sect">
              <h3>8小时</h3>
              <h4>8小时快速退款</h4>
              <div class="cont">
                <p>
                  我也经常会在网上购物，我有着和你一样的想法：退货省心么？所以在中国，我们推出了“8小时退款”承诺：如果你对收到的产品不满意，只需一个电话：4006092288，超便捷快速退货，包裹退仓后，8小时之内快速退款。</p>
              </div>
            </section>
            <section class="sect">
              <h3>15天</h3>
              <h4>15天促销差价补偿</h4>
              <div class="cont">
                <p>
                  错过促销，总让人觉得不开心。所以，我们还推出了15天促销保护服务：在你今天下单起的15天内，如果你购买的产品降价促销，你只需去“个人账户-促销差价补偿”版块，即可自助获得促销差价补偿，这个服务很受大家的欢迎。</p>
              </div>
            </section>
            <section class="sect">
              <h3>30天</h3>
              <h4>30天无理由退换货</h4>
              <div class="cont">
                <p>
                  是的，国家《消法》规定是7天无理由退换货，但为什么就不能给用户，更长一点思考时间呢？所以，我们把无理由退换货时间，定在了30天：自你包裹签收之日起30天内，你都可以无理由退换货。我们始终相信，只要产品过硬、用户满意，7天还是30天无理由退货期，没什么区别。</p>
              </div>
            </section>
            <section class="sect sect2">
              <h3>品牌及价值观：</h3>
              <h4>对消费者好，总归是对的</h4>
              <div class="cont">
                <p>“做一个有品质、有气质，受人喜欢、受人尊敬的品牌”，这在LifeVC，是最核心的价值观。</p>
                <p>珍惜品牌声誉，倾听每一个消费者的声音，包括她们的赞誉和抱怨，用心为她们设计、生产最优质的产品，并提供真诚的服务。在LifeVC，我们常常要求员工假设：如果是自己的家人在购买产品，该如何工作？
            <img src="http://i4.lifevccdn.com/Images/m/Service/ser_lifevcDesigners.jpg"></p>
              </div>
            </section>
            <section class="sect sect2">
              <h3>产品：</h3>
              <h4>我们力求使用最好的材料</h4>
              <div class="cont">
                <p>我曾经问我们的产品经理：我们的沙发，消费者会只用四五年就扔掉么？我们的不锈钢保温壶，消费者会只用一两年就扔掉么？我们的拖把，消费者会只用半年就扔掉么？不会！</p>
                <p>所以我们必须力求使用最好的材料，用最好的钢材、用最好的棉纱、用最好的陶瓷、用最好的电路板、用最好的元器件……的确，会耗工时、会费成本，但我们坚信，消费者是识货的。</p>
              </div>
            </section>
            <section class="sect sect2">
              <h3>销售：</h3>
              <h4>在中国，LifeVC 仅在官方网站销售</h4>
              <div class="cont">
                <p>采用网络销售，可以让我们降低成本，以更低的价格，让大家买到更高品质的产品，而为了确保品牌形象、服务质量始终如一，在中国，LifeVC仅在官方网站进行销售。</p>
              </div>
            </section>
            <section class="sect sect2 sect-end">
              <h3>服务：</h3>
              <h4>如果你有不满意<br>那一定是我们做得还不够好</h4>
              <div class="cont">
                <p>在售后服务上，我们始终秉承一个原则：如果我是消费者，我希望得到什么样的服务？</p>
                <p>
                  所以在中国，我们陆续推出了：30天无理由退货、8小时快速退款承诺、15天促销差价补偿、质量瑕疵退换货无时限，等一系列受人欢迎的售后服务措施。在中国，我们已累计服务了1千万会员，努力让每一个会员都满意，这是你的信任所赋予我们的责任。</p>
                <p>感谢你今天光顾LifeVC。</p>
              </div>
            </section>
            <div class="signature">
              <p><img src="http://i1.lifevccdn.com/Images/m/signature_trans@2x.png"></p>
              <p>LifeVC丽芙家居（中国）CEO：Rico.S</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
      data() {
          return{
              isShow:false
          }
      },
    methods:{
      show () {
          this.isShow=!this.isShow
      }
    }
  }
</script>
<style scoped>
  .app{
    background-color: #f2f2f2;
  }
  .hearder{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
  }
  .header-top{
    width: 100%;
    background: #89be48;
    position: relative;
  }

  .header-left{
    width: 100%;
    height: 48px;
    background: url("./ocl0n2wo7fpksqy6mzzb4b7h1qus4kp9.png") no-repeat;
    background-size: 50%;
    background-position: 50%;
  }

  .header-right{
    display: block;
    width: 44px;
    height: 44px;
    background: url("./lx6t5yxac1q2v3eyy3h03w5j8kj8t5xj.png") no-repeat;
    background-size: 45%;
    background-position: 50%;
    float: right;
    position: absolute;
    top:0;
    right:0;
  }
  .hearder-bottom{
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 48px;
    overflow-x: scroll;
    background: #fff;
  }
  .nav{
    width: 800px;
    line-height: 48px;
    overflow: hidden;
  }
  .nav li{
    width: 80px;
    text-align: center;
    float: left;
    border-bottom: 2px solid #ddd;
  }
  .nav li a{
    height: 46px;
    display: block;
    line-height: 46px;
    padding: 0;
    position: relative;
    font-size: 13px;
  }
  .h-min{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: 1000;
    background: #fff;
  }
  .h-max{
    width: 100%;
    overflow: auto;
    height: 100%;
  }
  .h-content {
    width: 100%;
    margin: 0 auto;
    background: #89BE48;
    position: fixed;
    top:0;
  }

  .h-top {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }

  .h-top .h-right {
    width: 80%;
    text-align: center;
    font-size: 24px;
    margin: 0 auto;
    line-height: 48px;
    color: #fff;
  }

  .h-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 46px;
    float: left;
  }

  .h-left .s-l {
    width: 12px;
    height: 31px;
    position: absolute;
    top: 7px;
    left: 30%;
    background-image: url("./1.png");
    background-repeat: no-repeat;
  }
  .sect{
    width: 92%;
    text-align: left;
    border-bottom: 1px solid #d9d9d9;
    margin: 0 auto;
    padding: 30px 0 0;
  }
  .container{
    margin-top: 48px;
  }
  .sect h3{
    display: block;
    text-align: left;
    font-size: 24px;
    color: #333333;
    line-height: 28px;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  .sect h4 {
    display: block;
    text-align: left;
    font-size: 19px;
    color: #666666;
    line-height: 34px;
    font-weight: bold;
    margin: 0;
    padding: 0 0 2px;
  }
  .sect .cont {
    width: 96%;
    overflow: hidden;
    font-size: 16px;
    color: #666666;
    line-height: 30px;
    padding: 0;
  }
  .sect .cont p {
    display: block;
    overflow: hidden;
    padding-bottom: 30px;
  }
  .signature{
    width: 92%;
    overflow: hidden;
    display: block;
    text-align: right;
    font-size: 1em;
    color: #333333;
    line-height: 2.2em;
    padding: 0 0 1.5em;
  }
  .signature p {
    width: 100%;
    display: block;
    overflow: hidden;
    text-align: right;
  }
  .signature img {
    width: 38%;
    display: block;
    float: right;
  }
  .fode-enter-active,.fode-leave-active{
    transition: all .3s linear;
  }
  .fode-enter, .fode-leave-to {
    transform: translateX(100%);
  }
</style>
