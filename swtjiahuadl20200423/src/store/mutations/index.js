export default {
    mutationsState(state){
        console.log(1245,JSON.parse(sessionStorage.getItem("allList")));
        state.renderPartStore = JSON.parse(sessionStorage.getItem("allList")) ? JSON.parse(sessionStorage.getItem("allList")):state.renderPartStore;
    },
    //添加push
    addTypeMsgMutationsHandle(state,colorbg){
        //取
        state.renderPartStore = JSON.parse(sessionStorage.getItem("allList")) ? JSON.parse(sessionStorage.getItem("allList")):state.renderPartStore;
        for(let i = 0;i < state.renderPartStore.length;i++){
            if(state.renderPartStore[i].name === colorbg[0]){
                state.renderPartStore[i].list.push(colorbg[1]);
            }
        }
        //存
        sessionStorage.setItem("allList",JSON.stringify(state.renderPartStore));

        //这个逻辑还是比较重要的，一定 ----- 取 ----- 再push添加 ----- 存，循环。
    },
    //删除
    deleteMutationsHandle(state,params){
        //取
        state.renderPartStore = JSON.parse(sessionStorage.getItem("allList")) ? JSON.parse(sessionStorage.getItem("allList")):state.renderPartStore;
        for(let i = 0;i < state.renderPartStore.length;i++){
            if(state.renderPartStore[i].name === params[1]){  //判断删除的是哪一个类型
                state.renderPartStore[i].list.splice(params[0],1);
            }
        }
        //存
        sessionStorage.setItem("allList",JSON.stringify(state.renderPartStore));

        console.log(params,"删除传递的参数。。。。");
    }
}