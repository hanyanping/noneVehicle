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
            font-size: 32rem/$baseFontSize;
        }
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
        .inputText {
            color: #f00;
            padding-right: 5px;
        }
        .textDetail {
            color: #232323;
            font-size: 30rem/$baseFontSize;
        }
        .textInput {
            text-align: right;
            font-size: 30rem/$baseFontSize;
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
            <span class="textDetail">预约办理区域</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select v-model='parantValue' class="fr selectText">
                <option value="">请选择预约办理区域</option>
                <option v-for='item in parentlist' :value="item.value">{{item.label}}</option>
            </select>
        </div>
        <div class="inputBox clear selectBox">
            <label class="inputText">*</label>
            <span class="textDetail">预约办理机构</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select v-model='address' class="fr selectText1">
                <option value="">请选择预约办理机构</option>
                <option v-for='item in childlist' :value="item.label">{{item.label}}</option>
            </select>
        </div>
        <div class='submit' v-if="!isShow" @click="getTime">查询可预约时间</div>
        <div class="textBox" v-if="isShow">
            <span class="line">|</span>
            <span class="text">预约时间（可提前预约7天以内的办理点）</span>
        </div>
        <div v-if="isShow" class='clear inputBox' v-for="(item,index) in timeData">
            <div class="fl timeText">{{item.time}}  {{item.week}}</div>
            <div class="fr timeText selectRight">
                <span v-if="item.type==0" class="subscribeText">当天预约人数已满</span>
                <span v-if="item.type==0" class="subscribeCircle"></span>
                <img v-if="item.type==1" class="selectCicle" @click='selectTime(item.time,index,$event)' src="../../static/yuan.png">
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
        <div class='submit' v-if="isShow" @click='submit'>提交信息</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {Indicator, Toast, DatetimePicker} from 'mint-ui';
    import moment from 'moment/moment';

    export default {
        name: "subscribe",
        data() {
            return {
                noselect: require('../../static/yuan.png'),
                select: require('../../static/selectIcon.jpg'),
                isShow: false,
                name: '',
                parantValue: '',
                address: '',
                card_address: '',
                pickerValue: '',
                pickerValueTwo: '',
                now: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                parentId: '',
                parentlist: [],
                childlist: [],
                apply_no: '',
                user_id: '',
                timeData:[]
            }
        },
        created() {
//            document.getElementsByTagName('title')[0].innerHTML = '预约办理';
            this.getArea(this.parentId);
            this.apply_no = this.$route.query.applyNo;
        },
        mounted() {
            if (!this.parantValue) {
                $('.selectText').css("color", "#bbb");
            }
            $(".selectText").find("option").css("color", "#232323")
            if (!this.address) {
                $('.selectText1').css("color", "#bbb")
            }
            $(".selectText1").find("option").css("color", "#232323")
        },
        watch: {
            'parantValue': function () {
                console.log(this.parantValue)
                if (this.parantValue == '') {
                    this.childlist = [];
                    this.address = '';
                    $(".selectText").css("color", "#bbb");
                } else {
                    this.childlist = [];
                    this.group(this.parantValue)
                    $(".selectText").css("color", "#232323")
                }
                $(".selectText").find("option").css("color", "#232323")
            },
            'address': function () {
                if (this.address == '') {
                    // this.parentlist = [];
                    $(".selectText1").css("color", "#bbb");
                } else {
                    $(".selectText1").css("color", "#232323")
                }
                $(".selectText1").find("option").css("color", "#232323")
            }
        },
        methods: {
            selectTime(time,index,event){
                console.log(time)
                this.pickerValueTwo = time;
                var imgArr = $(".selectRight").find('.selectCicle');
                for(var i = 0;i < imgArr.length; i++){
                    $(imgArr[i]).attr('src','../../static/yuan.png')
                }
                $(event.target).attr('src','../../static/selectIcon.jpg')
            },
            getTime(){
                var now = new Date();
                var nowTime = now.getTime() ;
                var oneDayTime = 24*60*60*1000 ;
                var timeData = new Array(),time = '',week = '',type='';
                for(var i = 0 ; i < 7 ; i++) {
                    //显示周一
                    var ShowTime = nowTime + (i + 1) * oneDayTime;//时间戳
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
                    if(week == '星期日'){
                        type='0'
                    }else{
                        type='1'
                    }
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
                console.log(this.timeData)
            },
            open: function (picker) {
                this.$refs[picker].open()
            },
            handleChange(value) {
                console.log('value===' + moment(value).format('YYYY-MM-DD'));
                this.pickerValueTwo = moment(value).format('YYYY-MM-DD');
            },
            group(areaId) {
                var data = {
                    areaId: areaId,
                    type: 1
                }
                axios.post(this.ajaxUrl + "/vehicle/group", data)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.result.rescode == 200) {
                            if (response.data.hasOwnProperty('list')) {
                                this.childlist = response.data.list;
                            }
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            getArea(parentId) {
                var data = {
                    parentId: parentId,
                    type: 1
                }
                axios.post(this.ajaxUrl + "vehicle/area", data)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.hasOwnProperty('list')) {
                            this.parentlist = response.data.list;
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            submit() {
                if (this.parantValue == '') {
                    Toast('请选择预约区域')
                } else if (this.address == '') {
                    Toast('请选择预约机构')
                } else if (this.pickerValueTwo == '') {
                    Toast('请选择预约时间')
                } else {
                    var data = {
                        apply_no: this.apply_no,
                        address: this.address,
                        time: this.pickerValueTwo
                    }
                    axios.post(this.ajaxUrl + "/vehicle/appointment", data)
                        .then(response => {
                            console.log(response.data);
                            if (response.data.result.rescode == 200) {
                                this.$router.push({path: '/subSucess', query: {apply_no: this.apply_no,source:'noonline'}})//跳到预约成功页面
                            } else {
                                Toast(response.data.result.resdes)
                            }
                        }, err => {
                            console.log(err);
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            }
        }
    }
</script>
