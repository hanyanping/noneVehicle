<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .text {
        font-size: 28rem/$baseFontSize;
    }

    .upload {
        position: relative;
        width: 30%;
        height: 100px; // 图片展示
        .cha {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100px;
            border-radius: 6px;
            /*overflow: hidden;*/
            box-sizing: border-box;
            .layer {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100px;
                background-color: rgba(0, 0, 0, 0.3);
                text-align: center;
                line-height: 100px;
                opacity: 0;
                color: #ffffff;
                border: none;
            }
            .del {
                position: absolute;
                bottom: 0;
                right: 0;
                opacity: 0;
                z-index: 2;
                border: none;
            }
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                object-fit: cover;
            }
        }
        //鼠标放上时显示删除和放大
        .cha:hover .layer,
        .cha:hover .del {
            opacity: 1;
        }
        .load {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            .loadImg {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
            input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
        }
        .load::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 80%;
        }
        .load:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 1px;
        }
    }

    .submitBox {
        background: #fff;
        padding: 40px;
        .submit {
            height: 40px;
            width: 120px;
            line-height: 40px;
            border-radius: 10px;
            background: #26a2ff;
            color: #fff;
            text-align: center;
            margin: 0px auto;
        }
    }

    .textBox {
        color: #666;
        padding: 15px;
        height: 20px;
        line-height: 20px;
        .text {
            padding-left: 6px;
            font-size: 16px;
        }
    }

    .inputText {
        color: #f00;
        vertical-align: middle;
    }

    .inputBox {
        padding: 12px;
        background: #fff;
        border-bottom: 1px solid #f4f4f4;

        .textDetail {
            color: #232323;
            font-size: 14px;
        }
        .textInput {
            text-align: right;
            font-size: 14px;
            color: #232323;
            font-family: Microsoft Yahei;
            text-align: right;
        }
        .selectText {
            font-size: 14px;
            color: #bbb;
            padding-right: 16px;
            font-family: Microsoft Yahei;
            text-align: right;
        }
        .tanInput {
            padding-right: 25px;
        }
        .selectImg {
            height: 8px;
            width: 12px;
            position: absolute;
            right: 12px;
            top: 18px;
        }
        .tanhaoImg {
            height: 19px;
            width: 19px;
            position: absolute;
            right: 5px;
            top: 10px;
        }
    }

    .selectBox {
        position: relative;
    }

    .zhegaiceng {
        background: rgba(0, 0, 0, 0.6);
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        .lodingimg {
            position: absolute;
            height: 60px;
            width: 60px;
            left: 0;
            right: 0;
            margin: 30vh auto;
        }
        .zhegaiContent {
            background: #fff;
            position: absolute;
            width: 60%;
            left: 0;
            right: 0;
            top: 12vh;
            margin: 20vh auto;
            padding: 20px 20px 5px;
            border-radius: 10px;
            .chengnuo {
                color: #096FD4;
                font-size: 18px;
                text-align: center;
                margin-bottom: 15px;
                font-weight: 700;
            }
            .chengnuoText {
                color: #232323;
                margin-bottom: 25px;
                font-size: 15px;
                line-height: 24px;
            }
            .selectBox {
                margin-bottom: 20px;
                color: #bbb;
                .selectImg {
                    display: inline-block;
                    vertical-align: middle;
                    height: 20px;
                    width: 20px;
                    padding-right: 6px;
                }
            }
            .sureBox {
                margin: 20px auto 20px;
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
    }

    .zhegaicengone {
        background: rgba(0, 0, 0, 0.4);
    }

    .flexBetween {
        padding: 10px 10px 30px;
        background: #fff;
        .phoneText {
            position: absolute;
            top: 105px;
            padding-bottom: 6px;
            width: 100%;
            text-align: center;
            .text {
                font-size: 14px;
                color: #232323;
            }
        }
    }

    .codeInput {
        padding-top: 35px;
        background: #fff;
        width: 100%;
        height: 40px;
        padding-left: 16px;
        font-size: 15px;
        input {
            border: 1px solid #f4f4f4;
            padding: 12px 16px;
            width: 52%;
            border-radius: 6px;
        }
        .textDetail {
            display: inline-block;
            //    width: 100%;
            margin-bottom: 10px;
        }
        .selectText {
            font-size: 15px;
            padding: 16px;
            color: #bbb;
            font-family: Microsoft Yahei;
            /*text-align: right;*/
        }
        .codespan {
            background: #0CEFAF;
            color: #232323;
            font-size: 14px;
            display: inline-block;
            height: 30px;
            width: 30px;
            text-align: center;
            line-height: 30px;
            margin-right: 5px;
            margin-top: 5px;
        }
    }
    .inputImg {
      display: inline-block;
      vertical-align: middle;
      height: 30px;
      width: 30px;
      padding-left: 10px;
      margin-top: -5px;
    }
</style>
<template>
    <div style="background: #f4f4f4;min-height: 100vh;">
        <div>
            <div class="textBox">
                <span class="line">|</span>
                <span class="text">预约信息</span>
            </div>
            <div>
                <div class="inputBox clear">
                    <span class="textDetail">预约办理地点：</span>
                    <span class="textInput">{{appointment.address}}</span>
                </div>
                <div class="inputBox clear">
                    <span class="textDetail">预约办理时间：</span>
                    <span class="textInput">{{appointment.time}}</span>
                </div>
            </div>
            <div class="textBox">
                <span class="line">|</span>
                <span class="text">填写信息</span>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">申领人姓名</span>
              <img v-if="isAndroid" class='inputImg fr' @click="idcordOc" src="../assets/images/listicon.png">
                <input v-model='name' type="text" class="textInput fr" placeholder="请输入申领人姓名">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">证件名称</span>
                <input type="text" v-model="cre_name" class="textInput fr" readonly>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">证件号码</span>
                <input type="text" v-model="cre_code" class="textInput fr" readonly>
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">身份证地址</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select class="fr selectText2 selectText" v-model="card_address">
                    <option value="">请选择身份证地址所在省份</option>
                    <option v-for="item in province" :value="item.label" :key='item'>{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">证件详细地址</span>
                <input v-model="card_detail_address" type="text" class="textInput fr" placeholder="请输入证件详细地址">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">联系地址所在区</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select class="fr selectText selectText3" v-model="link_area">
                    <option value="" style="color: #bbb;">请选择联系地址行政区</option>
                    <option v-for="item in area" :value="item.label" :key='item'>{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">联系地址</span>
                <input type="text" class="textInput fr" v-model="link_address" placeholder="请输入联系地址">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">联系电话</span>
                <input type="tel" class="textInput fr" readonly v-model="link_phone">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">品牌型号(车辆铭牌)</span>
                <input type="tel" v-model='brand_model' class="textInput fr" placeholder="请输入品牌型号">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">车身颜色</span>
                <input type="tel" v-model="color" class="textInput fr tanInput" placeholder="请输入车身颜色">
                <img class='tanhaoImg' @click="ShowOne" src="../assets/images/tanhao.png">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">电动车整车编码(钢架号)</span>
                <input type="tel" style='width: 40%;' v-model="pin" class="textInput fr tanInput" placeholder="请输入车架号">
                <img class='tanhaoImg' @click="ShowTwo" src="../assets/images/tanhao.png">
            </div>
            <div class="textBox">
                <span class="line">|</span>
                <span class="text">导入照片</span>
            </div>
            <div class="flexBetween">
                <div class="upload" v-for="(item,index) in imgData" :key="index">
                    <!-- 图片上传控件 -->
                    <div class="load">
                        <img class="loadImg" :src="item.imgUrl ? item.imgUrl : item.img"
                             @click="getPhone(index,$event)">
                    </div>
                    <div class="phoneText">
                        <span class="inputText">*</span>
                        <span class="text">{{item.text}}</span>
                    </div>
                </div>
            </div>
            <!--<div id="bigImg">-->
            <!--<img style='height:100px;width: 100px;' :data-src="phone" :src="phone" >-->
            <!--</div>-->
            <div class='codeInput'>
                <label class="inputText">*</label>
                <span class="textDetail">临时编号</span>
                <div>
                    <span class='codespan'>京</span><span class='codespan'>临</span><input type='text'
                                                                                         placeholder="请输入临时编号"
                                                                                         v-model='apply_car_no'/>
                    <img v-if="isAndroid" class='inputImg' @click="LicensePlateOC" src="../assets/images/listicon.png">
                </div>
            </div>
            <div class="submitBox">
                <div class="submit" @click="submit">提交信息</div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="isShowOne">
            <div class="zhegaiContent">
                <p class="chengnuoText">
                    如车辆为多种颜色，则填写其中面积最大的三种颜色，顺序为"从前至后"或"从上至"
                </p>
                <div class="sureBox">
                    <span class="sure" @click="sureOne">确认</span>
                </div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="isShowTwo">
            <div class="zhegaiContent">
                <p class="chengnuoText">
                    如车辆无车架号，车主本人须到我市指定发放点现场查验车辆进行申报
                </p>
                <div class="sureBox">
                    <span class="sure" @click="sureTwo">确认</span>
                </div>
            </div>
        </div>
        <div class="zhegaicengone zhegaiceng" v-if="isShowthree">
            <img class='lodingimg' src="../assets/images/loadingpop.gif">
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import axios from 'axios';
    import * as regAction from '@/utils/reg';
    import Viewer from 'viewerjs';

    export default {
        props: ["uploadUrl"],
        data() {
            return {
                appointment: {},
                person: {},
                apply_car_no: '',
                phone: '',
                isShowthree: false,
                isSure: false,
                isShow: true,
                isShowOne: false,
                isShowTwo: false,
                name: '',
                cre_name: '',
                cre_code: '',
                card_address: '',
                card_detail_address: '',
                link_area: '',
                link_address: '',
                link_phone: '',
                brand_model: '',
                color: '',
                pin: '',
                card_pic: '',
                car_pic: '',
                car_pin_pic: '',
                cardCode: '',
                provinceCode: '',
                picavalue: "",
                imgUrl: null,
                imgData: [{'imgUrl': '', 'img': require('../../static/cardImg.png'), 'text': '本人持身份证照片'}, {
                    'imgUrl': '',
                    'img': require('../../static/car.png'),
                    'text': '车辆照片'
                }, {'imgUrl': '', 'img': require('../../static/carCode.png'), 'text': '电动车整车编码（钢架号）照片'}],
                isEnlargeImage: false,
                isAndroid: true,
                cred: '',
                area: '',
                province: '',
                user_id: ''
            };
        },
        watch: {
            'link_area': function () {
                if ((this.link_area !== '')) {
                    $(".selectText3").css("color", '#232323')
                } else {
                    $(".selectText3").css("color", '#bbb')
                }
                $(".selectText3").find("option").css("color", "#232323")
            },
            'card_address': function () {
                if ((this.card_address !== '')) {
                    $(".selectText2").css("color", '#232323')
                } else {
                    $(".selectText2").css("color", '#bbb')
                }
                $(".selectText2").find("option").css("color", "#232323")
            },
        },
        created() {
            // document.getElementsByTagName('title')[0].innerHTML = '个人申报';
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                this.isAndroid = true;
            }
            if (isiOS) {
                this.isAndroid = false;
            }
            this.apply_no = this.$route.query.apply_no;
            this.user_id = this.$route.query.user_id;
            this.link_phone = this.$route.query.phone;
        },
        mounted() {
            this.getData();
            this.getArea();
            this.getProvince('province');
            this.getProvince('area');
            this.getProvince('cred');
            $(".selectText").css("color", '#bbb');
            var self = this;
            self.bridge.registerHandler('webviewGetImage', function (data, responseCallback) {//注册客户端主动触发js端
                self.isShowthree = true;
                axios.post(self.ajaxUrl + '/vehicle/uploadBaseImage', {
                    image: data.image ? 'data:image/jpeg;base64,' + data.image : ''
                })
                    .then(response => {
                        self.isShowthree = false;
                        if (response.data.result.rescode == 200) {
                            self.imgData[data.position].imgUrl = response.data.url;
                            if (data.position == 0) {
                                self.card_pic = response.data.url;
                                console.log(self.card_pic)
                            } else if (data.position == 1) {
                                self.car_pic = response.data.url;
                            } else if (data.position == 2) {
                                self.car_pin_pic = response.data.url;
                            }
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        self.isShowthree = false;
                    })
                var responseData = {'rescode': '200'}
                responseCallback(responseData)
            })
            self.bridge.registerHandler('callBackJSLicensePlateOCRResult', function (data, responseCallback) {//注册客户端主动触发js端
                // alert(JSON.stringify(data.licensePlateResult))
                // alert(data.licensePlateResult.words_result[1].words)
                data.licensePlateResult = JSON.parse(data.licensePlateResult)
                self.apply_car_no = data.licensePlateResult.words_result[1].words;
                var responseData = {'rescode': '200'}
                responseCallback(responseData)
            });
          self.bridge.registerHandler('callBackJSIDCardFrontOCRResult', function (data, responseCallback) {//注册客户端主动触发js端
            self.cre_name = '居民身份证';
            data.IDCardFrontResult = JSON.parse(data.IDCardFrontResult);
            self.cre_code = data.IDCardFrontResult.idNum;
            self.name = data.IDCardFrontResult.idName;
            self.card_detail_address = data.IDCardFrontResult.idAddress;
            var provincestr = self.card_detail_address.substring(0,2);
            for(let i in self.province) {
              if (self.province[i].label.indexOf(provincestr) >= 0) {
                self.card_address = self.province[i].label;
              }
            }
            var responseData = {'rescode': '200'}
            responseCallback(responseData)
          })
        },
        methods: {
          idcordOc() {//身份证正面OC
            this.bridge.callHandler('invokeIDCardFrontOCR', function (response) {
              console.log('js调用客户端方法回调传参' + response);
            });
          },
            LicensePlateOC() {//车牌识别OC
                this.bridge.callHandler('invokeLicensePlateOCR', function (response) {
                    console.log('js调用客户端方法回调传参' + response);
                });
            },
            getData() {
                var data = {
                    apply_no: this.apply_no
                }
                axios.post(this.ajaxUrl + "/vehicle/getUserInfo", data)
                    .then(response => {
                        console.log(response);
                        if (response.data.result.rescode == 200) {
                            this.base = response.data.base;
                            this.applyType = this.base.applyType;
                            this.person = response.data.person;
                            this.cre_name = this.person.cre_name;
                            this.cre_code = this.person.cre_code;
                            this.department = response.data.department;
                            this.appointment = response.data.appointment;
                            this.appointment.time = moment(this.appointment.time).format('YYYY-MM-DD')
                            this.approve = response.data.approve;
                            if (this.applyType == 1) {
                                this.imgData[0].imgUrl = response.data.person.card_pic_min;
                                this.imgData[1].imgUrl = response.data.person.car_pic_min;
                                this.imgData[2].imgUrl = response.data.person.car_pin_pic_min;
                                this.imgData[0].bigUrl = response.data.person.card_pic;
                                this.imgData[1].bigUrl = response.data.person.car_pic
                                this.imgData[2].bigUrl = response.data.person.car_pin_pic;
                                this.$nextTick(() => {
                                    new Viewer(document.getElementById('scaleImg'), {
                                        url: 'data-src',
                                        navbar: false,
                                        toolbar: true,
                                        loop: true
                                    })
                                })

                            } else if (this.applyType == 2) {
                                this.imgDataOne[0].imgUrl = response.data.department.card_pic_min;
                                this.imgDataOne[1].imgUrl = response.data.department.car_pic_min;
                                this.imgDataOne[2].imgUrl = response.data.department.car_pin_pic_min;
                                this.imgDataOne[0].bigUrl = response.data.department.card_pic;
                                this.imgDataOne[1].bigUrl = response.data.department.car_pic
                                this.imgDataOne[2].bigUrl = response.data.department.car_pin_pic;
                                this.$nextTick(() => {
                                    new Viewer(document.getElementById('scaleImg1'), {
                                        url: 'data-src',
                                        navbar: false,
                                        toolbar: true,
                                        loop: true
                                    })
                                })
                            }
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            //  获取省会或者区域
            getArea(id) {
                axios.post(this.ajaxUrl + 'vehicle/area', {
                    parentId: id ? id : ''
                })
                    .then(response => {
                        this.area = response.data.list
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getProvince(type) {
                axios.post(this.ajaxUrl + '/vehicle/dict', {
                    type: type
                })
                    .then(response => {
                        if (type == 'province') {
                            this.province = response.data.list;
                        } else if (type == 'area') {
                            this.area = response.data.list;
                        } else if (type == 'cred') {
                            this.cred = response.data.list;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            sureOne() {
                this.isShowOne = false;
            },
            sureTwo() {
                this.isShowTwo = false;
            },
            ShowOne() {
                this.isShowOne = true;
            },
            ShowTwo() {
                this.isShowTwo = true;
            },
            selected() {
                this.isSure = !this.isSure;
            },
            sure() {
                if (!this.isSure) {
                    Toast("请勾选");
                } else {
                    this.isShow = false;
                }
            },
            getPhone(index, event) {
                // event.preventDefault();//取消原来的方法
                var position = index;
                console.log(position)
                this.bridge.callHandler('openCamera', {'position': position}, function (response) {
                    console.log('js调用客户端方法回调传参' + response);
                });
            },
            uploadIMG(event, num) {
                let files = event.target.files || event.dataTransfer.files;
                if (!files.length) {
                    this.isShowthree = false;
                    return;
                }
                this.picavalue = files[0];
                // if (this.picavalue.size / 1024 > 5000) {
                //   Toast("图片过大不支持上传");
                // } else {
                this.imgPreview(this.picavalue, '', num);
                // }
            },
            //获取图片
            imgPreview(file, callback, num) {
                let self = this;
                //判断支不支持FileReader
                if (!file || !window.FileReader) return;
                var formData = new FormData();
                formData.append("image", file);
                let config = {
                    headers: {"Content-Type": "multipart/form-data"}
                };
                // 发送请求;
                this.isShowthree = true;

                axios.post(self.ajaxUrl + "vehicle/uploadImage", formData, config)
                    .then(response => {
                        this.isShowthree = false;
                        console.log(response);
                        self.imgData[num].imgUrl = response.data.url;
                        if (num == 0) {
                            self.card_pic = response.data.url;
                            console.log(self.card_pic)
                        } else if (num == 1) {
                            self.car_pic = response.data.url;
                        } else if (num == 2) {
                            self.car_pin_pic = response.data.url;
                        }
                    }, err => {
                        console.log(err);
                        // this.isShowthree = false;
                    })
                    .catch((error) => {
                        console.log(error)
                        // this.isShowthree = false;
                    })
            },
            // 压缩图片
            compress(img) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let initSize = img.src.length;
                let width = img.width;
                let height = img.height;
                canvas.width = width;
                canvas.height = height;
                // 铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, width, height);
                //进行最小压缩
                let ndata = canvas.toDataURL("image/jpeg", 0.1);
                console.log("*******压缩后的图片大小*******");
                console.log(ndata)
                console.log(ndata.length);
                return ndata;
            },
            // base64转成bolb对象
            dataURItoBlob(base64Data) {
                var byteString;
                if (base64Data.split(",")[0].indexOf("base64") >= 0)
                    byteString = atob(base64Data.split(",")[1]);
                else byteString = unescape(base64Data.split(",")[1]);
                var mimeString = base64Data
                    .split(",")[0]
                    .split(":")[1]
                    .split(";")[0];
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], {type: mimeString});
            },
            //删除事件
            delImg() {
                this.imgUrl = null;
            },
            submit() {
                if (this.name == '') {
                    Toast('请输入申领人姓名')
                    return;
                }
                if (this.cre_name == '') {
                    Toast('请选择证件名称')
                    return;
                }
                if (this.cre_code == '') {
                    Toast('请选择证件号码')
                    return;
                }
                if (this.card_address == '') {
                    Toast('请输入身份证地址所在省')
                    return;
                }
                if (this.card_detail_address == '') {
                    Toast('请输入身份证地址')
                    return;
                }
                if (this.link_area == '') {
                    Toast('请选择联系地址所在区')
                    return;
                }
                if (this.link_address == '') {
                    Toast('请输入联系地址')
                    return;
                }
                if (this.link_phone == '') {
                    Toast('请输入联系电话')
                    return;
                } else {
                    const flag = regAction.phone(this.link_phone);
                    if (!flag) {
                        Toast('请输入正确手机号!');
                        return;
                    }
                }
                if (this.brand_model == '') {
                    Toast('请输入品牌型号')
                    return;
                }
                if (this.color == '') {
                    Toast('请输入车辆颜色')
                    return;
                }
                if (this.card_pic == '') {
                    Toast('请上传身份证照片')
                    return;
                }
                if (this.car_pic == '') {
                    Toast('请上传车辆照片')
                    return;
                }
                if (this.car_pin_pic == '') {
                    Toast('请上传车架号照片')
                    return;
                }
                if (this.apply_car_no == '') {
                    Toast('请输入临时编号')
                    return;
                }
                var data = {
                    "user_id": this.user_id,
                    "name": this.name,
                    "cre_name": this.cre_name,
                    "cre_code": this.cre_code,
                    "card_address": this.card_address,
                    "card_detail_address": this.card_detail_address,
                    "link_area": this.link_area,
                    "link_address": this.link_address,
                    "link_phone": this.link_phone,
                    "brand_model": this.brand_model,
                    "color": this.color,
                    "pin": this.pin,
                    "card_pic": 'this.card_pic',
                    "car_pic": this.car_pic,
                    "car_pin_pic": this.car_pin_pic,
                    'apply_no': this.apply_no,
                    'apply_car_no': '京临' + this.apply_car_no
                }
                console.log(JSON.stringify(data));
                // 发送请求;
                axios.post(this.ajaxUrl + "vehicle/person", data)
                    .then(response => {
                        console.log(response);
                        const {data} = response;
                        const {result} = data;
                        const {rescode, resdes} = result;
                        if (rescode != 200) {
                            Toast(resdes);
                        } else {
                            //  成功跳转到申报成功页面
                            this.$router.push('/pass');
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    };

</script>


