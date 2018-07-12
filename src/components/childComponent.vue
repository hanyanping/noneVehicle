<style>
  .title{
    font-size: .16rem;
  }
</style>
<template>
  <div>
    <div class="title">{{parentValue}}</div>
    <input type="tel" v-model="childValue" @input="touchParent"/>
  </div>
</template>

<script>
  export default{

    data (){
      return{
        childValue: ''
      }
    },
    created(){

    },
    props:{
      parentValue: String,
    },
    methods:{
      touchParent() {
        console.log(44)
        this.$emit("fromChild",this.childValue)
      }
    }
  }
</script>
