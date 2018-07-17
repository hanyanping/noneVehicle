<style rel="stylesheet/scss" lang="scss" scoped>
$baseFontSize:75;
.listBox {
  background: #fff;
  padding: 0 16px;
  margin: 12px 0;
  .listTop {
    padding: 10px 0;
    border-bottom: 1px solid #f4f4f4;
    font-weight: 600;
    color: #232323;
    font-size: 15px;
    .applyStatus {}
    .nopass {
      color: #f00;
    }
    .already {
      color: #bbb;
    }
    .origin {
      color: #FF7F35;
    }
    .green {
      color: #2FB86C;
    }
    .blue {
      color: #3186DB;
    }
  }
  .listMiddle {
    font-size: 15px;
    padding: 16px 0;
    .flexLeft {
      display: flex; // height:60px;
      .applayIcon {
        vertical-align: middle;
        height: 47px;
        width: 47px;
        padding-right: 6px;
      }
      .info {
        line-height: 22px;
        font-size: 14px;
        color: #696969;
      }
    }
    .flexRight {
      line-height: 60px;
      position: relative;
      .godetail {
        height: 18px;
        width: 12px;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        bottom: 5px;
        right: 0;
      }
      .goSub {
        position: absolute;
        display: inline-block;
        height: 30px;
        width: 70px;
        line-height: 30px;
        text-align: center;
        right: 0;
        background: #096FD4;
        color: #fff;
        border-radius: 4px;
        font-size: 14px;
        top: 0;
      }
    }
  }
}
</style>
<template>
  <div style="background: #f4f4f4;min-height:100vh;">
    <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore" :bottom-all-loaded="allLoaded">
      <div class="listBox" v-for="(item, index) in list" :key="index">
        <div class="flexBetween listTop">
          <span>申请时间:{{item.applyTime}}</span>
          <span v-if="item.applyStatus == 0" class="applyStatus origin">待审核</span>
          <span v-if="item.applyStatus == 1" class="applyStatus green">待预约</span>
          <span v-if="item.applyStatus == 3" class="applyStatus blue">预约成功</span>
          <span v-if="item.applyStatus == 2" class="applyStatus nopass">未通过</span>
          <span v-if="item.applyStatus == 5" class="applyStatus nopass">审核失败</span>
          <span v-if="item.applyStatus == 4" class="already">已签发</span>
        </div>
        <div class="listMiddle flexBetween" v-if="item.applyType == 1" @click='goDetail(item.applyNo,item.applyType,item.applyStatus)'>
          <div class="flexLeft">
            <img class='applayIcon godetail' src="../assets/images/geren.png">
            <div class='info'>
              <p>所有权：
                个人
              </p>
              <p>所有人：</p>
              <p>证件号码：
                <span>{{item.applyNo}}</span>
              </p>
            </div>
          </div>
          <div class="flexRight">
            <span class="goSub" @click.stop='goSubscible(item.applyNo)' v-if="item.applyStatus == 1">立即预约</span>
            <span class="goSub" @click.stop='goApply(item.applyNo,item.applyType)' v-if="item.applyStatus == 2 || item.applyStatus == 5 ">重新申请</span>
            <img @click.stop='goSubcode(item.applyNo)' v-if="item.applyStatus ==3" style='height:30px;width:30px;' src='../assets/images/look.png'>
            <img class='godetail' src="../assets/images/right.png">
          </div>
        </div>
        <div class="listMiddle flexBetween" v-if="item.applyType == 2" @click='goDetail(item.applyNo,item.applyType,item.applyStatus)'>
          <div class="flexLeft">
            <img class='applayIcon' src="../assets/images/danwei.png">
            <div class='info'>
              <p>所有权：单位</p>
              <p>所有人：</p>
              <p>证件号码：{{item.applyNo}}</p>
            </div>
          </div>
          <div class="flexRight">
             <span class="goSub" @click.stop='goSubscible(item.applyNo)' v-if="item.applyStatus == 1">立即预约</span>
            <span class="goSub" @click.stop='goApply(item.applyNo,item.applyType)' v-if="item.applyStatus == 2 || item.applyStatus == 5 ">重新申请</span>
            <img @click.stop='goSubcode(item.applyNo)' v-if="item.applyStatus ==3" style='height:30px;width:30px;' src='../assets/images/look.png'>
            <img class='godetail' src="../assets/images/right.png">
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { Loadmore, Toast } from 'mint-ui';
import moment from 'moment/moment';
import axios from 'axios'
export default {
  name: "historyList",
  data() {
    return {
      allLoaded: false,
      list: [],
      pageSize: 10,
      pageNum: 1,
      userId: '556',
      loadMore: true
    }
  },
  created() {
    document.getElementsByTagName('title')[0].innerHTML = '非机动车申请记录';
    this.userId = localStorage.getItem('userId');
    this.getDataList()
  },
  methods: {
    goSubcode(applyNo) {
      this.$router.push({ path: '/subSucess', query: { apply_no: applyNo } })
    },
    goApply(applyNo,applyType){
      if(applyType == 1){
          this.$router.push({path:'/personalDeclaration'})
      }else if(applyType == 2){
        this.$router.push({path:'/companyDeclar'})
      }
    },
    goSubscible(applyNo) {
      this.$router.push({ path: '/subscribe', query: { applyNo: applyNo } })
    },
    goDetail(applyNo, applyType, applyStatus) {
      this.$router.push({ path: '/listDetail', query: { applyNo: applyNo, applyType: applyType, applyStatus: applyStatus } })
    },
    getDataList() {
      var data = {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
        userId: 12
      }
      axios.post(this.ajaxUrl + "vehicle/userList", data)
        .then(response => {
          console.log(response);
          if (response.data.result.rescode == 200) {
            if (response.data.list.length != 0) {
              var listdata = response.data.list;
              for (var i = 0; i < listdata.length; i++) {
                listdata[i].applyTime = moment(listdata[i].applyTime).format('YYYY-MM-DD HH:mm:ss');
                this.list.push(listdata[i])
              }
            }
            if (listdata.length == 0 || listdata.length < 1) {
              this.loadMore = false;
            }
          }
          console.log(this.pageNum)

        }, err => {
          console.log(err);
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadBottom() {
      this.pageNum++;
      if (this.loadMore) {
        this.getDataList()
      } else {
        Toast('没有更多数据')

      }
      //  this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
}
</script>


