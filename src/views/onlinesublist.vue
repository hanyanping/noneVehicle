<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
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
            .applyStatus {
            }
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
        <div v-if='noData' class="scroll">
            <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                         :bottom-all-loaded="allLoaded">
                <div class="listBox" v-for="(item, index) in list" :key="index">
                    <div class="flexBetween listTop">
                        <span>申请时间 : {{item.applyTime}}</span>
                        <span v-if="item.status == '预约成功'" class="applyStatus blue">预约成功</span>
                        <span v-if="item.status == '已签发'" class="already">已签发</span>
                        <span v-if="item.status == '现场审核不通过'" class="applyStatus nopass">现场审核不通过</span>
                    </div>
                    <div class="listMiddle flexBetween" v-if="item.type == 1"
                         @click='goDetail(item.applyNo, item.type, item.status)'>
                        <div class="flexLeft">
                            <img class='applayIcon godetail' src="../assets/images/geren.png">
                            <div class='info'>
                                <p>申请类型：个人
                                </p>
                                <p>证件名称：{{item.creName}}</p>
                                <p>证件号码：
                                    <span>{{item.code}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="flexRight">

                            <img @click.stop='goSubcode(item.appointmentTime,item.applyNo)' v-if="item.status =='预约成功'"
                                 style='height:30px;width:30px;' src='../assets/images/look.png'>
                            <img class='godetail' src="../assets/images/right.png">
                        </div>
                    </div>
                    <div class="listMiddle flexBetween" v-if="item.type == 2">
                        <div class="flexLeft">
                            <img class='applayIcon' src="../assets/images/danwei.png">
                            <div class='info'>
                                <p>所有权：单位</p>
                                <p>所有人：{{item.name}}</p>
                                <p>证件号码：{{item.code}}</p>
                            </div>
                        </div>
                        <div class="flexRight">
                            <img @click.stop='goSubcode(item.appointmentTime,item.applyNo)' v-if="item.status =='预约成功'"
                                 style='height:30px;width:30px;' src='../assets/images/look.png'>
                            <img class='godetail' src="../assets/images/right.png">
                        </div>
                    </div>
                </div>
            </mt-loadmore>
        </div>
        <div v-else style="margin: 0 auto;padding-top: 100px;text-align: center;color: #f00;font-weight: 600;font-size: 18px;">
            您还没有预约记录
        </div>
    </div>
</template>

<script>
    import {Loadmore, Toast} from 'mint-ui';
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
                userId: '',
                loadMore: true,
                noData: true
            }
        },
        created() {

        },
        mounted() {
            this.userId = localStorage.getItem('userId');
            // this.userId = '8C4C15479B0343ECBBA90540E059156D'
            this.getDataList()
        },
        methods: {
            goSubcode(appointmentTime, applyNo) {
                console.log(appointmentTime)
                localStorage.setItem('appointmentTime', appointmentTime);

                this.$router.push({path: '/subscribecode', query: {apply_no: applyNo, code: 1}})
            },
            goApply(applyNo, applyType) {
                if (applyType == 1) {
                    this.$router.push({path: '/personalDeclaration'})
                } else if (applyType == 2) {
                    this.$router.push({path: '/companyDeclar'})
                }
            },
            goSubscible(applyNo) {
                this.$router.push({path: '/subscribe', query: {applyNo: applyNo}})
            },
            goDetail(applyNo, applyType, applyStatus) {
                this.$router.push({
                    path: '/onlinelistDetail',
                    query: {applyNo: applyNo, applyType: applyType, applyStatus: applyStatus}
                })
            },
            getDataList() {
                var data = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    userId: this.userId,
                    type: 2
                }
                axios.post(this.ajaxUrl + "vehicle/userList", data)
                    .then(response => {
                        console.log(response);
                        var listdata = response.data.list;
                        if (response.data.result.rescode == 200) {
                            if (response.data.list.length != 0) {
                                this.noData = true;

                                for (var i = 0; i < listdata.length; i++) {
                                    listdata[i].applyTime = moment(listdata[i].applyTime).format('YYYY年MM月DD日');
                                    this.list.push(listdata[i])
                                }
                            }
                            if (listdata.length == 0 || listdata.length < this.pageSize) {
                                this.loadMore = false;
                                this.noData = true;
                                if(listdata.length == 0 && this.pageNum == 1){
                                    console.log(this.pageNum)
                                    this.noData = false;
                                }
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

