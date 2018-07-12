<style>
  .one{
    border-top: 5px solid #0f0;
    font-size: 0.16rem;
  }
</style>
<template>
  <div>
    <child-component ></child-component>
    <div class="one">我是父子2</div>
    <input  type="text" />
  </div>
</template>
<script>
  import childComponent from './childComponent'
  export default{
    data (){
      return{
        parentValue: '232'
      }
    },
    created(){

    },
    methods: {

    },
    components: {//局部注册组件，因为可能要注册 多个组件，所以用components
      childComponent,
    }
  }
</script>
