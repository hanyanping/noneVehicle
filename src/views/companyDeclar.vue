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
        padding: 30px;
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
        padding: 15px;
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
            padding-right: 16px;
        }
        .selectImg {
            height: 8px;
            width: 12px;
            position: absolute;
            right: 12px;
            top: 20px;
        }
        .tanhaoImg {
            height: 19px;
            width: 19px;
            position: absolute;
            right: 9px;
            top: 16px;
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
        .zhegaiContentone{
            width: 92%;
            overflow-y: scroll;
            top: 10px;
            margin: 20px auto;
            padding: 5px;
            .chengnuoText {
                color: #232323;
                margin-bottom: 10px;
                margin-top: 10px;
                font-size: 15px;
                line-height: 24px;
                text-align: center;
            }
        }
    }

    .zhegaicengone {
        background: rgba(0, 0, 0, 0.4);
        .lodingimg {
            position: absolute;
            height: 60px;
            width: 60px;
            left: 0;
            right: 0;
            margin: 30vh auto;
        }
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
</style>
<template>
    <div style="background: #f4f4f4;min-height: 100vh;">
        <div>
            <div class="textBox">
                <span class="line">|</span>
                <span class="text">填写基本信息</span>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">申领单位</span>
                <input v-model='name' type="text" class="textInput fr" placeholder="请输入单位名称">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">证件名称</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select placeholder="请选择证件名称" v-model='cre_name' class="fr selectText selectText1">
                    <option value="" style="color: #bbb;">请选择证件名称</option>
                    <option v-for="item in cred" :value="item.label">{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">证件号码</span>
                <input type="text" v-model="cre_code" class="textInput fr" placeholder="请输入证件号码">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">单位地址所在省</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select style='margin-left: 5px;' class="fr selectText selectText2" v-model="live_area">
                    <option value="" style="color: #bbb;">请选择单位地址所在省</option>
                    <option v-for="item in province" :value="item.label">{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear">
                <!--<label class="inputText">*</label>
              <span class="textDetail">单位地址</span> -->
                <input v-model="live_address" type="text" class="textInput fr" placeholder="请输入联系地址">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">单位联系电话</span>
                <input type="tel" class="textInput fr" v-model="live_phone" placeholder="请输入单位联系电话">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">经办人姓名</span>
                <input type="text" class="textInput fr" v-model="proxy_name" placeholder="请输入代理人姓名">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">经办人证件名称</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select placeholder="请选择证件名称" v-model='proxy_cre_name' class="fr selectText selectText3">
                    <option value="" style="color: #bbb;">请选择证件名称</option>
                    <option v-for="item in credperson" :value="item.label">{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">经办人联系地址所在区</span>
                <img class='selectImg' src="../assets/images/down.png">
                <select class="fr selectText selectText4" style="margin-left: 5px;" v-model="proxy_area">
                    <option value="">请选择行政区</option>
                    <option v-for="item in area" :value="item.label">{{item.label}}</option>
                </select>
            </div>
            <div class="inputBox clear">
                <!--<label class="inputText">*</label>
                  <span class="textDetail">经办人联系地址</span>-->
                <input type="text" class="textInput fr" v-model="proxy_address" placeholder="请输入经办人联系地址">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">经办人联系电话</span>
                <input type="tel" class="textInput fr" v-model="proxy_phone" readonly placeholder="请输入联系电话">
            </div>
            <div class="inputBox clear">
                <label class="inputText">*</label>
                <span class="textDetail">品牌型号(车辆铭牌)</span>
                <input type="text" v-model='brand_model' class="textInput fr" placeholder="请输入品牌型号">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">车身颜色</span>
                <input type="text" v-model="color" class="textInput fr tanInput" placeholder="请输入车身颜色">
                <img class='tanhaoImg' @click="ShowOne" src="../assets/images/tanhao.png">
            </div>
            <div class="inputBox clear selectBox">
                <label class="inputText">*</label>
                <span class="textDetail">电动车整车编码(钢架号)</span>
                <input type="text" v-model="pin" style='width: 40%;' class="textInput fr tanInput" placeholder="请输入车架号">
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
                             @click="getPhone(index,$event)" v-if='isAndroid'>
                        <img class="loadImg" :src="item.imgUrl ? item.imgUrl : item.img"
                             v-if='!isAndroid'>
                        <input type="file" v-if='!isAndroid' @change="uploadIMG($event ,index)">
                    </div>
                    <div class="phoneText">
                        <span class="inputText">*</span>
                        <span class="text">{{item.text}}</span>
                    </div>
                </div>
            </div>
            <div class="submitBox">
                <div class="submit" @click="submit">提交信息</div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="isShow">
            <div class="zhegaiContent">
                <h1 class="chengnuo">本单位承诺</h1>
                <p class="chengnuoText">
                    该车系本单位合法所得，如不属实，愿承担一切法律责任。
                </p>
                <div class="selectBox">
                    <img class='selectImg' @click='selected' v-if="isSure" src="../assets/images/select.png">
                    <img class='selectImg' @click='selected' v-if="!isSure" src="../assets/images/yuan.png">
                    <span>以上内容已看过，同意并提交</span>
                </div>
                <div class="sureBox" @click.stop="sureBox">
                    <span class="sure">确认</span>
                </div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="isShowOne">
            <div class="zhegaiContent">
                <p class="chengnuoText">
                    如车辆为多种颜色，则填写其中面积最大的三种颜色，顺序为"从前至后"或"从上至下"
                </p>
                <div class="sureBox">
                    <span class="sure" @click.stop="sureOne">确认</span>
                </div>
            </div>
        </div>
        <div class="zhegaiceng" v-if="isShowTwo" @click="sureTwo">
            <div class="zhegaiContentone zhegaiContent">
                <p class="chengnuoText">
                    车整车编码（钢架号）位置
                </p>
                <div class="imgBox">
                    <img style="height:auto;width: 100%;" src="../assets/images/chejiahaoOne.jpg">
                    <img style="height:auto;width: 100%;margin-top: -3px;margin-bottom: -2px;" src="../assets/images/chejiahaotwo.jpg">
                    <img style="height:auto;width: 100%;margin-top: -3px;margin-bottom: -2px;" src="../assets/images/chejiahaothree.jpg">
                </div>
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
    import axios from 'axios'
    import * as regAction from '@/utils/reg';

    export default {
        props: ["uploadUrl"],
        data() {
            return {
                isSure: false,
                isShowthree: false,
                cred: '',
                credperson: '',
                area: '',
                province: '',
                isShow: true,
                isShowOne: false,
                isShowTwo: false,
                name: '',
                cre_name: '',
                cre_code: '',
                card_address: '',
                card_detail_address: '',
                live_address: '',
                live_area: '',
                live_phone: '',
                proxy_name: '',
                proxy_cre_name: '',
                proxy_area: '',
                proxy_address: '',
                proxy_phone: '',
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
                imgData: [{'imgUrl': '', 'img': require('../../static/danwei.png'), 'text': '经办人持本人与单位身份证明原件照片'}, {
                    'imgUrl': '',
                    'img': require('../../static/car.png'),
                    'text': '车辆照片'
                }, {'imgUrl': '', 'img': require('../../static/carCode.png'), 'text': ' 电动车整车编码(钢架号)照片'}],
                isEnlargeImage: false,
                isAndroid: true,
                user_id: '',
                headerImage: ''
            };
        },
        watch: {
            'cre_name': function () {
                if ((this.cre_name !== '')) {
                    $(".selectText1").css("color", '#232323')
                } else {
                    $(".selectText1").css("color", '#bbb')
                }
                $(".selectText1").find("option").css("color", "#232323")
            },
            'live_area': function () {
                if ((this.live_area !== '')) {
                    $(".selectText2").css("color", '#232323')
                } else {
                    $(".selectText2").css("color", '#bbb')
                }
                $(".selectText2").find("option").css("color", "#232323")
            },
            'proxy_cre_name': function () {
                if ((this.proxy_cre_name !== '')) {
                    $(".selectText3").css("color", '#232323')
                } else {
                    $(".selectText3").css("color", '#bbb')
                }
                $(".selectText3").find("option").css("color", "#232323")
            },
            'proxy_area': function () {
                if ((this.proxy_area !== '')) {
                    $(".selectText4").css("color", '#232323')
                } else {
                    $(".selectText4").css("color", '#bbb')
                }
                $(".selectText4").find("option").css("color", "#232323")
            },
        },
        created() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                this.isAndroid = true;
            }
            if (isiOS) {
                this.isAndroid = false;
            }
        },
        mounted() {
            this.user_id = localStorage.getItem('userId');
            this.proxy_phone = localStorage.getItem('phone');
            this.getArea();
            this.getProvince('province');
            this.getProvince('area');
            this.getProvince('depart_cred');
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
        },
        methods: {
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
            selected() {
                this.isSure = !this.isSure;
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
                        } else if (type == 'depart_cred') {
                            this.cred = response.data.list;
                        } else if (type == 'cred') {
                            this.credperson = response.data.list;
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
            sureBox() {
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
                if (!files.length) return;
                this.picavalue = files[0];
                // if (this.picavalue.size / 1024 > 5000) {
                //     Toast({
                //         message: "图片过大不支持上传",
                //         type: "warning"
                //     });
                // } else {
                this.imgPreview(this.picavalue, '', num);
                // }
            },
            //获取图片
            imgPreview(file, callback, num) {
                let self = this;
                //判断支不支持FileReader
                if (!file || !window.FileReader) return;
                let reader = new FileReader();
                // 将图片将转成 base64 格式
                reader.readAsDataURL(file);
                // console.log(reader.result)
                reader.onloadend = function () {
                    let result = reader.result;
                    let img = new Image();
                    img.src = result;            //判断图片是否大于100K,是就直接上传，反之压缩图片
                    if (reader.result.length <= (100 * 1024)) {
                        self.headerImage =result;
                        self.postImg(num)
                    } else {
                        img.onload = function () {
                            let data = self.compress(img);
                            self.headerImage = data;
                            self.postImg(num)
                        }
                    }
                }
            },
            //上传照片
            postImg(num){
                // 发送请求;
                this.isShowthree = true;
                axios.post(this.ajaxUrl + "/vehicle/uploadBaseImage",{  image: this.headerImage ? this.headerImage : ''})
                    .then(response => {
                        this.isShowthree = false;
                        console.log(response);
                        this.imgData[num].imgUrl = response.data.url;
                        if (num == 0) {
                            this.card_pic = response.data.url;
                            console.log(self.card_pic)
                        } else if (num == 1) {
                            this.car_pic = response.data.url;
                        } else if (num == 2) {
                            this.car_pin_pic = response.data.url;
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
                    Toast('请输入单位名称')
                    return
                }
                if (this.cre_name == '') {
                    Toast('请选择证件名称')
                    return
                }
                if (this.cre_code == '') {
                    Toast('请选择证件名称')
                    return
                }
                if (this.live_area == '') {
                    Toast('请选择单位所在省')
                    return
                }
                if (this.live_address == '') {
                    Toast('请输入单位地址')
                    return
                }
                if (this.live_phone == '') {
                    Toast('请输入单位联系电话')
                    return
                }
                if (this.proxy_name == '') {
                    Toast('请输入经办人姓名')
                    return
                }
                if (this.proxy_cre_name == '') {
                    Toast('请选择经办人证件名称')
                    return
                }
                if (this.proxy_area == '') {
                    Toast('请选择经办人所在区')
                    return
                }
                if (this.proxy_address == '') {
                    Toast('请输入经办人所在地址')
                    return
                }
                if (this.proxy_phone == '') {
                    Toast('请输入经办人联系电话');
                    return
                } else {
                    const flag = regAction.phone(this.proxy_phone);
                    if (!flag) {
                        Toast('请输入正确手机号!');
                        return;
                    }
                }
                if (this.brand_model == '') {
                    Toast('请输入品牌型号')
                    return
                }
                if (this.color == '') {
                    Toast('请输入车辆颜色')
                    return
                }
                if (this.card_pic == '') {
                    Toast('请上传身份证照片');
                    return
                }
                if (this.car_pic == '') {
                    Toast('请上传车辆照片')
                    return
                }
                if (this.car_pin_pic == '') {
                    Toast('请上传钢架号照片')
                    return
                }
                var data = {
                    "user_id": this.user_id,
                    "name": this.name,
                    "cre_name": this.cre_name,
                    "cre_code": this.cre_code,
                    "live_area": this.live_area,
                    "live_address": this.live_address,
                    "live_phone": this.live_phone,
                    "proxy_name": this.proxy_name,
                    "proxy_cre_name": this.proxy_cre_name,
                    "proxy_area": this.proxy_area,
                    "proxy_address": this.proxy_address,
                    "proxy_phone": this.proxy_phone,
                    "brand_model": this.brand_model,
                    "color": this.color,
                    "pin": this.pin,
                    "card_pic": this.card_pic,
                    "car_pic": this.car_pic,
                    "car_pin_pic": this.car_pin_pic
                }
                // 发送请求;
                axios.post(this.ajaxUrl + "/vehicle/department", data)
                    .then(response => {
                        console.log(response);
                        const {data} = response;
                        const {result} = data;
                        const {rescode, resdes} = result;
                        if (rescode != 200) {
                            Toast(resdes);
                        } else {
                            //  成功跳转到申报成功页面
                            this.$router.push('/declareSuccess');
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                console.log(this.imgData)
            }
        }
    };

</script>
