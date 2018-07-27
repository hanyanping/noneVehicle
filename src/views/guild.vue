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
        font-size: 30rem/$baseFontSize;
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
            background: #4399E8;
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
                color: #096FD4;
                padding: 6px 0
            }
        }
        .sureBox {
            margin: 30px auto 20px;
            text-align: center;
            .sure {
                background: #096FD4;
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
                <span>历史申请记录</span>
                <div class=" fr">
                    <img class="goOrder" src="../assets/images/jiantou.png">
                </div>
            </div>
            <div v-show="userType == 0" class="item clear" @click="saoCode">
                <img class="orderIcon" src="../assets/images/sao.png">
                <span>扫描二维码</span>
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
    import {Toast} from 'mint-ui';
    import axios from 'axios';

    export default {
        data() {
            return {
                openSimple: true,
                userType: '',
                phone: '',
            };
        },
        created() {
        },
        mounted() {
            this.phone = localStorage.getItem('phone');
            //  获取用户类型
            this.getUserType();
            var self = this;
            self.bridge.registerHandler('getQRCodeScanResult', function (data, responseCallback) {//注册客户端主动触发js端
                window.location.href= data.qrcodeScanResult;
                var responseData = {'rescode': '200'}
                responseCallback(responseData)
            })
        },
        methods: {
            getUserType() {
                axios.post(this.ajaxUrl + 'vehicle/validate', {
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
                            alert(this.userType)
                        }
                    })
                    .catch(err => {
                        this.userType = null;
                        Toast(err);
                    })
            },
            saoCode() {
                alert(this.bridge)
                this.bridge.callHandler('invokeQRCodeScan', '', function (response) {
                    alert(response)
                    console.log('js调用客户端方法回调传参' + response);
                });
            },
            goPerson() {
                this.$router.push({'path': '/personalDeclaration'})
            },
            goDanwei() {
                this.$router.push({'path': '/companyDeclar'})
            },
            goHistory() {
                this.$router.push({'path': '/historyList'})
            },
            openSimpleDialog() {
                this.openSimple = true;
            },
            closeSimpleDialog() {
                this.openSimple = false;
            },
            //  去一览表页面
            handlegGoRegList() {
                this.$router.push('/RegList');
            }
        }
    }
</script>


