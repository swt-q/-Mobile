<template>
    <div class="classify">
        classify分类-------------------{{name}}
        <h2>{{paseval}}</h2>
    </div>
</template>
<script>
    export default {
        name:"classify",
        //props:["paseval"],//数组接收
        props:{
            paseval:{
                type:String,
                default:"默认值"
            }
        },
        data(){
            return{
                name:"classify"
            }
        }
    }
</script>
<style lang="less" scoped>

</style>