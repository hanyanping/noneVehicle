<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .choosebox {
        padding: 15px;
        .onlinetext {
            text-align: center;
            font-size: 16px;
            .onlineimg {
                height: 120px;
                width: 120px;
                margin: 15px;
            }
        }

    }
</style>
<template>
    <div class='choosebox'>
        <div class='flexAround'>
            <div class='onlinetext'>
                <img @click='goapplay' class='onlineimg' src='../assets/images/gonglue.png'>
                <p>线上申请，线下领取</p>
            </div>
            <div class='onlinetext' v-if='source == 0'>
                <img @click='gosubscrible' class='onlineimg' src='../assets/images/guanli.png'>
                <p>线上预约,现场申领</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Viewer from 'viewerjs';
    import axios from 'axios'
    import {Toast} from 'mint-ui';
    import moment from 'moment/moment';

    export default {
        props: ["uploadUrl"],
        data() {
            return {
                source: ''
            };
        },
        watch: {},
        created() {
            this.source = this.$route.query.source;
        },
        mounted() {

        },
        methods: {
            goapplay() {
                var source = this.$route.query.source;
                if (source == 0) {
                    this.$router.push({path: '/personalDeclaration'})
                } else if (source == 1) {
                    this.$router.push({path: '/companyDeclar'})
                }

            },
            gosubscrible() {
                this.$router.push({path: '/personsubscribe'})
            },
            getApproveresult(type) {
                axios.post(this.ajaxUrl + '/vehicle/dict', {
                    type: type
                })
                    .then(response => {
                        this.result = response.data.list;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
        },

    };

</script>


