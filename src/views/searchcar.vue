
<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  .searchbox{
       padding: 15px;
      .searchinfo{
          color: #E51C23;
          font-size: 14px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f4f4f4;
      }
      .inputbox{
          margin-top: 20px;
          .searchinput{
             border: 1px solid #bbb;   
             height: 35px;
             width: 75%;
             font-size: 15px;
          }
          .searchbutton{
            background: rgba(24, 114, 219, 1);
            height: 37px;
            line-height: 37px;
            display: inline-block;
            vertical-align: middle;
            width: 60px;
            color: #fff;
            text-align: center;
            margin-left:10px;
             font-size: 15px;
          }
      }
      .searchresult{
          margin-top: 20px;
          .resultinfo{
              font-size: #232323;
              font-size: 15px;
          }
          .tablebox{
              width: 100%;
              margin: 20px auto 30px;
              table{
                  width: 100%;
                  text-align: center;
                  font-size: 15px;
                  color: #232323;
              }
              table tr th,tr td{
                  border: 1px solid #bbb;
                  text-align: center;
                  line-height: 35px;
              }
          }
          .surebox{
              font-size: 15px;
              width: 100%;
              height: 60px;
              line-height: 60px;
              color: #fff;
              text-align: center;
              border-radius: 6px;
          }
          .gochoose{
              background: rgba(24, 114, 219, 1);
              margin-bottom: 20px;
          }
          .goback{
              background: #FF9701;

          }
          .gochooseonline{
              background: rgba(24, 114, 219, 1);
                width: 100%;
                margin-top: 30vh;
          }
      }
  }
</style>
<template>
  <div class='searchbox'>
    <div class='searchinfo'>说明：请输入您的车辆品牌型号进行查询（支持模糊搜索），如果您的车辆在《电动自行车产品目录》里，您需至现场办理正式注册登记手续。
    </div>
    <div class='inputbox'>
        <input class='searchinput' type='text' v-model='inputtext' placeholder="请输入车辆品牌型号（车辆铭牌）"/><span class='searchbutton' @click='search'>搜索</span>
    </div>
    <div class='searchresult' v-if='showResult'>
        <p class='resultinfo'>
            查询到以下品牌型号已在《电动自行车产品目录》里，请确认是否有您的车辆：
        </p>
        <div class='tablebox'>
            <table>
                <tr>
                    <th>序号</th>
                     <th>品牌型号</th>
                </tr>
                 <tr v-for="(item,index) in tableList" :key='(item,index)'>
                    <td>{{index+1}}</td>
                     <td>{{item.code}}</td>
                </tr>
            </table>
        </div>
        <div class='surebox gochoose'  @click='gochooseonline'>没有我的车辆信息，继续进行申请</div>
        <div class='surebox goback'  @click='goguild'>有我的车辆信息，请至现场办理正式注册登记手续</div>
    </div>
     <div class='searchresult' v-if='noresult'>
        <p class='resultinfo'>
            没有查询到您的车辆品牌型号，请点击确认进行申请
        </p>
        <div class='surebox gochooseonline ' @click='gochooseonline'>确定</div>
    </div>
  </div>
</template>
<script>
import Viewer from 'viewerjs';
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import moment from 'moment/moment';
  export default {
    props: ["uploadUrl"],
    data() {
      return {
        tableList: [],
        showResult: false,
        noresult: false,
        inputtext: ''
      };
    },
    watch: {
  
    },
    created() {
        
    },
    mounted() {
  
    },
    methods: {
        gochooseonline(){
            this.$router.push({path:'/onlinechoose',query:{source:this.$route.query.source}})
        },
        goguild(){
            this.$router.push({path:'/'})
        },
        search(){
            if(this.inputtext){
                this.showResult = true;
                this.noresult = false;
                this.tableList = [{code:'京123456'},{code:'冀345667'},{code:'京12356'},{code:'京66666'}];
                if(this.tableList.length == 0){
                    this.showResult = false;
                     this.noresult = true;
                }
            }else{
               
               Toast('请输入搜索内容') 
            }
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


