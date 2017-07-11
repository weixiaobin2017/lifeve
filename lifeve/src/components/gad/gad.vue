<template>
  <div>
    <div id="stroll-header"><!---->
      <header id="topbar" class="header">
        <div class="header-content"> <!---->
          <p class="header-title">闲逛</p>
        </div>
      </header>
      <div style="margin-top: 48px;">
        <div class="page-loadmore-wrapper">
          <div class="mint-loadmore">
            <mt-loadmore :top-method="loadTop" ref="loadmore">
              <div class="mint-loadmore-content" style="transform: translate3d(0px, 0px, 0px);">
                <div class="clearFix" style="background: white;">
                  <div class="stroll-all-item">
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">分类整理收纳箱</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>49</em></span> <span class="comment">月销 4082</span>
                        </div>
                      </div> <!----> <!----></div><!----><!----><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/06cde94e3e4f4c2093b33fdcb1cb4726.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">可挂式防潮除湿剂(8袋装)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>30</em></span> <span class="comment">月销 5279</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">加拿大原生木浆抽纸（12包）</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span class="comment">月销 8141</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/66986bc8c2d04e61ae6ba5c204872d71.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">大容量防潮除湿桶(可重复使用)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>19</em></span> <span class="comment">月销 11067</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/38226fd7a3c64442bc97b11f5a28dacf.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">精梳棉护肤毛巾(莎曼系列)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>69</em></span> <span class="comment">月销 4794</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5bd7fb413e314b65bac79a011d103dc6.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">折叠式差旅多功能包</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>49</em><span class="original">￥69</span></span>
                          <span class="comment">月销 2876</span></div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/379a0fa95c074bd0a20187ae93b5e8ca.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">超强韧飞机轮旅行箱(摩洛哥)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>399</em></span> <span class="comment">月销 1181</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5fa0ef2bd72445b59fbc18224401f01e.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">时尚舒适休闲拖鞋</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>25</em></span> <span class="comment">月销 4379</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/a3f8e245f00442a9bac37236e91264a7.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">白领飞机轮旅行箱(威尼斯)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>329</em><span
                          class="original">￥399</span></span> <span class="comment">月销 1075</span></div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/7bf8d0276c6845de8a462761fa1c2aa6.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">高端合金框飞机轮商务箱</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>399</em></span> <span class="comment">月销 898</span>
                        </div>
                      </div> <!----> <!----></div>
                  </div>

                </div>
                <div class="stroll-bottom" style="display: none;">
                  <div class="stroll-loading"><span class="cont"></span><span
                    class="snakehead"></span></div>
                  <div class="stroll-bottom-txt">加载中</div>
                </div> <!----></div>
              <div class="mint-loadmore-content" style="transform: translate3d(0px, 0px, 0px);">
                <div class="clearFix" style="background: white;">
                  <div class="stroll-all-item">
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">分类整理收纳箱</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>49</em></span> <span class="comment">月销 4082</span>
                        </div>
                      </div> <!----> <!----></div><!----><!----><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/06cde94e3e4f4c2093b33fdcb1cb4726.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">可挂式防潮除湿剂(8袋装)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>30</em></span> <span class="comment">月销 5279</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">加拿大原生木浆抽纸（12包）</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>29</em></span> <span class="comment">月销 8141</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/66986bc8c2d04e61ae6ba5c204872d71.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">大容量防潮除湿桶(可重复使用)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>19</em></span> <span class="comment">月销 11067</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/38226fd7a3c64442bc97b11f5a28dacf.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">精梳棉护肤毛巾(莎曼系列)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>69</em></span> <span class="comment">月销 4794</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5bd7fb413e314b65bac79a011d103dc6.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">折叠式差旅多功能包</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>49</em><span class="original">￥69</span></span>
                          <span class="comment">月销 2876</span></div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/379a0fa95c074bd0a20187ae93b5e8ca.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">超强韧飞机轮旅行箱(摩洛哥)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>399</em></span> <span class="comment">月销 1181</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/5fa0ef2bd72445b59fbc18224401f01e.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">时尚舒适休闲拖鞋</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>25</em></span> <span class="comment">月销 4379</span>
                        </div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/a3f8e245f00442a9bac37236e91264a7.jpg"
                                                            lazy="loaded"> <!----></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">白领飞机轮旅行箱(威尼斯)</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>329</em><span
                          class="original">￥399</span></span> <span class="comment">月销 1075</span></div>
                      </div> <!----> <!----></div><!---->
                    <div class="stroll-item">
                      <div class="stroll-type-item">
                        <div class="stroll-item-layer"><img class="stroll-item-img"
                                                            src="http://i.lifevccdn.com/upload/stroll/7bf8d0276c6845de8a462761fa1c2aa6.jpg"
                                                            lazy="loaded"> <span class="tag-new">New</span></div>
                        <h3 class="stroll-item-title"><a href="javascript:void(0);">高端合金框飞机轮商务箱</a></h3>
                        <div class="stroll-price-bar"><span class="price">￥<em>399</em></span> <span class="comment">月销 898</span>
                        </div>
                      </div> <!----> <!----></div>
                  </div>

                </div>
                <div class="stroll-bottom" style="display: none;">
                  <div class="stroll-loading"><span class="cont"></span><span
                    class="snakehead"></span></div>
                  <div class="stroll-bottom-txt">加载中</div>
                </div> <!----></div>
            </mt-loadmore>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loadmore from 'mint-ui/lib/loadmore'
  export default{
    created () {
      this.things = [
        {
          types: 'clearfix',
          image: 'http://i.lifevccdn.com/upload/stroll/e726ff1fb1d44685a91cf76ff56d5018.jpg',
          tagnew: true,
          name: '分类整理收纳箱',
          price: '49',
          mouthsell: 4082
        },
        {
          types: 'clearfix',
          image: 'http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg',
          tagnew: false,
          name: '加拿大原生木浆抽纸（12包）',
          price: '29',
          mouthsell: 8141
        },
        {
          types: 'clearfix',
          image: 'http://i.lifevccdn.com/upload/stroll/5b388119f79444ba889c4f6b9a118bad.jpg',
          tagnew: true,
          name: '大容量防潮除湿桶(可重复使用)',
          price: '19',
          mouthsell: 11067
        }
      ]
    },
    data () {
      return {}
    },
    methods: {
      loadTop () {
        this.$refs.loadmore.onTopLoaded()
      }
    },
    components: {Loadmore},
    computed: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  header
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
      .header-title
        margin: 0 auto;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

  .page-loadmore-wrapper
    .mint-loadmore
      overflow: hidden;
      .mint-loadmore-top
        margin-top: -50px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        .mint-loadmore-text
          vertical-align: middle;
      .stroll-all-item
        width: 50%;
        height: 50%
        float: left;
        .stroll-item
          margin: 3%;
          width: 94%;
          clear: both;
          .stroll-type-item
            margin: 0 1%;
            .stroll-item-layer
              position: relative;
              border-radius: 8px;
              .stroll-item-img
                width: 100%
                border-radius: 8px;
              .tag-new
                background-color: #79da87;
                max-width: 94%;
                overflow: hidden;
                display: inline-block;
                text-align: left;
                font-size: .8rem;
                color: #fff;
                line-height: 1.4rem;
                text-transform: uppercase;
                padding: 0 .5rem;
                position: absolute;
                left: 0;
                top: .8rem;
                z-index: 6;
                white-space: nowrap;
                word-break: keep-all;
                text-overflow: ellipsis;
            .stroll-item-title
              font-size: .95rem;
              padding: .4rem 0 .2rem;
              overflow: hidden;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis;
              a
                color: #333;
                text-decoration: none;
                font-size: 1.35rem;
            .stroll-price-bar
              text-align: left;
              width: 100%;
              font-size: .9rem;
              height: 1.5rem;
              overflow: hidden;
              .price
                font-size: 1.8rem;
                line-height: 1.5rem;
                display: inline-block;
                color: #ff475d;
                font-weight: 400;
                overflow: hidden;
                text-align: left;
                width: auto;
              .comment
                font-size: 1.4rem;
                line-height: 1.5rem;
                width: auto;
                max-width: none;
                overflow: hidden;
                float: right;
                display: inline-block;
                text-align: right;
                color: #999;
                white-space: nowrap;
                word-break: keep-all;
                text-overflow: ellipsis;


</style>
