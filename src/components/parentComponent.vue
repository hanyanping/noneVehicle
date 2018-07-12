<style>
  .one{
    border-top: 5px solid #f00;
    font-size: 0.16rem;
  }
  .date{
     width: 100%;
  }
  .dataText{
    font-size: 0.20rem;
  }
  .showTime{
    display: inline-block;
    width: 60%;
    height: 20px;
  }
</style>
<template>
  <div>
    <child-component @fromChild="change"  :parent-value="parentValue"></child-component>
    <div class="one">我是父子1</div>
    <input v-model="parentValue" type="text" />
    <div class="date">
      <div class="dataText">
        时间: <span class="showTime" @click="openPicker" style="border-bottom:1px solid #bbb">{{pickerValueone}}</span>
       </div>

      <mt-datetime-picker
      v-model="pickerValue"
      type="date"
      ref="picker"
      @confirm="handleChange"
      :startDate="before"
      :endDate="now"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
      </mt-datetime-picker>
    </div>
    <div class="mint-cell-value is-link" @click="choiceArea">
      <input placeholder="请选择省市" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.areaText">
      <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
      </div>
      <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
    </mt-popup>

  </div>
</template>
<script>
  import childComponent from './childComponent'
  import { DatetimePicker } from 'mint-ui';
  import { Swipe, SwipeItem } from 'mint-ui';
  export default{
    data (){
      return{
        slots: [{
          flex: 1,
          values: APIProvinceList,
          defaultIndex: 10,
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: APICityList,
          defaultIndex: 0,
          className: 'slot3',
          textAlign: 'left'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: APIAddressList,
          defaultIndex: 0,
          className: 'slot5',
          textAlign: 'left'
        }],
        popupVisible: false,
        parentValue: '232',
        pickerValue: '',
        now: new Date(),
        before: new Date('1983-02-23'),
      pickerValueone: ''
      }
    },
    created(){

    },
    methods: {
      loadAreaList: function() {
        Service.common().getRegionTree({
          regionIds: ''
        }).then(response => {
          if(response.data) {
            console.log(response.data.data)

            APIProvinceList = response.data.data
            APICityList = APIProvinceList[0].children
            APIAddressList = APICityList[0].children
            this.slots[0].values = APIProvinceList
            this.slots[2].values = APICityList
            this.slots[4].values = APIAddressList
          } else {
            Toast('地区数据异常')
          }
        })
      },
      choiceArea: function() {
        this.popupVisible = true
        // 设置默认选中
      },
      onCityChange: function(picker, values) {

        this.areaPicker = picker
        /* 此处不直接使用this.data.privinceName、this.data.cityName、this.data.provinceId、this.data.cityId，
                 * 由于在加载地区信息之后，我又重新设置了绑定到slots属性的值，此时也会触发@change事件，
                 * 所以在nCityChange方法里需要用四个变量替代上述四个变量来记录当前选中的值，然后在点击确定之后的方法里将这四个值赋给上述四个变量。
                 * 如果直接在该方法里使用上述四个变量来获取当前选中的值，可能导致数据错乱 */
        picker.setSlotValues(1, address[values[0]])
        this.addressProvince = values[0]
        this.addressCity = values[1]
        this.addressProvinceId = provinceCodeList[this.addressProvince] + ''
        this.addressCityId = cityCodeList[this.addressCity] + ''
      },
      cancleaddress: function() {
        this.popupVisible = false
        this.areaPicker.setSlotValues(0, this.data.privinceName)
        this.areaPicker.setSlotValues(1, this.data.cityName)
      },
      selectaddress: function() {
        this.popupVisible = false
        this.data.privinceName = this.addressProvince
        this.data.cityName = this.addressCity
        this.data.provinceId = this.addressProvinceId
        this.data.cityId = this.addressCityId
        this.data.areaText = this.data.privinceName + this.data.cityName

      },
      formatDate(date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '- ' + m + '- ' + d
      },
      change(datamsg){
        this.parentValue= datamsg
      },
      openPicker() {
        this.$refs.picker.open();
      },
      handleChange(value){

        this.pickerValueone = this.formatDate(value)
      }
    },
    components: {//局部注册组件，因为可能要注册 多个组件，所以用components
      childComponent,
    }
  }
</script>
