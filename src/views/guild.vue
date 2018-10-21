<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
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
        font-size: 30rem / $baseFontSize;
        .item {
            background: #fff;
            padding: 26px;
            line-height: 28px;
            margin-bottom: 16px;
            border: 1px solid #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
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
            background: #4399e8;
            color: #ffffff;
            margin: 0 auto;
        }
    }

    .zhegaiceng {
        background: rgba(0, 0, 0, 0.6);
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        .zhegaiContent {
            background: #fff;
            position: absolute;
            width: 82%;
            left: 0;
            right: 0;
            top: 2vh;
            margin: 12vh auto;
            padding: 20px 20px 5px;
            border-radius: 10px;
            .chengnuo {
                color: #232323;
                font-size: 18px;
                text-align: center;
                margin-bottom: 15px;
                font-weight: 700;
            }
            .chengnuoText {
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-indent: 1em;
                line-height: 22px;
            }
            .popupLink {
                font-size: 14px;
                text-indent: 1em;
                line-height: 22px;
                color: #096fd4;
                padding: 6px 0;
            }
        }
        .sureBox {
            margin: 30px auto 20px;
            text-align: center;
            .sure {
                background: #096fd4;
                color: #fff;
                padding: 12px 40px;
                font-size: 15px;
                border-radius: 6px;
            }
        }
    }
</style>
<template>
    <div style="min-height: 100vh;background: #f4f4f4;">
        <div class="banner">
            <img class='guildBanner' src="../assets/images/banner.png">
        </div>
        <div style="padding: 10px 15px;">
          过渡期电动自行车系统登记时间为<span style="color: #f00;">2018.11.01-2019.04.30</span>
        </div>
        <div class="jumpBox">
            <div class="item clear" @click="goPerson">
                <img class="orderIcon" src="../assets/images/geren.png">
                <span>个人申报界面</span>
                <div class="fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div class="item clear" @click.stop="goDanwei">
                <img class="orderIcon" src="../assets/images/danwei.png">
                <span>单位申请预录入界面</span>
                <div class="fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div class="item clear" @click.stop="goHistory">
                <img class="orderIcon" src="../assets/images/jilu.png">
                <span>历史申请记录(线上申请)</span>
                <div class=" fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div class="item clear" @click="goonline">
                <img class="orderIcon" src="../assets/images/guanli.png">
                <span>历史预约记录(线上预约)</span>
                <div class=" fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div v-show="userType == 1" class="item clear" @click="saoCode">
                <img class="orderIcon" src="../assets/images/sao.png">
                <span>扫描二维码(线上申请)</span>
                <div class=" fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div v-show="userType == 1" class="item clear" @click="saoCode">
                <img class="orderIcon" src="../assets/images/sao.png">
                <span>扫描二维码(线上预约)</span>
                <div class=" fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="openSimple">
            <div class="zhegaiContent">
                <h1 class="chengnuo">本人承诺</h1>
                <p class="chengnuoText">
                    在您办理过渡期电动自行车临时标识申领业务前，
                    请登录北京市工商行政管理局网站：http://www.hd315.gov.cn/,
                    查询您的电动自行车是否已列入《电动自行车生产企业与产品目录,
                    如您的电动自行车品牌型号已在公布的目录范围内，
                    请携带相关手续到全市任意非机动车登记站（详见附件）
                    办理正式登记注册业务；如您的电动自行车品牌型号未列入《电动自行车生产企业与产品目录》，
                    则需按照要求办理过渡期电动自行车临时标识申领业务。
                </p>
                <p class="popupLink" @click="handlegGoRegList">
                    <核发电动自行车牌证非机动车登记站一览表>
                </p>
                <div class="sureBox">
                    <span class="sure" @click="closeSimpleDialog">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";
    import axios from "axios";

    export default {
        data() {
            return {
                openSimple: false,
                userType: "",
                phone: ""
            };
        },
        created() {
          this.phone = localStorage.getItem("phone");
          console.log(this.phone )
          //  获取用户类型
          this.getUserType();
        },
        mounted() {
            var self = this;
            self.bridge.registerHandler("getQRCodeScanResult", function (
                data,
                responseCallback
            ) {
                //注册客户端主动触发js端
                var apply_noindex = data.qrcodeScanResult.indexOf('apply_no') + 9;
                var user_idindex = data.qrcodeScanResult.indexOf('user_id') - 1;
                console.log(apply_no, user_id, phone)
                if (data.qrcodeScanResult.indexOf('onlineverify') > 0) {//线上申请
                    var phoneindex = data.qrcodeScanResult.indexOf('phone') - 1;
                    var apply_no = data.qrcodeScanResult.substring(apply_noindex, user_idindex);
                    var user_id = data.qrcodeScanResult.substring(user_idindex + 9, phoneindex);
                    var phone = data.qrcodeScanResult.substring(phoneindex + 7);
                    self.$router.push({
                        path: '/onlineverify',
                        query: {apply_no: apply_no, user_id: user_id, phone: phone}
                    })
                } else if (data.qrcodeScanResult.indexOf('showResult') > 0) {
                    var apply_no = data.qrcodeScanResult.substring(apply_noindex, user_idindex);
                    var user_id = data.qrcodeScanResult.substring(user_idindex + 9);
                    self.$router.push({path: '/showResult', query: {apply_no: apply_no, user_id: user_id}})
                }
                var responseData = {rescode: "200"};
                responseCallback(responseData);
            });
        },
        methods: {
            goonline() {
                this.$router.push({path: "/onlinesublist"});
            },
            getUserType() {
                axios
                    .post(this.ajaxUrl + "vehicle/validate", {
                        phone: this.phone
                    })
                    .then(response => {
                        console.log(response);
                        const {data} = response;
                        const {result} = data;
                        const {rescode, resdes} = result;
                        if (rescode != 200) {
                            //  失败
                            Toast(resdes);
                        } else {
                            this.userType = response.data.type;
                            console.log(this.userType)

                        }
                    })
                    .catch(err => {
                        this.userType = null;
                        Toast(err);
                    });
            },
            saoCode() {
                this.bridge.callHandler("invokeQRCodeScan", "", function (response) {
                    console.log("js调用客户端方法回调传参" + response);
                });
            },
            goPerson() {
                this.$router.push({path: "/searchcar", query: {source: 0}});
            },
            goDanwei() {
                // this.$router.push({path:'/companyDeclar'})
                this.$router.push({path: "/searchcar", query: {source: 1}});
            },
            goHistory() {
                this.$router.push({path: "/historyList"});
            },
            openSimpleDialog() {
                this.openSimple = true;
            },
            closeSimpleDialog() {
                this.openSimple = false;
            },
            //  去一览表页面
            handlegGoRegList() {
                this.$router.push("/RegList");
            }
        }
    };
</script>


