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
        margin: 20px auto;
        height: 45px;
        width: 70%;
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
            <span class="textDetail">预约办理地点</span>
            <img class='selectImg' src="../assets/images/down.png">
            <select v-model='address' class="fr selectText1">
                <option value="">请选择预约办理地点</option>
                <option v-for='item in childlist' :value="item.value">{{item.label}}</option>
            </select>
        </div>
        <div class="inputBox clear selectBox" @click="open('datePicker')">
            <label class="inputText">*</label>
            <span class="textDetail">预约办理时间</span>
            <span class="fr selectText3">{{pickerValueTwo}}</span>
            <img class='selectImg' src="../assets/images/down.png">
        </div>
        <mt-datetime-picker
                v-model="pickerValue"
                type="date"
                :startDate="now"
                ref="datePicker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleChange">
        </mt-datetime-picker>
        <div class='submit' @click='submit'>提交信息</div>
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
                name: '',
                parantValue: '',
                address: '',
                card_address: '',
                pickerValue: '',
                pickerValueTwo: '',
                now: new Date(),
                parentId: '',
                parentlist: [{
                    "label": "北京",
                    "value": "001"
                }],
                childlist: [{
                    "label": "朝阳区",
                    "value": "0001"
                },
                    {
                        "label": "海淀区",
                        "value": "0002"
                    },
                ],
                apply_no: ''
            }
        },
        created() {
            document.getElementsByTagName('title')[0].innerHTML = '非机动车信息二维码';

        },
        mounted() {
            if (!this.parantValue) {
                $('.selectText').css("color", "#bbb")
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
                    this.getArea(this.parantValue)
                    $(".selectText").css("color", "#232323")
                }
                $(".selectText").find("option").css("color", "#232323")
            },
            'address': function () {
                console.log(this.address)
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
            open: function (picker) {
                this.$refs[picker].open()
            },
            handleChange(value) {
                console.log('value===' + moment(value).format('YYYY-MM-DD'));
                this.pickerValueTwo = moment(value).format('YYYY-MM-DD');
                console.log(value)
            },
            getArea(parentId) {
                var data = {
                    parentId: parentId
                }
                axios.post(this.ajaxUrl + "/vehicle/area", data)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.hasOwnProperty('list')) {
                            if (parentId == '') {
                                this.parentlist = response.data.list;
                            } else {
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
            submit() {
                if (this.parantValue == '') {
                    Toast('请选择预约区域')
                } else if (this.address == '') {
                    Toast('请选择预约地址')
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
                                this.$router.push({path: ''})
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


