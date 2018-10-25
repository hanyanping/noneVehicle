<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .textBox {
        color: #666;
        padding: 15px;
        height: 20px;
        line-height: 20px;
        background: #f4f4f4;
        .text {
            padding-left: 6px;
            font-size: 32rem / $baseFontSize;
        }
    }
    .warm{
        text-align: right;
        color: #E7353C;
        padding: 5px;
        font-size: 14px;
        background: #f4f4f4;
    }
    .inputBox {
        padding: 15px;
        background: #fff;
        border-bottom: 1px solid #f4f4f4;
      .timeText{
        color: #232323;
        font-size: 30rem/$baseFontSize;
        .subscribeText{
          color: #bbb;
          display:inline-block;
          vertical-align: middle;
        }
        .subscribeCircle{
          display:inline-block;
          vertical-align: middle;
          height: 50rem/$baseFontSize;
          width: 50rem/$baseFontSize;
          border-radius:50%;
          background: #bbb;
        }
        img{
          height: 50rem/$baseFontSize;
          width: 50rem/$baseFontSize;
          display:inline-block;
          vertical-align: middle;
        }
      }
        .inputImg {
            display: inline-block;
            vertical-align: middle;
            height: 30px;
            width: 30px;
            padding-left: 10px;
            float: right;
            margin-top: -5px;
        }
        .inputText {
            color: #f00;
            padding-right: 5px;
        }
        .textDetail {
            color: #232323;
            font-size: 30rem / $baseFontSize;
        }
        .textInput {
            text-align: right;
            font-size: 15px;
            color: #232323;
            font-family: Microsoft Yahei;
            text-align: right;
        }
        .selectText {
            font-size: 15px;
            padding-right: 16px;
            font-family: Microsoft Yahei;
            text-align: right;
        }
        .selectText1 {
            font-size: 15px;
            padding-right: 16px;
            font-family: Microsoft Yahei;
            text-align: right;
        }
        .selectText3 {
            color: #232323;
            font-size: 15px;
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
            top: 22px;
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

    .submit {
      margin: 25px auto;
      height: 45px;
      width: 60%;
      background: #096FD4;
      color: #fff;
      font-size: 16px;
      line-height: 45px;
      text-align: center;
      border-radius: 10px;
    }
</style>
<template>
    <div style="background: #fff;min-height: 100vh;">
        <div class="textBox">
            <span class="line">|</span>
            <span class="text">填写基本信息</span>
        </div>
        <div class="inputBox clear selectBox">
            <label class="inputText">*</label>
            <span class="textDetail">证件名称</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select placeholder="请选择证件名称" v-model='cre_name' class="fr selectText selectText2">
                <option value="" style="color: #bbb;">请选择证件名称</option>
                <option v-for="item in cred" :value="item.label" :key='item'>{{item.label}}</option>
            </select>
        </div>
        <div class="inputBox clear">
            <label class="inputText">*</label>
            <span class="textDetail">证件号码</span>
            <img class='inputImg fr' v-if="isAndroid" @click="idcordOc" src="../assets/images/listicon.png">
            <input type="text" v-model="cre_code" class="textInput fr" placeholder="请输入证件号码">
        </div>
        <div class="warm"  v-if="isAndroid"><span>*</span>身份证可使用OCR功能自动识别</div>
        <div class="textBox">
            <span class="line">|</span>
            <span class="text">填写预约信息</span>
        </div>
        <div class="inputBox clear selectBox">
            <label class="inputText">*</label>
            <span class="textDetail">预约办理区域</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select v-model='parantValue' class="fr selectText">
                <option value="">请选择预约办理区域</option>
                <option v-for='item in parentlist' :value="item.value" :key='item'>{{item.label}}</option>
            </select>
        </div>
        <div class="inputBox clear selectBox">
            <label class="inputText">*</label>
            <span class="textDetail">预约办理机构</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select v-model='address' class="fr selectText1">
                <option value="">请选择预约办理机构</option>
                <option v-for='item in childlist' :value="item.label" :key='item'>{{item.label}}</option>
            </select>
        </div>
        <div class='submit' v-if="!isShow" @click="getTimeDate">查询可预约时间</div>
        <div class="textBox" v-if="isShow">
          <span class="line">|</span>
          <span class="text">预约时间（可提前预约7天以内的办理点）</span>
        </div>
        <div v-if="isShow" class='clear inputBox' v-for="(item,index) in timeData">
          <div class="fl timeText">{{item.time}}  {{item.week}}</div>
          <div class="fr timeText selectRight">
            <span v-if="item.type==1" class="subscribeText">当天预约人数已满</span>
            <span v-if="item.type==2" class="subscribeText">不可预约</span>
            <span v-if="item.type ==1 || item.type == 2" class="subscribeCircle"></span>
            <img v-if="item.type ==0" class="selectCicle" @click='selectTime(item.time,index,$event)' src="../../static/yuan.png">
            <!--<img v-if="item.type==1 && isSelect == true" @click='selectTime(item.time)' src="../assets/images/selectIcon.jpg">-->
          </div>
        </div>
        <!--<div class="inputBox clear selectBox" @click="open('datePicker')">-->
            <!--<label class="inputText">*</label>-->
            <!--<span class="textDetail">预约办理时间</span>-->
            <!--<span class="fr selectText3">{{pickerValueTwo}}</span>-->
            <!--<img class='selectImg' src="../assets/images/down.png">-->
        <!--</div>-->
        <!--<mt-datetime-picker-->
                <!--v-model="pickerValue"-->
                <!--type="date"-->
                <!--:startDate="now"-->
                <!--ref="datePicker"-->
                <!--year-format="{value} 年"-->
                <!--month-format="{value} 月"-->
                <!--date-format="{value} 日"-->
                <!--@confirm="handleChange">-->
        <!--</mt-datetime-picker>-->
        <div class='submit'  v-if="isShow" @click='submit'>提交信息</div>
    </div>
</template>

<script>
    import axios from "axios";
    import {Indicator, Toast, DatetimePicker} from "mint-ui";
    import moment from "moment/moment";

    export default {
        name: "subscribe",
        data() {
            return {
              isShow: false,
                cre_name: '',
                cred: [],
                cre_code: '',
                name: "",
                parantValue: "",
                address: "",
                card_address: "",
                pickerValue: "",
                pickerValueTwo: "",
                now: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                parentId: "",
                parentlist: [],
                childlist: [],
                apply_no: "",
                user_id: "",
                isAndroid: true,
              timeData: []
            };
        },
        created() {
//            document.getElementsByTagName("title")[0].innerHTML = "个人申报（预约）";
            this.getArea(this.parentId);
            this.apply_no = this.$route.query.applyNo;
            this.getProvince('cred');
            this.user_id = localStorage.getItem('userId');
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
            if (!this.parantValue) {
                $(".selectText").css("color", "#bbb");
            }
            $(".selectText")
                .find("option")
                .css("color", "#232323");
            if (!this.address) {
                $(".selectText1").css("color", "#bbb");
            }
            $(".selectText1")
                .find("option")
                .css("color", "#232323");
            var self = this;
          self.bridge.registerHandler('callBackJSIDCardFrontOCRResult', function (data, responseCallback) {//注册客户端主动触发js端
              data.IDCardFrontResult = JSON.parse(data.IDCardFrontResult);
              self.cre_code = data.IDCardFrontResult.idNum;
              self.cre_name = '居民身份证';
                var responseData = {'rescode': '200'}
                responseCallback(responseData)
            })
        },
        watch: {
            'cre_name': function () {
                if ((this.cre_name !== '')) {
                    $(".selectText2").css("color", '#232323')
                } else {
                    $(".selectText2").css("color", '#bbb')
                }
                $(".selectText2").find("option").css("color", "#232323")
            },
            parantValue: function () {
                console.log(this.parantValue);
                if (this.parantValue == "") {
                    this.childlist = [];
                    this.address = "";
                    $(".selectText").css("color", "#bbb");
                } else {
                    this.childlist = [];
                    this.group(this.parantValue);
                    $(".selectText").css("color", "#232323");
                }
                $(".selectText")
                    .find("option")
                    .css("color", "#232323");
            },
            address: function () {
                if (this.address == "") {
                    // this.parentlist = [];
                    $(".selectText1").css("color", "#bbb");
                } else {
                    $(".selectText1").css("color", "#232323");
                }
                $(".selectText1")
                    .find("option")
                    .css("color", "#232323");
            }
        },
        methods: {
            selectTime(time,index,event){
                console.log(time)
                this.pickerValueTwo = time;
                var imgArr = $(".selectRight").find('.selectCicle');
                for(var i = 0;i < imgArr.length; i++){
                    $(imgArr[i]).attr('src',require('../../static/yuan.png'))
                }
                $(event.target).attr('src',require('../../static/selectIcon.jpg'))
            },
            idcordOc() {//身份证正面OC
                this.bridge.callHandler('invokeIDCardFrontOCR', function (response) {
                    console.log('js调用客户端方法回调传参' + response);
                });
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
          resetTime(data){
            // data = [{"date":1536915844975,"num":"66","enabled":"2","description":"测试日期"},{"date":1537002244975,"enabled":"2","description":"测试日期2"},{"date":1537088644975,"enabled":"0"},{"date":1537175044975,"enabled":"0"},{"date":1537261444975,"enabled":"0"},{"date":1537347844975,"enabled":"0"},{"date":1537434244975,"enabled":"0"}];
            var timeData = new Array(),time = '',week = '',type='';
            for(var i = 0 ; i < data.length ; i++) {
              //显示周一
              var ShowTime = data[i].date;//时间戳
              console.log(ShowTime)
              //初始化日期时间
              var myDate = new Date(ShowTime);
              console.log(myDate)
              var year = myDate.getFullYear();
              var month = myDate.getMonth() + 1;
              var date = myDate.getDate();
              console.log(year + "-" + month + "-" + date)
              time = year + "-" + month + "-" + date;
              week = "星期" + "日一二三四五六".charAt(myDate.getDay());
              type=data[i].enabled;
              var obj = {
                time: time,
                week: week,
                type: type
              };
              obj.week = week;
              timeData.push(obj)
            }
            this.timeData = timeData;
            this.isShow = true;
          },
          getTimeDate(){
            // this.resetTime(data);
            // return;
            if(this.parantValue == ''){
              Toast('请选择预约区域');
              return;
            }
            var data = {
              address: this.parantValue,
              type:2
            }
            axios.post(this.ajaxUrl + "vehicle/getDate", data)
              .then(response => {
                console.log(response.data);
                  this.resetTime(response.data);
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })


//                var now = new Date();
//                var nowTime = now.getTime() ;
//                var oneDayTime = 24*60*60*1000 ;
//                var timeData = new Array(),time = '',week = '',type='';
//                for(var i = 0 ; i < 7 ; i++) {
//                    //显示周一
//                    var ShowTime = nowTime + (i + 1) * oneDayTime;//时间戳
//                    console.log(ShowTime)
//                    //初始化日期时间
//                    var myDate = new Date(ShowTime);
//                    console.log(myDate)
//                    var year = myDate.getFullYear();
//                    var month = myDate.getMonth() + 1;
//                    var date = myDate.getDate();
//                    console.log(year + "-" + month + "-" + date)
//                    time = year + "-" + month + "-" + date;
//                    week = "星期" + "日一二三四五六".charAt(myDate.getDay());
//                    if(week == '星期日'){
//                        type='0'
//                    }else{
//                        type='1'
//                    }
//                    var obj = {
//                        time: time,
//                        week: week,
//                        type: type
//                    };
//                    obj.week = week;
//                    timeData.push(obj)
//                }
//                this.timeData = timeData;
//                this.isShow = true;
//                console.log(this.timeData)
          },
            open: function (picker) {
                this.$refs[picker].open();
            },
            handleChange(value) {
                console.log("value===" + moment(value).format("YYYY-MM-DD"));
                this.pickerValueTwo = moment(value).format("YYYY-MM-DD");
            },
            group(areaId) {
                var data = {
                    areaId: areaId,
                    type: 2
                };
                axios
                    .post(this.ajaxUrl + "/vehicle/group", data)
                    .then(
                        response => {
                            console.log(response.data);
                            if (response.data.result.rescode == 200) {
                                if (response.data.hasOwnProperty("list")) {
                                    this.childlist = response.data.list;
                                }
                            }
                        },
                        err => {
                            console.log(err);
                        }
                    )
                    .catch(error => {
                        console.log(error);
                    });
            },
            getArea(parentId) {
                var data = {
                    parentId: parentId,
                    type: 2
                };
                axios
                    .post(this.ajaxUrl + "vehicle/area", data)
                    .then(
                        response => {
                            console.log(response.data);
                            if (response.data.hasOwnProperty("list")) {
                                this.parentlist = response.data.list;
                            }
                        },
                        err => {
                            console.log(err);
                        }
                    )
                    .catch(error => {
                        console.log(error);
                    });
            },
            submit() {
                if (this.cre_name == "") {
                    Toast("请选择证件类型");
                } else if (this.cre_code == "") {
                    Toast("请输入证件号码");
                } else if (this.parantValue == "") {
                    Toast("请选择预约区域");
                } else if (this.address == "") {
                    Toast("请选择预约机构");
                } else if (this.pickerValueTwo == "") {
                    Toast("请选择预约时间");
                } else {
                    let code = '';
                    for (let item of this.childlist) {
                      if (item.label === this.address) {
                         code = item.value;
                      }
                    }
                    var data = {
                        apply_no: this.apply_no,
                        address: this.address,
                        time: this.pickerValueTwo,
                        user_id: this.user_id,
                        cre_name: this.cre_name,
                        cre_code: this.cre_code,
                        type: 2,
                        code
                    };
                    axios.post(this.ajaxUrl + "/vehicle/appointment", data)
                        .then(
                            response => {
                                console.log(response.data);
                                if (response.data.result.rescode == 200) {
                                    this.$router.push({
                                        path: "/subSucess",
                                        query: {apply_no: this.apply_no,source:'online'}
                                    }); //跳到预约成功页面
                                } else {
                                    Toast(response.data.result.resdes);
                                }
                            },
                            err => {
                                console.log(err);
                            }
                        )
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }
    };
</script>
