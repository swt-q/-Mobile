export default {
    mutationsState(state,middleBtn){
        console.log(state,middleBtn);
    },
    //添加push
    addTypeMsgMutationsHandle(state,colorbg){
        for(let i = 0;i < state.renderPartStore.length;i++){
            if(state.renderPartStore[i].name === colorbg[0]){
                state.renderPartStore[i].list.push(colorbg[1]);
            }
        }
        sessionStorage.setItem("allList",JSON.stringify(state.renderPartStore));
       state.renderPartStore = JSON.parse(sessionStorage.getItem("allList"));
        
    }
}