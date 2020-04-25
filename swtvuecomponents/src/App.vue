<template>
  <div id="swtApp">
      你是谁？你在哪？你在做什么？---------------{{name}}
      <Home/>
      <Classify :paseval="paseval"/>
      <Cart/>
      <Mine @minePassHandle="minePassHandle"/>
      <h2>{{passMine}}</h2>
  </div>
</template>
<script>
  import "./common/css/common.css";
  import Home from "./components/home";
  import Classify from "./components/classify";
  import Cart from "./components/cart";
  import Mine from "./components/mine";

  export default {
    // props:["minePassHandle"],
    name:"swtApp",
    components:{
      Home,
      Classify,
      Cart,
      Mine
    },
    data(){
      return{
        name:"swtApp",
        paseval:"swtApp---传递给子组件的值---简单的父子传值。",
        passMine:""
      }
    },
    methods:{
      minePassHandle(params){
        console.log(params,"子组件传递给父组件的值。");
        this.passMine = params;
      },
    },
    beforeCreate(){
      console.log("swtApp组件生命周期--------beforeCreate");
    },
    created(){
      console.log("swtApp组件生命周期--------created");
    },
    beforeMount(){
      console.log("swtApp组件生命周期--------beforeMount");
    },
    mounted(){
      console.log("swtApp组件生命周期--------mounted");
    },
    beforeUpdate(){
      console.log("swtApp组件生命周期--------beforeUpdate");
    },
    updated(){
      console.log("swtApp组件生命周期--------updated");
    },
    beforeDestroy(){
      console.log("swtApp组件生命周期--------beforeDestroy");
    },
    destroyed(){
      console.log("swtApp组件生命周期--------destroy");
    }
  }
</script>
<style lang="less">

</style>
