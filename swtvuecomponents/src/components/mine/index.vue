<template>
    <div class="mine">
        mine我的-------------------{{name}}
    </div>
</template>
<script>
    export default {
        name:"mine",
        data(){
            return{
                name:"mine",
                msg:"我是子组件mine传给--swtApp的值。"
            }
        },
        beforeCreate(){
            console.log("mine组件生命周期--------beforeCreate");
        },
        created(){
            
            console.log("mine组件生命周期--------created",this.msg);
        },
        beforeMount(){
            this.$emit("minePassHandle",this.msg);
            console.log("mine组件生命周期--------beforeMount");
        },
        mounted(){
            console.log("mine组件生命周期--------mounted");
        },
        beforeUpdate(){
            console.log("mine组件生命周期--------beforeUpdate");
        },
        updated(){
            console.log("mine组件生命周期--------updated");
        },
        beforeDestroy(){
            console.log("mine组件生命周期--------beforeDestroy");
        },
        destroyed(){
            console.log("mine组件生命周期--------destroy");
        }
    }
</script>
<style lang="less" scoped>

</style>