<template>
  <div>
    <ul class="footer">
      <li class="lis">
        <router-link to="/home" >
          <div class="ico home"></div>
          <span>首页</span>
        </router-link>
      </li>
      <li class="lis">
        <router-link to="/goods">
          <div class="ico goods"></div>
          <span>全部产品</span>
        </router-link>
      </li>
      <li class="lis">
        <router-link to="/gad">
          <div class="ico gad"></div>
          <span>闲逛</span>
        </router-link>
      </li>
      <li class="lis">
        <router-link to="/shop">
          <div class="ico shop"></div>
          <span>购物车</span>
        </router-link>
      </li>
      <li class="lis">
        <router-link to="/center">
          <div class="ico content"></div>
          <span>账户中心</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    background: #f8f8f8;
    border-top: .04rem solid #ddd
  }
  .home{
    background: url("./lqbrtu24j70kwzpxewl2naga6nn8ze04.png") no-repeat;
  }
  .goods{
    background: url("./zlixn9w8pbv5y6xvcmphpwe8dqhyv90u.png") no-repeat;
  }
  .gad{
    background: url("./one8s51syc100ev54zwrpu6rvxl30w97.png") no-repeat;
  }
  .shop{
    background: url("./cqr56d149qqht66oa7n7fs6oqzj9pgyw.png") no-repeat;
  }
  .content{
    background: url("./r59gqd3h6g8efca0gzl7w5j4t1sxmvxu.png") no-repeat;
  }
  .ico{
    width: 100%;
    height: 40px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
  }
  .lis{
    width: 20%;
    float: left;
    margin: 0 auto;
    text-align: center;
    vertical-align: bottom;
    font-size: 13px;
  }
  .active{
    color: red;
  }
</style>
