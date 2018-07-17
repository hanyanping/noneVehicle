<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  .banner {
    width: 100%;
    .guildBanner {
      height: 100%;
      width: 100%;
    }
  }
  .jumpBox {
    margin-top: 10px;
    padding: 16px;
    color: #3d3d3d;
    font-size: 30rem/$baseFontSize;
    .item {
      background: #fff;
      padding: 26px;
      line-height: 28px;
      margin-bottom: 16px;
      border: 1px solid #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 15px 6px rgba(209,209,209,0.25);
      .orderIcon {
        height: 35px;
        width: 35px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
      .goOrder {
        height: 14px;
        width: 18px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .dialog__warpper {
    .dialog__body {
      text-indent: 2em;
      font-size: 12px;
      text-align: justify;
    }
    .popupLink {
      height: 23px;
      color: rgba(24, 114, 219, 1);
      font-size: 12px;
      margin-top: 12px;
    }
    .dialog__but {
      width: 133px;
      height: 34px;
      font-size: 14px;
      background: #4399E8;
      color: #ffffff;
      margin: 0 auto;
    }
  }
</style>
<template>
  <div style="min-height: 100vh;background: #f4f4f4;">
    <div class="banner">
      <img class='guildBanner' src="../assets/images/banner.png">
    </div>
    <div class="jumpBox">
      <div class="item clear" @click="goPerson" >
        <img class="orderIcon" src="../assets/images/geren.png">
        <span>个人申报</span>
        <div class="fr" >
          <img class="goOrder" src="../assets/images/jiantou.png">
        </div>
      </div>
      <div class="item clear" @click.stop="goDanwei">
              <img class="orderIcon" src="../assets/images/danwei.png">
              <span>单位预录入</span>
          <div class="fr" >
              <img class="goOrder"  src="../assets/images/jiantou.png">
          </div>
      </div>
      <div class="item clear" @click.stop="goHistory">
              <img class="orderIcon" src="../assets/images/jilu.png">
              <span>历史申请记录</span>
        <div class=" fr" >
          <img class="goOrder"  src="../assets/images/jiantou.png">
        </div>
      </div>
      <div v-show="userType == 2" class="item clear">
        <img class="orderIcon" src="../assets/images/sao.png">
        <span>扫描二维码</span>
        <div class=" fr" >
          <img class="goOrder" src="../assets/images/jiantou.png">
        </div>
      </div>
    </div>
    <!-- <mu-dialog dialog-class="dialog__warpper" title="提示" width="360" :open.sync="openSimple">
      <div class="dialog__body">
        在您办理过渡期电动自行车临时标识申领业务前，
        请登录北京市工商行政管理局网站：http://www.hd315.gov.cn/,
        查询您的电动自行车是否已列入《电动自行车生产企业与产品目录,
        如您的电动自行车品牌型号已在公布的目录范围内，
        请携带相关手续到全市任意非机动车登记站（详见附件）
        办理正式登记注册业务；如您的电动自行车品牌型号未列入《电动自行车生产企业与产品目录》，
        则需按照要求办理过渡期电动自行车临时标识申领业务。
      </div>
      <p class="popupLink" @click="handlegGoRegList">核发电动自行车牌证非机动车登记站一览表></p>
      <mu-button
        slot="actions"
        flat
        color="primary"
        class="dialog__but"
        @click="closeSimpleDialog">确认
      </mu-button>
    </mu-dialog> -->
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios';

export default {
  data(){
    return{
      openSimple: true,
      userType: null,
        phone: ''
    };
  },
  created() {
    document.getElementsByTagName('title')[0].innerHTML = '过渡期电动自行车';
    this.phone =  localStorage.getItem('phone');
  },
  mounted() {
    //  获取用户类型
    this.getUserType();

 
  },
  methods:{
    getUserType() {
      axios.post(this.ajaxUrl + 'vehicle/validate', {
        phone: 15901456326
        //   phone: this.phone
      })
        .then(response => {
          console.log(response);
          const { data } = response;
          const { result } = data;
          const { rescode, resdes, type } = result;
          if (rescode != 200) {
            //  失败
            Toast(resdes);
          } else {
            this.userType = type;
          }
        })
        .catch(err => {
          this.userType = null;
          Toast(err);
        })
    },
    goPerson() {
        console.log(3333)
      this.$router.push({'path':'/personalDeclaration'})
    },
    goDanwei() {
      this.$router.push({'path':'/companyDeclar'})
    },
    goHistory() {
      this.$router.push({'path':'/historyList'})
    },
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
    //  去一览表页面
    handlegGoRegList() {
      this.$router.push('/RegList');
    }
  }
}
</script>


