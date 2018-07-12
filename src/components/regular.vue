<style>
  .one{
    border-top: 5px solid #0f0;
    font-size: 0.16rem;
  }
  .lineBox{
    border-bottom: 1px solid #bbb;
    margin: 0 10px;
  }
</style>
<template>
  <div>
    <child-component ></child-component>
    <div class="one">我是父子2</div>

    <mt-field label="银行卡号" placeholder="Input username" @change="regularName" v-model="username"></mt-field>
    <div class="lineBox"> </div>
    <mt-field label="手机号" placeholder="Input email" maxlength='11' @change="regularPhone" type="tel" v-model="email"></mt-field>
    <div class="lineBox"> </div>
    <mt-field label="密码" placeholder="Input password" type="password" v-model="password"></mt-field>
    <div class="lineBox"> </div>
  </div>
</template>
<script>
  import childComponent from './childComponent'
  import { Toast } from 'mint-ui';
  export default{
    data (){
      return{
        parentValue: '232',
        username: '',
        email: '',
        password: ''
      }
    },
    created(){

    },
    methods: {
      regularPhone(){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        this.email = this.email.substring(0,11);
        if (!myreg.test(this.email)) {
          Toast({
            message: '请输入正确手机号',
            position: 'middle',
            duration: 3000
          });
        }
      },
      regularName(){
        if (this.username.length == 0){
          Toast({
            message: '请输入正确卡号',
            position: 'middle',
            duration: 3000
          });
          return;
        }
        var account = new String (this.username);
        account = account.substring(0,22); /*帐号的总数, 包括空格在内 */
        if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
          /* 对照格式 */
          if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
            ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
            var accountNumeric = '',accountChar = "", i;
            for (i=0;i<account.length;i++){
              accountChar = account.substr (i,1);
              if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
            }
            account = "";
            for (i=0;i<accountNumeric.length;i++){    /* 可将以下空格改为-,效果也不错 */
              if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
              if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
              if (i == 12) account = account + " ";/* 帐号第十二位后数后加空格 */
              account = account + accountNumeric.substr (i,1)
            }
          }
        }
        else
        {
          account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
        }
        if (account != this.username) {
          this.username = account;
        }
        if(this.username.length< 16){
          Toast({
            message: '请输入正确卡号',
            position: 'middle',
            duration: 3000
          });
        }
      },

    },
    components: {//局部注册组件，因为可能要注册 多个组件，所以用components
      childComponent,
    }
  }
</script>
