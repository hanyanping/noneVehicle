/**
* 申报成功页面
*/
<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .declarSuccess {
        height: 100vh;
        text-align: center;
        margin: 15vh auto;
        position: fixed;
        left: 0;
        right: 0;
        img {
            height: 90px;
            width: 90px;
        }
        .sucessText {
            margin: 20px 0;
            color: #232323;
            font-size: 16px;
        }
        .gobackGuild {
            width: 140px;
            height: 40px;
            color: #fff;
            background: #096FD4;
            line-height: 40px;
            text-align: center;
            margin: 40px auto;
            border-radius: 5px;
            font-size: 16px;
        }
        .warmtext{
            color: #E7353C;
            font-size: 15px;
            text-align: center;
        }
    }
</style>
<template>
    <div class="declarSuccess">
        <img src="../../assets/images/submit.png">
        <p class="sucessText">提交成功</p>
        <p class="warmtext">请在“历史申请记录（线上申请）”查看办理进度</p>
        <div class="gobackGuild" @click="goGuild">返回首页</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}

        },
        created() {
        },
        methods: {
            goGuild() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>
