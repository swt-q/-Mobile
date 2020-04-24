<template>
  <div class="appIndex">
    <!--头部部分-->
    <div class="header">
      <p>新闻标题：
        <input type="text" v-model="title" />
      </p>
      <p>新闻地址：
        <input type="text" v-model="addr" />
      </p>
      <p>新闻类别：
        <select name="" id="selectClass" v-model="selectType" @change="changeHandle">
          <option v-for="(item,index) in list" :key="index" :value="item" v-text="item"></option>  
        </select>
      </p>
      <p>是否标红：
        <label for="color">
          <input type="radio" name="color" value="red" v-model="colorbg">是
        </label>
         <label for="color">
          <input type="radio" name="color" value="gray" v-model="colorbg">否
        </label>
      </p>
      <p>
        <button @click="addTypeMsgHandle([selectType,{tit:title,adr:addr,bg:colorbg}])">提交</button>
      </p>
    </div>
    <!--中间部分-->
    <div class="middle">
      <button v-for="(item,index) in list" :key="index" :class="index === middleBtn ? bgClass:''" @click="middleBtnHandle" :dataval="index">{{item}}</button>
    </div>
    <!--渲染部分-->
    <div class="renderPart">
      <ul v-if="renderPartStore[middleBtn].list.length === 0 ? false:true">
        <li v-for="(item,index) in renderPartStore[middleBtn].list" :key="index" :style="{background:item.bg}">
          <span class="title-first">{{item.tit}}</span>
          <span>{{item.adr}}</span>
          <button class="delete" @click="deleteHandle([index,selectType])">删除</button>
        </li>
      </ul>
    </div>
    <swtHandle></swtHandle>
    <swtIndex></swtIndex>
  </div>
  
</template>
<script>
  import swtHandle from "./components/swtHandle.vue";
  import swtIndex from "./components/swt";
  import {mapState,mapActions,mapMutations} from "vuex";
  export default {  
    name:"AppIndex",
    components:{
    swtHandle,
    swtIndex
    },
    data(){
      return{
        list:["科技","娱乐","游戏"],
        middleBtn:0,
        bgClass:"bgClass",
        colorbg:"red",
        selectType:"科技",
        renderPart:[],
        title:"",
        addr:"",
        templateShow:true,
       
      }
    },
    
    methods:{
      ...mapActions({
        actionCommit:"actionCommit",  // 刷新获取
        addTypeMsgHandle:"addTypeMsgHandle", // 添加
        deleteHandle:"deleteHandle"  //删除
      }),
      ...mapMutations({

      }),
      middleBtnHandle(e){
        let event = e || window.event;
        let target = event.target || event.srcElement;
        var targetText = target.innerText;
        //找到显示的那个索引。并保存。
        for(let i = 0;i < this.list.length;i++){
          if(this.list[i] == targetText){
            this.middleBtn = i;
          }
        }
        //刷新缓存显示不变。
        sessionStorage.setItem("middleBtn",this.middleBtn);

        // this.actionCommit([this.middleBtn.toString(),this.list]);
      },
    },
    computed:{
      ...mapState({
        renderPartStore:state => state.renderPartStore,
      })
    },
    watch:{

    },
    //vue组件的八个生命周期。
    beforeCreate(){
      console.log("AppIndex创建前---beforeCreate");
    },
    created(){
      this.actionCommit();
      this.middleBtn = Number(sessionStorage.getItem("middleBtn"));
      console.log("AppIndex组件创建完成---created",this.list,this.renderPartStore);
    },
    beforeMount(){
      console.log("AppIndex组件挂载前---beforeMount",this.list);
    },
    mounted(){
      console.log("AppIndex组件挂载完成---mounted",this.list);
    },
    beforeUpdate(){
      console.log("AppIndex组件数据更新前---beforeUpdate");
    },
    updated(){
      console.log("AppIndex组件数据更新后---updated");
    },
    beforeDestory(){
      console.log("AppIndex组件销毁前---beforeDestory");
    },
    destroyed(){
      console.log("AppIndex组件销毁后---destoryed");
    },
  }
</script>
<style lang="scss">
  html,body,div,h1,h2,h3,h4,h5,p,ul,li,a{
    margin:0;
    padding:0;
  }
  .appIndex{
    font-size:20px;
    background:#fff;
    margin:0 auto;
    border:2px dashed #ccc;
    width:550px;
    height:650px;
    margin-top:30px;
    .header{
      width:400px;
      height:200px;
      margin:0 auto;
    }
    .header p{
      margin:15px 0px;
    }
  }
  .middle{
      width:400px;
      height:50px;
      margin:0 auto;
      line-height:50px;
      border-top:5px solid blue;
      border-bottom:5px solid blue;
  }
  .bgClass{
    background:palegreen;
  }
  .renderPart{
    width:400px;
    margin:0 auto;
  }
  .title-first{
    margin-right:30px;
  }
  .delete{
    float:right;
  }
  .renderPart li{
    border-bottom:2px dashed yellowgreen;
  }
</style>
